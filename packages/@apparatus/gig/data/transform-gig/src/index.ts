import { TGig } from '@apparatus/gig-types-data'
import { formatISO9075, fromUnixTime } from 'date-fns'

export const totalEarnings = (gig: TGig): number => (
  gig.timeReports
    .map(({ rate, length }) => rate * (length / 60 / 60))
    .reduce((a, b) => a + b, 0)
)

export const totalHours = (gig: TGig): number => (
  gig.timeReports
    .map(({ length }) => length / 60 / 60)
    .reduce((a, b) => a + b, 0)
)

export const todayEarnings = (gig: TGig, today: string): number => (
  gig.timeReports
    .filter(({ startTime }) => (
      formatISO9075(
        fromUnixTime(startTime),
        { representation: 'date' }
      ) === today
    ))
    .map(({ rate, length }) => rate * (length / 60 / 60))
    .reduce((a, b) => a + b, 0)
)

export const todayHours = (gig: TGig, today: string): number => (
  gig.timeReports
    .filter(({ startTime }) => (
      formatISO9075(
        fromUnixTime(startTime),
        { representation: 'date' }
      ) === today
    ))
    .map(({ length }) => length / 60 / 60)
    .reduce((a, b) => a + b, 0)
)

export const thisMonthEarnings = (gig: TGig, thisMonth: string): number => (
  gig.timeReports
    .filter(({ startTime }) => (
      formatISO9075(
        fromUnixTime(startTime),
        { representation: 'date' }
      ).slice(0, 7) === thisMonth
    ))
    .map(({ rate, length }) => rate * (length / 60 / 60))
    .reduce((a, b) => a + b, 0)
)

export const thisMonthHours = (gig: TGig, thisMonth: string): number => (
  gig.timeReports
    .filter(({ startTime }) => (
      formatISO9075(
        fromUnixTime(startTime),
        { representation: 'date' }
      ).slice(0, 7) === thisMonth
    ))
    .map(({ length }) => length / 60 / 60)
    .reduce((a, b) => a + b, 0)
)
