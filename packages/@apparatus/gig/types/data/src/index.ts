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
  rate: number,
  currency: string,
  startTime: number,
  length: number,
}
