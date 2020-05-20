import React from 'react'
import { component, startWithType, mapHandlers, mapWithProps } from 'refun'
import { startTimeInHooman, endTimeInHooman, lengthInHooman } from '@apparatus/gig-data-transform-time-report'
import { ListOption } from '@apparatus/blocks-index'

export type TTimeReport = {
  startTime: number,
  length: number,
  rate: number,
  currency: string,
  timeZone: string,
  timeZoneOffset: number,
  onSelect: (startTime: number, length: number) => void,
}

export const TimeReport = component(
  startWithType<TTimeReport>(),
  mapHandlers({
    onPress: ({ startTime, length, onSelect }) => () => {
      onSelect(startTime, length)
    },
  }),
  mapWithProps(({ startTime, length, rate, currency, timeZone, timeZoneOffset }) => ({
    startTimeInHooman: startTimeInHooman({ startTime, length, rate, currency, timeZone, timeZoneOffset }),
    endTime: endTimeInHooman({ startTime, length, rate, currency, timeZone, timeZoneOffset }),
    howMany: lengthInHooman(length),
  }))
)(({ startTimeInHooman, endTime, howMany, onPress }) => (
  <ListOption
    optionName={`${startTimeInHooman} - ${endTime}`}
    onPress={onPress}
    value={howMany}
  />
))

TimeReport.displayName = 'TimeReport'

