import { component, mapHandlers } from 'refun'
import { mapStoreState, mapStoreDispatch } from '@apparatus/gig-data-store'
import { OrganismGigRemove } from '@apparatus/gig-organisms-gig-remove'

export const componentGigRemove = component(
  mapStoreState((state) => state, ['selectedGig']),
  mapStoreDispatch('dispatch'),
  mapHandlers({
    onCancel: ({ dispatch }) => () => {
      dispatch({
        type: 'NAVIGATE',
        payload: {
          section: 'GIG',
        },
      })
    },
    onConfirmRemove: ({ dispatch }) => () => {
      dispatch({
        type: 'GIG_REMOVE',
      })
    },
  })
)

export const ContainerGigRemove = componentGigRemove(OrganismGigRemove)
