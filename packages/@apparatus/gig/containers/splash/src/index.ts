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
      setLocalTimeout(onLoaded, 1000)

      // Actual condition for loaded is:
      // today is set
      // current time zone is set
      // current time zone offset is set
      // storage is read
      // rootDimensions are set
      // TODO: Design a "pre loaded" state where these props
      // are optional and a "post loaded" state where they are mandatory
    }, [])

    return {}
  })
)

export const ContainerSplash = componentSplash(OrganismSplash)
