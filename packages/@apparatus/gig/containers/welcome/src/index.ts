import { component, mapHandlers } from 'refun'
import { mapStoreDispatch, mapStoreState } from '@apparatus/gig-data-store'
import { OrganismWelcome } from '@apparatus/gig-organisms-welcome'

export const componentWelcome = component(
  mapStoreState((state) => state, []),
  mapStoreDispatch('dispatch'),
  mapHandlers({
    onOnboardMe: ({ dispatch }) => () => {
      dispatch({
        type: 'NAVIGATE',
        payload: {
          section: 'ONBOARDING',
        },
      })
    },
  })
)

export const ContainerWelcome = componentWelcome(OrganismWelcome)
