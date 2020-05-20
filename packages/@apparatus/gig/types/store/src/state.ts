import { TCurrency } from '@apparatus/data-currencies'
import {
  TGig,
  TKeyboard,
  TPeriod,
  TRootDimensions,
} from '@apparatus/gig-types-data'

export type TEnvironment = {
  today: string,
  currentTimeZone: string,
  currentTimeZoneOffset: number,
  firstDayOfWeek: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday',
}

export type TStorableData = {
  currentCurrency: TCurrency,
  gigs: TGig[],
  selectedGig: string,
}

export type TState = {
  currencies: TCurrency[],
  section: TSection,
  shouldShare: boolean,
  startTime?: number,
  length?: number,
  period: TPeriod,
  patreonLink: string,
} & TEnvironment
  & TRootDimensions
  & TStorableData
  & TKeyboard

export type TSection =
  | 'ABOUT_GIG'
  | 'CHANGE_CURRENCY'
  | 'GIG'
  | 'GIG_EDIT'
  | 'GIG_NEW'
  | 'GIG_CONGRATULATIONS'
  | 'GIG_REMOVE'
  | 'HOME'
  | 'ONBOARDING'
  | 'SETTINGS'
  | 'SPLASH'
  | 'SUPPORT_US'
  | 'TIME_REPORT'
  | 'TRACK_TIME'
  | 'WELCOME'
