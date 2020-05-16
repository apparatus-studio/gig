import React, { FC, ReactElement } from 'react'
import { ContextParentSizeProvider, ContextDebugProvider, SideNavigation } from '@apparatus/blocks-index'

export type TOrganismSectionSelector = {
  Section: () => ReactElement,
  parentHeight: number,
  parentWidth: number,
}

export const OrganismSectionSelector: FC<TOrganismSectionSelector> = ({
  Section,
  parentWidth,
  parentHeight,
}) => (
  <ContextParentSizeProvider
    parentHeight={parentHeight}
    parentWidth={parentWidth}
  >
    <ContextDebugProvider shouldDebug={false}>
      <SideNavigation
        Component={Section}
      />
    </ContextDebugProvider>
  </ContextParentSizeProvider>
)

OrganismSectionSelector.displayName = 'OrganismSectionSelector'
