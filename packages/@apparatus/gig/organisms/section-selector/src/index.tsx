import React, { FC } from 'react'
import {
  ContextParentSizeProvider,
  ContextDebugProvider,
  SideNavigation,
  ContextThemeProvider,
  createTheme,
} from '@apparatus/blocks-index'
import * as tokens from '@apparatus/gig-themes-gig-tokens'
import { ContainerShare } from '@apparatus/gig-containers-share'
import { ContainerSyncState } from '@apparatus/gig-containers-sync-state'

export type TOrganismSectionSelector = {
  Section: FC<any>,
  parentHeight: number,
  parentWidth: number,
}

export const OrganismSectionSelector: FC<TOrganismSectionSelector> = ({
  Section,
  parentWidth,
  parentHeight,
}) => (
  <>
    <ContainerShare/>
    <ContainerSyncState/>
    <ContextParentSizeProvider
      parentHeight={parentHeight}
      parentWidth={parentWidth}
    >
      <ContextDebugProvider shouldDebug={false}>
        <ContextThemeProvider theme={createTheme(tokens)}>
          <SideNavigation
            Component={Section}
          />
        </ContextThemeProvider>
      </ContextDebugProvider>
    </ContextParentSizeProvider>
  </>
)

OrganismSectionSelector.displayName = 'OrganismSectionSelector'
