import { component, mapHandlers } from 'refun'
import { mapStoreState, mapStoreDispatch } from '@apparatus/gig-data-store'
import { OrganismGigCongratulations } from '@apparatus/gig-organisms-gig-congratulations'

export const componentGigCongratulations = component(
  mapStoreState((state) => state, ['selectedGig']),
  mapStoreDispatch('dispatch'),
  mapHandlers({
    onClose: ({ dispatch }) => () => {
      dispatch({
        type: 'NAVIGATE',
        payload: {
          section: 'HOME',
        },
      })
    },
    onGoToGig: ({ dispatch }) => () => {
      dispatch({
        type: 'NAVIGATE',
        payload: {
          section: 'GIG',
        },
      })
    },
    onGoToHome: ({ dispatch }) => () => {
      dispatch({
        type: 'NAVIGATE',
        payload: {
          section: 'HOME',
        },
      })
    },
  })
)

export const ContainerGigCongratulations = componentGigCongratulations(OrganismGigCongratulations)
