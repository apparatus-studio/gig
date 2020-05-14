import { TComponentConfig } from 'autoprops'
import { OrganismGigNew, TOrganismGigNew } from './src'

export const config: TComponentConfig<TOrganismGigNew> = {
  props: {
    gigName: ['BigBuy'],
    rate: ['1600'],
    setGigName: [() => {}],
    setRate: [() => {}],
    onBack: [() => {}],
    onSave: [() => {}],
  },
  required: [
    'gigName',
    'rate',
    'setGigName',
    'setRate',
    'onBack',
    'onSave',
  ],
}

export const Component = OrganismGigNew

export { default as packageJson } from './package.json'
