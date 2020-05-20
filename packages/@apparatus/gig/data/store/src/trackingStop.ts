import { TState, TActionTrackingStop } from '@apparatus/gig-types-store'

export const trackingStop = (state: TState, action: TActionTrackingStop): TState => {
  const length = state.startTime !== undefined
    ? action.payload.endTime - state.startTime
    : undefined
  const gig = state.gigs.find((gig) => gig.name === state.selectedGig)
  const newTimeReport = (
    length !== undefined &&
    state.startTime !== undefined &&
    gig !== undefined
  )
    ? {
      startTime: state.startTime,
      length,
      rate: gig.currentRate,
      currency: 'SEK',
      timeZone: state.currentTimeZone,
      timeZoneOffset: state.currentTimeZoneOffset,
    }
    : undefined

  return {
    ...state,
    gigs: newTimeReport !== undefined
      ? (
        state.gigs
          .map(
            (gig) => (
              gig.name === state.selectedGig
                ? {
                  ...gig,
                  timeReports: [
                    ...gig.timeReports,
                    newTimeReport,
                  ],
                }
                : gig
            )
          )
      )
      : state.gigs,
    length,
    section: 'TIME_REPORT',
  }
}
