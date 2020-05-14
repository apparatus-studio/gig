import { component, mapHandlers, mapWithProps } from 'refun'
import { mapStoreDispatch, mapStoreState } from '@apparatus/gig-data-store'
import * as transformStore from '@apparatus/gig-data-transform-store'
import { OrganismHome } from '@apparatus/gig-organisms-home'

export const componentContainerHome = component(
  mapStoreState(
    (state) => state,
    ['gigs', 'period', 'today']
  ),
  mapWithProps(transformStore.homeProps),
  mapStoreDispatch('dispatch'),
  mapHandlers({
    onUpdatePeriod: ({ dispatch }) => (period) => {
      dispatch({
        type: 'PERIOD_UPDATE',
        payload: { period },
      })
    },
    onNewGig: ({ dispatch }) => () => {
      dispatch({
        type: 'NAVIGATE',
        payload: {
          section: 'GIG_NEW',
        },
      })
    },
    onSelect: ({ dispatch }) => (gig) => {
      dispatch({
        type: 'NAVIGATE',
        payload: {
          section: 'GIG',
          selectedGig: gig,
        },
      })
    },
    onSettings: ({ dispatch }) => () => {
      dispatch({
        type: 'NAVIGATE',
        payload: {
          section: 'SETTINGS',
        },
      })
    },
  })
)

export const ContainerHome = componentContainerHome(OrganismHome)
