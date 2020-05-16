import { useEffect, FC } from 'react'
import { mapStoreState, mapStoreDispatch } from '@apparatus/gig-data-store'
import { component, mapHandlers, mapWithProps } from 'refun'
import { updateKeyboardStatus } from '@apparatus/effects-update-keyboard-status'
import { updateRootDimensions } from '@apparatus/effects-update-root-dimensions'
import { ContainerAboutGig } from '@apparatus/gig-containers-about-gig'
import { ContainerCurrencySelect } from '@apparatus/gig-containers-currency-select'
import { ContainerGig } from '@apparatus/gig-containers-gig'
import { ContainerGigCongratulations } from '@apparatus/gig-containers-gig-congratulations'
import { ContainerGigNew } from '@apparatus/gig-containers-gig-new'
import { ContainerGigRemove } from '@apparatus/gig-containers-gig-remove'
import { ContainerGigUpdate } from '@apparatus/gig-containers-gig-update'
import { ContainerHome } from '@apparatus/gig-containers-home'
import { ContainerOnboarding } from '@apparatus/gig-containers-onboarding'
import { ContainerSettings } from '@apparatus/gig-containers-settings'
import { ContainerSplash } from '@apparatus/gig-containers-splash'
import { ContainerTimeReport } from '@apparatus/gig-containers-time-report'
import { ContainerTrackTime } from '@apparatus/gig-containers-track-time'
import { ContainerWelcome } from '@apparatus/gig-containers-welcome'
import { OrganismSectionSelector } from '@apparatus/gig-organisms-section-selector'
import { TSection } from '@apparatus/gig-types-store'

const selectSection = (section: TSection): FC => {
  switch (section) {
    case 'CHANGE_CURRENCY':
      return ContainerCurrencySelect

    case 'ABOUT_GIG':
      return ContainerAboutGig

    case 'ONBOARDING':
      return ContainerOnboarding

    case 'SETTINGS':
      return ContainerSettings

    case 'WELCOME':
      return ContainerWelcome

    case 'SPLASH':
      return ContainerSplash

    case 'TIME_REPORT':
      return ContainerTimeReport

    case 'TRACK_TIME':
      return ContainerTrackTime

    case 'GIG_EDIT':
      return ContainerGigUpdate

    case 'GIG_NEW':
      return ContainerGigNew

    case 'GIG_CONGRATULATIONS':
      return ContainerGigCongratulations

    case 'GIG_REMOVE':
      return ContainerGigRemove

    case 'GIG':
      return ContainerGig

    default:
      return ContainerHome
  }
}

export const componentContainerMain = component(
  mapStoreState(
    ({
      keyboardHeight,
      rootHeight,
      rootWidth,
      section,
    }) => ({
      keyboardHeight,
      rootHeight,
      rootWidth,
      section,
    }),
    [
      'keyboardHeight',
      'rootHeight',
      'rootWidth',
      'section',
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
    onUpdateKeyboardStatus: ({ dispatch }) => (isKeyboardVisible, keyboardWidth, keyboardHeight) => {
      dispatch({
        type: 'KEYBOARD_STATUS_UPDATE',
        payload: {
          isKeyboardVisible,
          keyboardHeight,
          keyboardWidth,
        },
      })
    },
  }),
  mapWithProps(
    ({
      onUpdateKeyboardStatus,
      onUpdateRootDimensions,
      keyboardHeight,
      rootWidth,
      rootHeight,
      section,
    }) => {
      useEffect(() => {
        updateKeyboardStatus(onUpdateKeyboardStatus)
        updateRootDimensions(onUpdateRootDimensions)
      }, [])

      return {
        Section: selectSection(section),
        parentHeight: rootHeight - keyboardHeight,
        parentWidth: rootWidth,
      }
    }
  )
)

export const ContainerMain = componentContainerMain(OrganismSectionSelector)
