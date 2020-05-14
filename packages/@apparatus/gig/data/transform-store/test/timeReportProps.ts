import test from 'tape'
import { state } from '@apparatus/gig-data-demo'
import { lengthInHooman } from '@apparatus/gig-data-transform-time-report'
import { timeReportProps } from '../src'

test('timeReportProps: new', (t) => {
  const localState = {
    ...state,
    startTime: undefined,
    length: undefined,
  }
  const selectedState = timeReportProps(localState)

  const gig = state.gigs[0]

  t.deepEquals(
    selectedState.currentRate,
    gig.currentRate,
    `should be ${gig.currentRate}`
  )

  t.deepEquals(
    selectedState.nav,
    'New Time Report',
    'should be New Time Report'
  )

  t.deepEquals(
    selectedState.title,
    'Add Report',
    'should be Add Report'
  )

  t.deepEquals(
    selectedState.primaryCallToAction,
    'Save report',
    'should be Save report'
  )

  t.deepEquals(
    selectedState.secondaryCallToAction,
    'Discard',
    'should be Discard'
  )

  t.end()
})

test('timeReportProps: not new', (t) => {
  const localState = {
    ...state,
    startTime: state.gigs[0].timeReports[0].startTime,
    length: state.gigs[0].timeReports[0].length,
  }

  const selectedState = timeReportProps(localState)

  const gig = state.gigs[0]

  t.deepEquals(
    selectedState.currentRate,
    gig.currentRate,
    `should be ${gig.currentRate}`
  )

  t.deepEquals(
    selectedState.nav,
    'Edit Time Report',
    'should be Edit Time Report'
  )

  t.deepEquals(
    selectedState.title,
    lengthInHooman({
      startTime: localState.startTime,
      length: localState.length,
      rate: 0,
      currency: '',
    }),
    `should be ${lengthInHooman({
      startTime: localState.startTime,
      length: localState.length,
      rate: 0,
      currency: '',
    })}`
  )

  t.deepEquals(
    selectedState.primaryCallToAction,
    'Save changes',
    'should be Save changes'
  )

  t.deepEquals(
    selectedState.secondaryCallToAction,
    'Delete report',
    'should be Delete report'
  )

  t.end()
})
