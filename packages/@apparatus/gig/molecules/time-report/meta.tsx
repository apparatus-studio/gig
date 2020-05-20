import { TComponentConfig } from 'autoprops'
import { ACME } from '@apparatus/gig-data-demo'
import { TimeReport, TTimeReport } from './src'

export const config: TComponentConfig<TTimeReport> = {
  props: {
    currency: [ACME.timeReports[0].currency],
    length: [ACME.timeReports[0].length],
    onSelect: [() => {}],
    rate: [ACME.timeReports[0].rate],
    startTime: [ACME.timeReports[0].startTime],
    timeZone: [ACME.timeReports[0].timeZone],
    timeZoneOffset: [ACME.timeReports[0].timeZoneOffset],
  },
  required: [
    'currency',
    'length',
    'onSelect',
    'rate',
    'startTime',
    'timeZone',
    'timeZoneOffset',
  ],
}

export const Component = TimeReport

export { default as packageJson } from './package.json'
