import React from 'react'
import { component, startWithType, mapSafeRequestAnimationFrame, mapState, mapWithProps } from 'refun'
import {
  Horizontal,
  Text,
  TEXT_LEVEL_PRIMARY_TITLE,
} from '@apparatus/blocks-index'
import { getCurrentTimeInSeconds } from '@apparatus/effects-get-current-time-in-seconds'
import { hoursMinutesSecondsInHooman } from '@apparatus/gig-data-transform-numbers'

export type TTimeTracked = {
  startTime?: number,
  time?: number,
}

export const TimeTracked = component(
  startWithType<TTimeTracked>(),
  mapSafeRequestAnimationFrame('safeRequestAnimationFrame'),
  mapState(
    'timeSinceStart',
    'setTimeSinceStart',
    ({ startTime }) => (
      startTime !== undefined
        ? getCurrentTimeInSeconds() - startTime
        : undefined
    ),
    ['startTime']
  ),
  mapState(
    'frames',
    'setFrames',
    () => 0,
    []
  ),
  mapWithProps(
    ({ time, timeSinceStart }) => {
      if (time !== undefined) {
        return {
          displayTime: hoursMinutesSecondsInHooman(time),
        }
      }

      if (timeSinceStart !== undefined) {
        return {
          displayTime: hoursMinutesSecondsInHooman(timeSinceStart),
        }
      }

      return {
        displayTime: hoursMinutesSecondsInHooman(0),
      }
    }
  )
)(({
  frames,
  safeRequestAnimationFrame,
  setFrames,
  setTimeSinceStart,
  startTime,
  displayTime,
}) => {
  safeRequestAnimationFrame(() => {
    if (startTime !== undefined) {
      setTimeSinceStart(getCurrentTimeInSeconds() - startTime)
    }

    setFrames(frames + 1)
  })

  return (
    <Horizontal hAlign="center" vAlign="center" width="100%">
      <Text level={TEXT_LEVEL_PRIMARY_TITLE}>
        {displayTime}
      </Text>
    </Horizontal>
  )
})

TimeTracked.displayName = 'TimeTracked'
