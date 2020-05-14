import { component, mapHandlers, mapWithProps, mapState } from 'refun'
import { mapStoreState, mapStoreDispatch } from '@apparatus/gig-data-store'
import { trackTimeProps } from '@apparatus/gig-data-transform-store'
import { OrganismTrackTime } from '@apparatus/gig-organisms-track-time'
import { getCurrentTimeInSeconds } from '@apparatus/effects-get-current-time-in-seconds'

export const componentTrackTime = component(
  mapStoreState((state) => state, ['section', 'startTime']),
  mapWithProps(trackTimeProps),
  mapStoreDispatch('dispatch'),
  mapState('endTime', 'setEndTime', () => -1, []),
  mapHandlers({
    onBack: ({ dispatch }) => () => {
      dispatch({
        type: 'NAVIGATE',
        payload: { section: 'GIG' },
      })
    },
    toggleTracking: ({ dispatch, startTime, setEndTime }) => () => {
      if (startTime === undefined) {
        dispatch({
          type: 'TRACKING_START',
          payload: {
            startTime: getCurrentTimeInSeconds(),
          },
        })
      } else {
        setEndTime(getCurrentTimeInSeconds())
      }
    },
    onRing: ({ dispatch, endTime }) => () => {
      dispatch({
        type: 'TRACKING_STOP',
        payload: { endTime },
      })
    },
  }),
  mapWithProps(({ startTime, endTime }) => ({
    primaryCallToAction: (startTime !== undefined || endTime > 0)
      ? 'Stop Tracking'
      : 'Start Tracking',
  }))
)

export const ContainerTrackTime = componentTrackTime(OrganismTrackTime)
