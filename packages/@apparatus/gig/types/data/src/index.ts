export type TDayReport = {
  date: string,
  timeReports: TTimeReport[],
}

export type TGig = {
  name: string,
  timeReports: TTimeReport[],
  currentRate: number,
}

export type TMessage = {
  author: 'gig' | 'user',
  body: string,
}

export type TPeriod =
  | 'today'
  | 'this-month'
  | 'total'

export type TRootDimensions = {
  rootWidth: number,
  rootHeight: number,
}

export type TTimeReport = {
  rate: number,
  currency: string,
  startTime: number,
  length: number,
}
