import { TTimeReport, TDayReport } from '@apparatus/gig-types-data'
import { formatISO9075, fromUnixTime, format } from 'date-fns'

const _splitByDay = (timeReports: TTimeReport[], result: TDayReport[] = []): TDayReport[] => {
  if (timeReports.length === 0) {
    return result
  }

  const [head, ...tail] = timeReports

  const date = formatISO9075(
    fromUnixTime(head.startTime),
    { representation: 'date' }
  )

  if (result.length === 0) {
    return _splitByDay(
      tail,
      [
        {
          date,
          timeReports: [
            head,
          ],
        },
      ]
    )
  }

  const lastResultDay = result[result.length - 1]

  if (lastResultDay.date === date) {
    return _splitByDay(
      tail,
      [
        ...result.slice(0, -1),
        {
          date,
          timeReports: [
            ...lastResultDay.timeReports,
            head,
          ],
        },
      ]
    )
  }

  return _splitByDay(
    tail,
    [
      ...result,
      {
        date,
        timeReports: [
          head,
        ],
      },
    ]
  )
}

export const splitByDay = (timeReports: TTimeReport[]): TDayReport[] => (
  _splitByDay(
    timeReports.sort((a, b) => b.startTime - a.startTime)
  )
)

export const lengthInHooman = (length: number): string => {
  const totalHours = length / 60 / 60
  const flooredHours = Math.floor(totalHours)

  if (totalHours - flooredHours === 0) {
    if (totalHours === 1) {
      return `${totalHours} hour`
    }

    return `${totalHours} hours`
  }

  const minutes = Math.floor((totalHours - flooredHours) * 60)

  return `${flooredHours} h  ${minutes} min`
}

export const startTimeInHooman = (timeReport: TTimeReport): string => (
  formatISO9075(
    fromUnixTime(timeReport.startTime),
    { representation: 'time' }
  )
    .slice(0, 5)
    .replace(':', '.')
)

export const endTimeInHooman = (timeReport: TTimeReport): string => (
  formatISO9075(
    fromUnixTime(timeReport.startTime + timeReport.length),
    { representation: 'time' }
  )
    .slice(0, 5)
    .replace(':', '.')
)

export const dayInHooman = (dayReport: TDayReport, today: string): string => {
  if (dayReport.date === today) {
    return 'Today'
  }

  return format(
    new Date(dayReport.date),
    'MMMM do'
  )
}
