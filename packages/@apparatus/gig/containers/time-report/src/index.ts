import { mapStoreState, mapStoreDispatch } from '@apparatus/gig-data-store'
import { component, mapWithProps, mapHandlers, mapState } from 'refun'
import { endTimeInHooman, startTimeInHooman } from '@apparatus/gig-data-transform-time-report'
import { timeReportProps } from '@apparatus/gig-data-transform-store'
import { fromUnixTime, formatISO9075 } from 'date-fns'
import { startTimeFromHooman, lengthFromHooman } from '@apparatus/gig-data-transform-input'
import { OrganismTimeReport } from '@apparatus/gig-organisms-time-report'

export const componentTimeReport = component(
  mapStoreState((state) => state, ['section']),
  mapWithProps(timeReportProps),
  mapStoreDispatch('dispatch'),
  mapHandlers({
    onBack: ({ dispatch, selectedGig }) => () => {
      dispatch({
        type: 'NAVIGATE',
        payload: {
          section: 'GIG',
          selectedGig,
        },
      })
    },
  }),
  mapState(
    'internalStartTime',
    'setInternalStartTime',
    ({ startTime, length }) => (
      (startTime !== undefined && length !== undefined)
        ? startTimeInHooman({ startTime, length, rate: 0, currency: '' })
        : ''
    ),
    ['startTime']
  ),
  mapState(
    'internalEndTime',
    'setInternalEndTime',
    ({ startTime, length }) => (
      (startTime !== undefined && length !== undefined)
        ? endTimeInHooman({ startTime, length, rate: 0, currency: '' })
        : ''
    ),
    ['startTime', 'length']
  ),
  mapState(
    'internalDate',
    'setInternalDate',
    ({ startTime, today }) => (
      (startTime !== undefined)
        ? formatISO9075(
          fromUnixTime(startTime),
          { representation: 'date' }
        )
        : today
    ),
    ['startTime', 'today']
  ),
  mapHandlers({
    onSave: ({ dispatch, internalDate, internalEndTime, internalStartTime, startTime }) => () => {
      if (startTime === undefined) {
        dispatch({
          type: 'TIME_REPORT_NEW',
          payload: {
            startTime: startTimeFromHooman(internalDate, internalStartTime),
            length: lengthFromHooman(internalStartTime, internalEndTime),
          },
        })
      } else {
        dispatch({
          type: 'TIME_REPORT_UPDATE',
          payload: {
            currentStartTime: startTime,
            startTime: startTimeFromHooman(internalDate, internalStartTime),
            length: lengthFromHooman(internalStartTime, internalEndTime),
          },
        })
      }
    },
    onDiscard: ({ dispatch, startTime }) => () => {
      if (startTime === undefined) {
        dispatch({
          type: 'NAVIGATE',
          payload: {
            section: 'GIG',
          },
        })
      } else {
        dispatch({
          type: 'TIME_REPORT_REMOVE',
          payload: {
            startTime,
          },
        })
      }
    },
  })
)

export const ContainerTimeReport = componentTimeReport(OrganismTimeReport)
