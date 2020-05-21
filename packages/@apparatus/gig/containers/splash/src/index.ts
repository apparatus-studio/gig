import { useEffect } from 'react'
import { component, mapHandlers, mapSafeTimeout, mapWithProps } from 'refun'
import { mapStoreState, mapStoreDispatch } from '@apparatus/gig-data-store'
import { OrganismSplash } from '@apparatus/gig-organisms-splash'

export const componentSplash = component(
  mapStoreState((state) => state, ['rootHeight', 'rootWidth']),
  mapStoreDispatch('dispatch'),
  mapHandlers({
    onLoaded: ({ dispatch }) => () => {
      dispatch({
        type: 'LOADED',
      })
    },
  }),
  mapSafeTimeout('setLocalTimeout'),
  mapWithProps(({ setLocalTimeout, onLoaded }) => {
    useEffect(() => {
      setLocalTimeout(onLoaded, 3000)
    }, [])

    return {}
  })
)

export const ContainerSplash = componentSplash(OrganismSplash)
