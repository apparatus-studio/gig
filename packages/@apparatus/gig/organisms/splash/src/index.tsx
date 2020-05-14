import React from 'react'
import { startWithType, component, mapContext } from 'refun'
import {
  ContextInterfaceProvider,
  INTERFACE_CONTEXT_ACCENT,
  FullCover,
  Vertical,
  ContextParentSize,
} from '@apparatus/blocks-index'
import { GigLogo } from '@apparatus/gig-molecules-gig-logo'

export type TOrganismSplash = {}

export const OrganismSplash = component(
  startWithType<TOrganismSplash>(),
  mapContext(ContextParentSize)
)(({ parentHeight, parentWidth }) => (
  <ContextInterfaceProvider interfaceContext={INTERFACE_CONTEXT_ACCENT}>
    <FullCover>
      <Vertical
        height={parentHeight}
        width={parentWidth}
        hAlign="center"
        vAlign="center"
      >
        <GigLogo/>
      </Vertical>
    </FullCover>
  </ContextInterfaceProvider>
))

OrganismSplash.displayName = 'OrganismSplash'
