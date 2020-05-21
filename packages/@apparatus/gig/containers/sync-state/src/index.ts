import { useEffect } from 'react'
import { component, mapHandlers, mapWithProps } from 'refun'
import { mapStoreState, mapStoreDispatch } from '@apparatus/gig-data-store'
import { saveState, readState } from '@apparatus/effects-sync-persistent-state'
import { TStorableData } from '@apparatus/gig-types-store'

export const componentSyncState = component(
  mapStoreState(
    (state) => state,
    [
      'currentCurrency',
      'currentTimeZone',
      'currentTimeZoneOffset',
      'firstDayOfWeek',
      'gigs',
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
  }),
  mapWithProps(
    ({
      onSyncState,
      currentCurrency,
      gigs,
      selectedGig,
      currentTimeZone,
      currentTimeZoneOffset,
      firstDayOfWeek,
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
      }, [])

      useEffect(() => {
        saveState({
          currentCurrency,
          gigs,
          selectedGig,
          currentTimeZone,
          currentTimeZoneOffset,
          firstDayOfWeek,
        })
          .then(() => {
            // nothing to do here
          })
          .catch(() => {
            // nothing here either
          })
      }, [
        currentCurrency,
        gigs,
        selectedGig,
        currentTimeZone,
        currentTimeZoneOffset,
        firstDayOfWeek,
      ])

      return {}
    }
  )
)

export const ContainerSyncState = componentSyncState(() => null)
