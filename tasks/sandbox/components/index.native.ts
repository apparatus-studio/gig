import { TComponents } from '@sandbox/ui'
/* eslint-disable import/no-extraneous-dependencies */
import * as OrganismAboutGig from '@apparatus/gig-organisms-about-gig/meta'
import * as OrganismCurrencySelect from '@apparatus/gig-organisms-currency-select/meta'
import * as OrganismGig from '@apparatus/gig-organisms-gig/meta'
import * as OrganismGigCongratulations from '@apparatus/gig-organisms-gig-congratulations/meta'
import * as OrganismGigNew from '@apparatus/gig-organisms-gig-new/meta'
import * as OrganismGigRemove from '@apparatus/gig-organisms-gig-remove/meta'
import * as OrganismHome from '@apparatus/gig-organisms-home/meta'
import * as OrganismOnboarding from '@apparatus/gig-organisms-onboarding/meta'
import * as OrganismSplash from '@apparatus/gig-organisms-splash/meta'
import * as OrganismSettings from '@apparatus/gig-organisms-settings/meta'
import * as OrganismTimeReport from '@apparatus/gig-organisms-time-report/meta'
import * as OrganismTrackTime from '@apparatus/gig-organisms-track-time/meta'
import * as OrganismWelcome from '@apparatus/gig-organisms-welcome/meta'
import * as TimeTracked from '@apparatus/gig-molecules-time-tracked/meta'
import * as MoleculeTimeReport from '@apparatus/gig-molecules-time-report/meta'

export const components: TComponents = {
  OrganismAboutGig: () => Promise.resolve(OrganismAboutGig),
  OrganismCurrencySelect: () => Promise.resolve(OrganismCurrencySelect),
  OrganismGig: () => Promise.resolve(OrganismGig),
  OrganismGigCongratulations: () => Promise.resolve(OrganismGigCongratulations),
  OrganismGigNew: () => Promise.resolve(OrganismGigNew),
  OrganismGigRemove: () => Promise.resolve(OrganismGigRemove),
  OrganismHome: () => Promise.resolve(OrganismHome),
  OrganismOnboarding: () => Promise.resolve(OrganismOnboarding),
  OrganismSplash: () => Promise.resolve(OrganismSplash),
  OrganismSettings: () => Promise.resolve(OrganismSettings),
  OrganismTimeReport: () => Promise.resolve(OrganismTimeReport),
  OrganismTrackTime: () => Promise.resolve(OrganismTrackTime),
  OrganismWelcome: () => Promise.resolve(OrganismWelcome),
  TimeTracked: () => Promise.resolve(TimeTracked),
  MoleculeTimeReport: () => Promise.resolve(MoleculeTimeReport),
}
