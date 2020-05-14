import { TComponentConfig } from 'autoprops'
import { OrganismAboutGig, TOrganismAboutGig } from './src'

export const config: TComponentConfig<TOrganismAboutGig> = {
  props: {
    onBack: [() => {}],
  },
  required: [
    'onBack',
  ],
}

export const Component = OrganismAboutGig

export { default as packageJson } from './package.json'
