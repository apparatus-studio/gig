import { TGig } from '@apparatus/gig-types-data'
import { formatISO9075, fromUnixTime, getUnixTime, parseISO, getISODay } from 'date-fns'

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

const thisWeekRange = (today: string): [number, number] => {
  const todayDate = parseISO(today)
  const todayStart = getUnixTime(todayDate)
  const dayOfWeek = getISODay(todayDate)

  const startOfWeek = todayStart - (
    (dayOfWeek - 1) * 24 * 60 * 60
  )
  const endOfWeek = todayStart + ((8 - dayOfWeek) * 24 * 60 * 60)

  return [startOfWeek, endOfWeek]
}

export const thisWeekEarnings = (gig: TGig, today: string): number => {
  const [startOfWeek, endOfWeek] = thisWeekRange(today)

  return gig.timeReports
    .filter(({ startTime }) => startTime >= startOfWeek && startTime < endOfWeek)
    .map(({ rate, length }) => rate * (length / 60 / 60))
    .reduce((a, b) => a + b, 0)
}

export const thisWeekHours = (gig: TGig, today: string): number => {
  const [startOfWeek, endOfWeek] = thisWeekRange(today)

  return gig.timeReports
    .filter(({ startTime }) => startTime >= startOfWeek && startTime < endOfWeek)
    .map(({ length }) => length / 60 / 60)
    .reduce((a, b) => a + b, 0)
}
