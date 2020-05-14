import { component, mapHandlers } from 'refun'
import { mapStoreState, mapStoreDispatch } from '@apparatus/gig-data-store'
import { OrganismAboutGig } from '@apparatus/gig-organisms-about-gig'

export const componentAboutGig = component(
  mapStoreState((state) => state, ['rootHeight', 'rootWidth']),
  mapStoreDispatch('dispatch'),
  mapHandlers({
    onBack: ({ dispatch }) => () => {
      dispatch({
        type: 'NAVIGATE',
        payload: {
          section: 'SETTINGS',
        },
      })
    },
  })
)

export const ContainerAboutGig = componentAboutGig(OrganismAboutGig)
