import React from 'react'
import { component, startWithType, mapHandlers, mapWithProps } from 'refun'
import { startTimeInHooman, endTimeInHooman, lengthInHooman } from '@apparatus/gig-data-transform-time-report'
import { ListOption } from '@apparatus/blocks-index'

export type TTimeReport = {
  startTime: number,
  length: number,
  rate: number,
  currency: string,
  onSelect: (startTime: number, length: number) => void,
}

export const TimeReport = component(
  startWithType<TTimeReport>(),
  mapHandlers({
    onPress: ({ startTime, length, onSelect }) => () => {
      onSelect(startTime, length)
    },
  }),
  mapWithProps(({ startTime, length, rate, currency }) => ({
    startTimeInHooman: startTimeInHooman({ startTime, length, rate, currency }),
    endTime: endTimeInHooman({ startTime, length, rate, currency }),
    howMany: lengthInHooman({ startTime, length, rate, currency }),
  }))
)(({ startTimeInHooman, endTime, howMany, onPress }) => (
  <ListOption
    optionName={`${startTimeInHooman} - ${endTime}`}
    onPress={onPress}
    value={howMany}
  />
))

TimeReport.displayName = 'TimeReport'

