import { useEffect } from 'react'
import { component, mapHandlers, mapWithProps } from 'refun'
import { mapStoreState, mapStoreDispatch } from '@apparatus/gig-data-store'
import { saveState, readState } from '@apparatus/effects-sync-persistent-state'
import { TStorableData } from '@apparatus/gig-types-store'
import { subscribe } from '@apparatus/effects-time-information-events'

export const componentSyncState = component(
  mapStoreState(
    (state) => state,
    [
      'currentCurrency',
      'currentTimeZone',
      'currentTimeZoneOffset',
      'firstDayOfWeek',
      'gigs',
      'hasReadStorage',
      'selectedGig',
    ]
  ),
  mapStoreDispatch('dispatch'),
  mapHandlers({
    onSyncState: ({ dispatch }) => ({
      currentCurrency,
      gigs,
      selectedGig,
      currentTimeZone,
      currentTimeZoneOffset,
      firstDayOfWeek,
    }) => {
      dispatch({
        type: 'SYNC_STATE',
        payload: {
          currentCurrency,
          gigs,
          selectedGig,
          currentTimeZone,
          currentTimeZoneOffset,
          firstDayOfWeek,
        },
      })
    },
    onUpdateCurrentDay: ({ dispatch }) => (day: string) => {
      dispatch({
        type: 'UPDATE_CURRENT_DAY',
        payload: day,
      })
    },
    onUpdateCurrentTimeZone: ({ dispatch }) => (timeZone: string) => {
      dispatch({
        type: 'UPDATE_CURRENT_TIME_ZONE',
        payload: timeZone,
      })
    },
    onUpdateCurrentTimeZoneOffset: ({ dispatch }) => (timeZoneOffset: number) => {
      dispatch({
        type: 'UPDATE_CURRENT_TIME_ZONE_OFFSET',
        payload: timeZoneOffset,
      })
    },
  }),
  mapWithProps(
    ({
      currentCurrency,
      currentTimeZone,
      currentTimeZoneOffset,
      firstDayOfWeek,
      gigs,
      hasReadStorage,
      onSyncState,
      onUpdateCurrentDay,
      onUpdateCurrentTimeZone,
      onUpdateCurrentTimeZoneOffset,
      selectedGig,
    }) => {
      useEffect(() => {
        readState()
          .then(
            (state) => {
              console.log('the state', state)

              if (state !== null && (state as TStorableData).gigs != null) {
                onSyncState(state as TStorableData)
              }
            }
          )
          .catch(() => {
            // odd error
          })

        const unsubscribeNewDay = subscribe({
          type: 'newDay',
          callback: onUpdateCurrentDay,
        })

        const unsubscribeTimeZone = subscribe({
          type: 'timeZone',
          callback: onUpdateCurrentTimeZone,
        })

        const unsubscribeTimeZoneOffset = subscribe({
          type: 'timeZoneOffset',
          callback: onUpdateCurrentTimeZoneOffset,
        })

        return () => {
          unsubscribeNewDay()
          unsubscribeTimeZone()
          unsubscribeTimeZoneOffset()
        }
      }, [])

      useEffect(() => {
        if (hasReadStorage) {
          saveState({
            currentCurrency,
            gigs,
            selectedGig,
            currentTimeZone,
            currentTimeZoneOffset,
            firstDayOfWeek,
          })
            .then(() => {
              // nothing to do here, but linter wants it
            })
            .catch(() => {
              // nothing here either, but linter wants it
            })
        }
      }, [
        currentCurrency,
        gigs,
        selectedGig,
        currentTimeZone,
        currentTimeZoneOffset,
        firstDayOfWeek,
        hasReadStorage,
      ])

      return {}
    }
  )
)

export const ContainerSyncState = componentSyncState(() => null)
