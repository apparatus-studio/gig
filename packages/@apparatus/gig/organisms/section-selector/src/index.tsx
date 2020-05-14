import React, { FC } from 'react'
import { ContextParentSizeProvider } from '@apparatus/blocks-index'
import { ContainerAboutGig } from '@apparatus/gig-containers-about-gig'
import { ContainerHome } from '@apparatus/gig-containers-home'
import { ContainerGig } from '@apparatus/gig-containers-gig'
import { ContainerGigCongratulations } from '@apparatus/gig-containers-gig-congratulations'
import { ContainerGigNew } from '@apparatus/gig-containers-gig-new'
import { ContainerGigRemove } from '@apparatus/gig-containers-gig-remove'
import { ContainerGigUpdate } from '@apparatus/gig-containers-gig-update'
import { ContainerOnboarding } from '@apparatus/gig-containers-onboarding'
import { ContainerSettings } from '@apparatus/gig-containers-settings'
import { ContainerSplash } from '@apparatus/gig-containers-splash'
import { ContainerTimeReport } from '@apparatus/gig-containers-time-report'
import { ContainerTrackTime } from '@apparatus/gig-containers-track-time'
import { ContainerWelcome } from '@apparatus/gig-containers-welcome'
import { TSection } from '@apparatus/gig-types-store'
import { ContainerCurrencySelect } from '@apparatus/gig-containers-currency-select'
import { TRootDimensions } from '@apparatus/gig-types-data'

export type TOrganismSectionSelector = {
  section: TSection,
}

export const SectionSelector: FC<TOrganismSectionSelector> = ({ section }) => {
  switch (section) {
    case 'CHANGE_CURRENCY':
      return <ContainerCurrencySelect/>

    case 'ABOUT_GIG':
      return <ContainerAboutGig/>

    case 'ONBOARDING':
      return <ContainerOnboarding/>

    case 'SETTINGS':
      return <ContainerSettings/>

    case 'WELCOME':
      return <ContainerWelcome/>

    case 'SPLASH':
      return <ContainerSplash/>

    case 'TIME_REPORT':
      return <ContainerTimeReport/>

    case 'TRACK_TIME':
      return <ContainerTrackTime/>

    case 'GIG_EDIT':
      return <ContainerGigUpdate/>

    case 'GIG_NEW':
      return <ContainerGigNew/>

    case 'GIG_CONGRATULATIONS':
      return <ContainerGigCongratulations/>

    case 'GIG_REMOVE':
      return <ContainerGigRemove/>

    case 'GIG':
      return <ContainerGig/>

    default:
      return <ContainerHome/>
  }
}

export const OrganismSectionSelector: FC<TOrganismSectionSelector & TRootDimensions> = ({
  section,
  rootHeight,
  rootWidth,
}) => (
  <ContextParentSizeProvider
    parentHeight={rootHeight}
    parentWidth={rootWidth}
  >
    <SectionSelector section={section}/>
  </ContextParentSizeProvider>
)
