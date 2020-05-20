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
  | 'day'
  | 'week'
  | 'month'

export type TRootDimensions = {
  rootWidth: number,
  rootHeight: number,
}

export type TKeyboard = {
  isKeyboardVisible: boolean,
  keyboardHeight: number,
  keyboardWidth: number,
}

export type TTimeReport = {
  rate: number, // in the selected currency
  currency: string, // from the official currency list
  startTime: number, // timestamp in seconds
  length: number, // in seconds
  timeZone: string, // from IANA timeZone database https://www.iana.org/time-zones
  timeZoneOffset: number, // in seconds
}
