import test from 'tape'
import { getUnixTime, addMinutes, addHours, parseISO } from 'date-fns'
import { state } from '@apparatus/gig-data-demo'
import { reducer } from '../src'

test('reducer: add gig', (t) => {
  const result = reducer(
    state,
    {
      type: 'GIG_NEW',
      payload: {
        name: 'Globex',
        timeReports: [],
        currentRate: 1500,
      },
    }
  )

  t.deepEquals(
    result.gigs[2].name,
    'Globex',
    'should be Globex'
  )

  t.deepEquals(
    result.section,
    'GIG_CONGRATULATIONS',
    'should be GIG_CONGRATULATIONS'
  )

  t.deepEquals(
    result.selectedGig,
    'Globex',
    'should be Globex'
  )

  t.end()
})

test('reducer: add time report', (t) => {
  const result = reducer(
    reducer(
      {
        ...state,
        gigs: [],
        section: 'HOME',
        today: '2020-04-14',
        selectedGig: 'ACME',
        period: 'day',
      },
      {
        type: 'GIG_NEW',
        payload: {
          name: 'ACME',
          timeReports: [],
          currentRate: 1500,
        },
      }
    ),
    {
      type: 'TIME_REPORT_NEW',
      payload: {
        startTime: getUnixTime(
          addMinutes(
            addHours(
              parseISO('2020-04-12'),
              10
            ),
            30
          )
        ),
        length: 4 * 60 * 60,
      },
    }
  )

  t.deepEquals(
    result.gigs[0].timeReports[0].rate,
    1500,
    'should be 1500'
  )

  t.deepEquals(
    result.section,
    'GIG',
    'should be GIG'
  )

  t.end()
})

test('reducer: update time report', (t) => {
  const result = reducer(
    state,
    {
      type: 'TIME_REPORT_UPDATE',
      payload: {
        currentStartTime: state.gigs[0].timeReports[1].startTime,
        startTime: state.gigs[0].timeReports[1].startTime - 60 * 60,
        length: state.gigs[0].timeReports[1].length + 30 * 60,
      },
    }
  )

  t.deepEquals(
    result.gigs[0].timeReports[1].startTime,
    state.gigs[0].timeReports[1].startTime - 60 * 60,
    `should be ${state.gigs[0].timeReports[1].startTime - 60 * 60}`
  )

  t.deepEquals(
    result.gigs[0].timeReports[1].length,
    state.gigs[0].timeReports[1].length + 30 * 60,
    `should be ${state.gigs[0].timeReports[1].length + 30 * 60}`
  )

  t.deepEquals(
    result.section,
    'GIG',
    'should be GIG'
  )

  t.end()
})

test('reducer: delete time report', (t) => {
  const result = reducer(
    state,
    {
      type: 'TIME_REPORT_REMOVE',
      payload: {
        startTime: state.gigs[0].timeReports[1].startTime,
      },
    }
  )

  t.deepEquals(
    result.gigs[0].timeReports.length,
    2,
    `should be ${2}`
  )

  t.deepEquals(
    result.gigs[0].timeReports[1].startTime,
    state.gigs[0].timeReports[2].startTime,
    `should be ${state.gigs[0].timeReports[2].startTime}`
  )

  t.deepEquals(
    result.section,
    'GIG',
    'should be GIG'
  )

  t.end()
})

test('reducer: navigate', (t) => {
  t.deepEquals(
    reducer(
      state,
      {
        type: 'NAVIGATE',
        payload: {
          section: 'GIG',
          selectedGig: 'ACME',
        },
      }
    ).section,
    'GIG',
    'should be GIG'
  )

  t.end()
})

test('reducer: update gig', (t) => {
  t.deepEquals(
    reducer(
      state,
      {
        type: 'GIG_UPDATE',
        payload: {
          name: 'Different',
          currentRate: 200,
        },
      }
    ).gigs[0].name,
    'Different',
    'should be Different'
  )

  t.deepEquals(
    reducer(
      state,
      {
        type: 'GIG_UPDATE',
        payload: {
          name: 'Different',
          currentRate: 200,
        },
      }
    ).selectedGig,
    'Different',
    'should be Different'
  )

  t.end()
})

test('reducer: remove gig', (t) => {
  const result = reducer(
    {
      ...state,
      section: 'GIG_REMOVE',
    },
    {
      type: 'GIG_REMOVE',
    }
  )

  t.deepEquals(
    result.gigs.length,
    1,
    'should be 1'
  )

  t.deepEquals(
    result.selectedGig,
    'BigBuy',
    'should be BigBuy'
  )

  t.deepEquals(
    result.section,
    'HOME',
    'should be HOME'
  )

  const newResult = reducer(result, { type: 'GIG_REMOVE' })

  t.deepEquals(
    newResult.gigs.length,
    0,
    'should be 0'
  )

  t.deepEquals(
    newResult.selectedGig,
    '',
    'should be ""'
  )

  t.end()
})

