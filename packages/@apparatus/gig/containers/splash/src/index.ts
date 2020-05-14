import { component, mapHandlers, mapSafeTimeout, mapWithProps } from 'refun'
import { mapStoreState, mapStoreDispatch } from '@apparatus/gig-data-store'
import { OrganismSplash } from '@apparatus/gig-organisms-splash'

export const componentSplash = component(
  mapStoreState((state) => state, ['rootHeight', 'rootWidth']),
  mapStoreDispatch('dispatch'),
  mapHandlers({
    onLoaded: ({ dispatch }) => () => {
      dispatch({
        type: 'NAVIGATE',
        payload: {
          section: 'WELCOME',
        },
      })
    },
  }),
  mapSafeTimeout('setLocalTimeout'),
  mapWithProps(({ setLocalTimeout, onLoaded }) => {
    setLocalTimeout(onLoaded, 1000)

    return {}
  })
)

export const ContainerSplash = componentSplash(OrganismSplash)
