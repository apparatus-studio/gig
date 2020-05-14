import { TComponentConfig } from 'autoprops'
import { getCurrentTimeInSeconds } from '@apparatus/effects-get-current-time-in-seconds'
import { TimeTracked, TTimeTracked } from './src'

export const config: TComponentConfig<TTimeTracked> = {
  props: {
    startTime: [getCurrentTimeInSeconds() - (60 * 60)],
    time: [(4 * (60 * 60)) + (15 * 60) + 42],
  },
}

export const Component = TimeTracked

export { default as packageJson } from './package.json'