test('reducer: period update', (t) => {
  const result = reducer(
    state,
    {
      type: 'PERIOD_UPDATE',
      payload: {
        period: 'month',
      },
    }
  )

  t.deepEquals(
    result.period,
    'month',
    `should be month`
  )

  t.end()
})

test('reducer: root dimensions update', (t) => {
  const result = reducer(
    state,
    {
      type: 'ROOT_DIMENSIONS_UPDATE',
      payload: {
        rootHeight: 800,
        rootWidth: 400,
      },
    }
  )

  t.deepEquals(
    result.rootHeight,
    800,
    'should be 800'
  )

  t.deepEquals(
    result.rootWidth,
    400,
    'should be 400'
  )

  t.end()
})

test('reducer: keyboard status update', (t) => {
  const result = reducer(
    state,
    {
      type: 'KEYBOARD_STATUS_UPDATE',
      payload: {
        isKeyboardVisible: true,
        keyboardHeight: 20,
        keyboardWidth: 40,
      },
    }
  )

  t.deepEquals(
    result.isKeyboardVisible,
    true,
    'should be true'
  )

  t.deepEquals(
    result.keyboardHeight,
    20,
    'should be 20'
  )

  t.deepEquals(
    result.keyboardWidth,
    40,
    'should be 40'
  )

  t.end()
})

test('reducer: tracking start', (t) => {
  const result = reducer(
    state,
    {
      type: 'TRACKING_START',
      payload: {
        startTime: 123442134,
      },
    }
  )

  t.deepEquals(
    result.startTime,
    123442134,
    'should be 123442134'
  )

  t.deepEquals(
    result.length,
    undefined,
    'should be undefined'
  )

  t.end()
})

test('reducer: tracking stop', (t) => {
  const result = reducer(
    {
      ...state,
      startTime: 123442134,
    },
    {
      type: 'TRACKING_STOP',
      payload: {
        endTime: 123442134 + 1000,
      },
    }
  )

  t.deepEquals(
    result.length,
    1000,
    'should be 1000'
  )

  t.deepEquals(
    result.gigs[0].timeReports[result.gigs[0].timeReports.length - 1].startTime,
    123442134,
    'should be 123442134'
  )

  t.deepEquals(
    result.gigs[0].timeReports[result.gigs[0].timeReports.length - 1].length,
    1000,
    'should be 1000'
  )

  t.deepEquals(
    result.section,
    'TIME_REPORT',
    'should be TIME_REPORT'
  )

  t.end()
})

test('reducer: currency update', (t) => {
  const result = reducer(
    state,
    {
      type: 'CURRENCY_UPDATE',
      payload: {
        description: 'Argentina Peso',
        code: 'ARS',
        symbol: '$',
      },
    }
  )

  t.deepEquals(
    result.currentCurrency.description,
    'Argentina Peso',
    'should be Argentina Peso'
  )

  t.end()
})

test('reducer: share start', (t) => {
  const result = reducer(
    state,
    {
      type: 'SHARE_START',
    }
  )

  t.deepEquals(
    result.shouldShare,
    true,
    'should be true'
  )

  t.end()
})

test('reducer: share stop', (t) => {
  const result = reducer(
    state,
    {
      type: 'SHARE_STOP',
    }
  )

  t.deepEquals(
    result.shouldShare,
    false,
    'should be false'
  )

  t.end()
})

test('reducer: sync state', (t) => {
  const gigs = [
    {
      name: 'Ericsson',
      currentRate: 1400,
      timeReports: [
        {
          rate: 1400,
          currency: 'SEK',
          startTime: getUnixTime(
            addHours(
              parseISO('2020-04-14'),
              15
            )
          ),
          length: 3 * (60 * 60),
        },
      ],
    },
  ]

  const result = reducer(
    state,
    {
      type: 'SYNC_STATE',
      payload: {
        currentCurrency: state.currencies[7],
        gigs,
        selectedGig: 'Ericsson',
      },
    }
  )

  t.deepEquals(
    result.currentCurrency,
    state.currencies[7],
    `should be ${JSON.stringify(state.currencies[7])}`
  )

  t.deepEquals(
    result.gigs,
    gigs,
    `should be ${JSON.stringify(gigs)}`
  )

  t.deepEquals(
    result.selectedGig,
    'Ericsson',
    'should be Ericsson'
  )

  t.end()
})
