import { TComponentConfig } from 'autoprops'
import { OrganismGigUpdate, TOrganismGigUpdate } from './src'

export const config: TComponentConfig<TOrganismGigUpdate> = {
  props: {
    gigName: ['BigBuy'],
    onBack: [() => {}],
    onSave: [() => {}],
    rate: ['2500'],
    setGigName: [() => {}],
    setRate: [() => {}],
  },
  required: [
    'gigName',
    'onBack',
    'onSave',
    'rate',
    'setGigName',
    'setRate',
  ],
}

export const Component = OrganismGigUpdate

export { default as packageJson } from './package.json'
