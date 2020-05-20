import { getUnixTime, addHours, parseISO, addMinutes } from 'date-fns'
import { currencies } from '@apparatus/data-currencies'
import { TGig } from '@apparatus/gig-types-data'
import { TState } from '@apparatus/gig-types-store'

export const ACME: TGig = {
  name: 'ACME',
  currentRate: 1500,
  timeReports: [
    {
      rate: 1500, // 4500 total
      currency: 'SEK',
      startTime: getUnixTime(
        addHours(
          parseISO('2020-04-14'),
          15
        )
      ),
      length: 3 * (60 * 60),
      timeZone: 'Europe/Stockholm',
      timeZoneOffset: -1,
    },
    {
      rate: 1200, // 6000 total
      currency: 'SEK',
      startTime: getUnixTime(
        addHours(
          parseISO('2020-04-13'),
          10
        )
      ),
      length: 5 * (60 * 60),
      timeZone: 'Europe/Stockholm',
      timeZoneOffset: -1,
    },
    {
      rate: 1500, // 3000 total
      currency: 'SEK',
      startTime: getUnixTime(
        addHours(
          parseISO('2020-04-14'),
          10
        )
      ),
      length: 2 * (60 * 60),
      timeZone: 'Europe/Stockholm',
      timeZoneOffset: -1,
    },
  ], // 10 hours | 13500 kr
}

export const BigBuy: TGig = {
  name: 'BigBuy',
  currentRate: 1400,
  timeReports: [
    {
      rate: 1400, // 6300 total
      currency: 'SEK',
      startTime: getUnixTime(
        addMinutes(
          addHours(
            parseISO('2020-04-12'),
            11
          ),
          35
        )
      ),
      length: 4 * (60 * 60) + (60 * 30),
      timeZone: 'Europe/Stockholm',
      timeZoneOffset: -1,
    },
  ], // 4.5 hours | 6300 kr
}

export const state: TState = {
  currencies,
  currentCurrency: currencies[0],
  currentTimeZone: 'Europe/Stockholm',
  currentTimeZoneOffset: -1,
  firstDayOfWeek: 'Monday',
  gigs: [ACME, BigBuy],
  isKeyboardVisible: false,
  keyboardHeight: 0,
  keyboardWidth: 0,
  patreonLink: 'https://patreon.com/Apparatus',
  period: 'day',
  rootWidth: 375,
  rootHeight: 600,
  section: 'SETTINGS',
  selectedGig: 'ACME',
  shouldShare: false,
  today: '2020-04-14',
}
