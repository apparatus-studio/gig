import { TState } from '@apparatus/gig-types-store'
import {
  thisWeekHours as thisWeekGigHours,
  thisWeekEarnings as thisWeekGigEarnings,
  thisMonthHours as thisMonthGigHours,
  thisMonthEarnings as thisMonthGigEarnings,
  todayHours as todayGigHours,
  todayEarnings as todayGigEarnings,
} from '@apparatus/gig-data-transform-gig'

export const currentGig = ({ gigs, selectedGig }: TState) =>
  gigs.find((gig) => gig.name === selectedGig)

export const thisWeekEarnings = ({ gigs, today }: TState): number => (
  gigs
    .map((gig) => thisWeekGigEarnings(gig, today))
    .reduce((a, b) => a + b, 0)
)

export const thisWeekHours = ({ gigs, today }: TState): number => (
  gigs
    .map((gig) => thisWeekGigHours(gig, today))
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

export const gigUpdateProps = (state: TState) => ({
  currentRate: currentGig(state)?.currentRate,
})

export const trackTimeProps = (state: TState) => ({
  currentRate: currentGig(state)?.currentRate,
})
