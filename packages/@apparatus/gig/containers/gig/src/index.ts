import { component, mapHandlers, mapState, mapWithProps } from 'refun'
import { mapStoreDispatch, mapStoreState } from '@apparatus/gig-data-store'
import { gigProps } from '@apparatus/gig-data-transform-store'
import { OrganismGig } from '@apparatus/gig-organisms-gig'
import { TPeriod } from '@apparatus/gig-types-data'

export const componentGig = component(
  mapStoreState(
    (state) => state,
    [
      'period',
      'section',
    ]
  ),
  mapWithProps(gigProps),
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
