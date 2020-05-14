import { TComponentConfig } from 'autoprops'
import { getCurrentTimeInSeconds } from '@apparatus/effects-get-current-time-in-seconds'
import { OrganismTrackTime, TOrganismTrackTime } from './src'

export const config: TComponentConfig<TOrganismTrackTime> = {
  props: {
    currentRate: [1500],
    endTime: [getCurrentTimeInSeconds() + 40],
    primaryCallToAction: ['Start Tracking', 'Stop Tracking'],
    onBack: [() => {}],
    onRing: [() => {}],
    selectedGig: ['ACME'],
    startTime: [getCurrentTimeInSeconds()],
    toggleTracking: [() => {}],
  },
  required: [
    'endTime',
    'primaryCallToAction',
    'onBack',
    'onRing',
    'selectedGig',
    'toggleTracking',
  ],
}

export const Component = OrganismTrackTime

export { default as packageJson } from './package.json'
