import { component, mapHandlers, mapState, mapWithProps } from 'refun'
import { mapStoreDispatch, mapStoreState } from '@apparatus/gig-data-store'
import { currentGig } from '@apparatus/gig-data-transform-store'
import { OrganismGig } from '@apparatus/gig-organisms-gig'
import { TPeriod } from '@apparatus/gig-types-data'
import { splitByDay, lengthInHooman } from '@apparatus/gig-data-transform-time-report'
import { moneyInHooman } from '@apparatus/gig-data-transform-numbers'
import { thisMonthEarnings, thisMonthHours, thisWeekEarnings, thisWeekHours, todayEarnings, todayHours } from '@apparatus/gig-data-transform-gig'

export const componentGig = component(
  mapStoreState(
    (state) => state,
    [
      'period',
      'section',
      'today',
    ]
  ),
  mapWithProps((state) => {
    const gig = currentGig(state)

    if (gig !== undefined) {
      const days = splitByDay(gig.timeReports)

      switch (state.period) {
        case 'day': {
          return {
            days,
            periodEarnings: moneyInHooman(
              todayEarnings(gig, state.today)
            ),
            periodHours: lengthInHooman(
              todayHours(gig, state.today) * (60 * 60)
            ),
          }
        }

        case 'week': {
          return {
            days,
            periodEarnings: moneyInHooman(
              thisWeekEarnings(gig, state.today)
            ),
            periodHours: lengthInHooman(
              thisWeekHours(gig, state.today) * (60 * 60)
            ),
          }
        }

        case 'month': {
          const currentMonth = state.today.slice(0, 7)

          return {
            days,
            periodEarnings: moneyInHooman(
              thisMonthEarnings(gig, currentMonth)
            ),
            periodHours: lengthInHooman(
              thisMonthHours(gig, currentMonth) * (60 * 60)
            ),
          }
        }
      }
    }

    return {}
  }),
  mapStoreDispatch('dispatch'),
  mapState('showDrawer', 'setShowDrawer', () => false, []),
  mapHandlers({
    onAddTimeReport: ({ dispatch }) => () => {
      dispatch({
        type: 'NAVIGATE',
        payload: {
          section: 'TIME_REPORT',
          startTime: undefined,
          length: undefined,
        },
      })
    },
    onBack: ({ dispatch }) => () => {
      dispatch({
        type: 'NAVIGATE',
        payload: {
          section: 'HOME',
        },
      })
    },
    onEdit: ({ dispatch }) => () => {
      dispatch({
        type: 'NAVIGATE',
        payload: {
          section: 'GIG_EDIT',
        },
      })
    },
    onRemove: ({ dispatch }) => () => {
      dispatch({
        type: 'NAVIGATE',
        payload: {
          section: 'GIG_REMOVE',
        },
      })
    },
    onExportCSV: ({ dispatch }) => () => {
      dispatch({ type: 'EXPORT_CSV' })
    },
    onTrackTime: ({ dispatch }) => () => {
      dispatch({
        type: 'NAVIGATE',
        payload: {
          section: 'TRACK_TIME',
        },
      })
    },
    onUpdatePeriod: ({ dispatch }) => (period: TPeriod) => {
      dispatch({
        type: 'PERIOD_UPDATE',
        payload: {
          period,
        },
      })
    },
    onUpdateTimeReport: ({ dispatch }) => (startTime: number, length: number) => {
      dispatch({
        type: 'NAVIGATE',
        payload: {
          section: 'TIME_REPORT',
          startTime,
          length,
        },
      })
    },
  })
)

export const ContainerGig = componentGig(OrganismGig)
