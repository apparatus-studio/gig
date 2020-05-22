import { TComponentConfig } from 'autoprops'
import { splitByDay } from '@apparatus/gig-data-transform-time-report'
import { ACME } from '@apparatus/gig-data-demo'
import { OrganismGig, TOrganismGig } from './src'

export const config: TComponentConfig<TOrganismGig> = {
  props: {
    days: [splitByDay(ACME.timeReports)],
    onAddTimeReport: [() => {}],
    onBack: [() => {}],
    onEdit: [() => {}],
    onExportCSV: [() => {}],
    onRemove: [() => {}],
    onTrackTime: [() => {}],
    onUpdatePeriod: [() => {}],
    onUpdateTimeReport: [() => {}],
    period: ['day', 'week', 'month'],
    selectedGig: ['ACME'],
    setShowDrawer: [() => {}],
    showDrawer: [true],
    periodEarnings: ['24000'],
    periodHours: ['64'],
  },
  required: [
    'onAddTimeReport',
    'onBack',
    'onEdit',
    'onExportCSV',
    'onRemove',
    'onTrackTime',
    'onUpdatePeriod',
    'onUpdateTimeReport',
    'period',
    'selectedGig',
    'setShowDrawer',
  ],
}

export const Component = OrganismGig

export { default as packageJson } from './package.json'
