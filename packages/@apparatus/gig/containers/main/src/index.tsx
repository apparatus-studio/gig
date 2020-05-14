import { useEffect } from 'react'
import { mapStoreState, mapStoreDispatch } from '@apparatus/gig-data-store'
import { component, mapHandlers, mapWithProps } from 'refun'
import { updateRootDimensions } from '@apparatus/effects-update-root-dimensions'
import { OrganismSectionSelector } from '@apparatus/gig-organisms-section-selector'

export const componentContainerMain = component(
  mapStoreState(
    ({
      section,
      rootHeight,
      rootWidth,
    }) => ({
      section,
      rootHeight,
      rootWidth,
    }),
    [
      'section',
      'rootHeight',
      'rootWidth',
    ]
  ),
  mapStoreDispatch('dispatch'),
  mapHandlers({
    onUpdateRootDimensions: ({ dispatch }) => (rootWidth, rootHeight) => {
      dispatch({
        type: 'ROOT_DIMENSIONS_UPDATE',
        payload: {
          rootHeight,
          rootWidth,
        },
      })
    },
  }),
  mapWithProps(({ onUpdateRootDimensions }) => {
    useEffect(() => {
      updateRootDimensions(onUpdateRootDimensions)
    }, [])

    return {}
  })
)

export const ContainerMain = componentContainerMain(OrganismSectionSelector)
