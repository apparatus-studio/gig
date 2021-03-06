import { TComponentConfig } from 'autoprops'
import { ACME, BigBuy } from '@apparatus/gig-data-demo'
import { OrganismHome, TOrganismHome } from './src'

export const config: TComponentConfig<TOrganismHome> = {
  props: {
    earnings: [13000],
    gigs: [[ACME, BigBuy]],
    hours: ['7 h 30 mins'],
    month: ['January'],
    onNewGig: [() => {}],
    onSelect: [() => {}],
    onSettings: [() => {}],
    onUpdatePeriod: [() => {}],
    period: [
      'day',
      'week',
      'month',
    ],
    today: ['2020-04-14'],
  },
  required: [
    'earnings',
    'gigs',
    'hours',
    'month',
    'onNewGig',
    'onSelect',
    'onSettings',
    'onUpdatePeriod',
    'period',
    'today',
  ],
}

export const Component = OrganismHome

export { default as packageJson } from './package.json'
