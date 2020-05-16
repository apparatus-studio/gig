import { elegir } from 'elegir'
import { TState } from '@apparatus/gig-types-store'
import {
  totalHours as totalGigHours,
  totalEarnings as totalGigEarnings,
  thisMonthHours as thisMonthGigHours,
  thisMonthEarnings as thisMonthGigEarnings,
  todayHours as todayGigHours,
  todayEarnings as todayGigEarnings,
} from '@apparatus/gig-data-transform-gig'
import { TExtend } from 'tsfn'
import { splitByDay, lengthInHooman } from '@apparatus/gig-data-transform-time-report'
import { hoursInHooman, moneyInHooman } from '@apparatus/gig-data-transform-numbers'

export const currentGig = ({ gigs, selectedGig }: TState) =>
  gigs.find((gig) => gig.name === selectedGig)

export const totalHours = ({ gigs }: TState): number => (
  gigs
    .map((gig) => totalGigHours(gig))
    .reduce((a, b) => a + b, 0)
)

export const thisMonthHours = ({ gigs, today }: TState): number => (
  gigs
    .map((gig) => thisMonthGigHours(gig, today.slice(0, 7)))
    .reduce((a, b) => a + b, 0)
)

export const todayHours = ({ gigs, today }: TState): number => (
  gigs
    .map((gig) => todayGigHours(gig, today))
    .reduce((a, b) => a + b, 0)
)

export const totalEarnings = ({ gigs }: TState): number => (
  gigs
    .map((gig) => totalGigEarnings(gig))
    .reduce((a, b) => a + b, 0)
)

export const thisMonthEarnings = ({ gigs, today }: TState): number => (
  gigs
    .map((gig) => thisMonthGigEarnings(gig, today.slice(0, 7)))
    .reduce((a, b) => a + b, 0)
)

export const todayEarnings = ({ gigs, today }: TState): number => (
  gigs
    .map((gig) => todayGigEarnings(gig, today))
    .reduce((a, b) => a + b, 0)
)

export const homeProps = (state: TExtend<TState, {}>) => ({
  hours: elegir(
    state.period === 'month',
    totalHours(state),
    state.period === 'week',
    thisMonthHours(state),
    true,
    todayHours(state)
  ),
  earnings: elegir(
    state.period === 'month',
    totalEarnings(state),
    state.period === 'week',
    thisMonthEarnings(state),
    true,
    todayEarnings(state)
  ),
  month: state.today.slice(0, 7),
})

export const gigUpdateProps = (state: TState) => ({
  currentRate: currentGig(state)?.currentRate,
})

export const gigProps = (state: TState) => {
  const gig = currentGig(state)

  return gig !== undefined
    ? {
      days: splitByDay(gig.timeReports),
      totalHours: hoursInHooman(totalGigHours(gig)),
      totalEarnings: moneyInHooman(totalGigEarnings(gig)),
    }
    : {}
}

export const timeReportProps = (state: TExtend<TState, {}>) => {
  const isNew = (
    state.startTime === undefined ||
    state.length === undefined
  )

  return {
    isNew,
    currentRate: currentGig(state)?.currentRate,
    ...(state.startTime === undefined || state.length === undefined)
      ? {
        nav: 'New Time Report',
        title: 'Add Report',
        primaryCallToAction: 'Save report',
        secondaryCallToAction: 'Discard',
      }
      : {
        nav: 'Edit Time Report',
        title: lengthInHooman({
          startTime: state.startTime,
          length: state.length,
          rate: 0,
          currency: '',
        }),
        primaryCallToAction: 'Save changes',
        secondaryCallToAction: 'Delete report',
      },
  }
}

export const trackTimeProps = (state: TState) => ({
  currentRate: currentGig(state)?.currentRate,
})
