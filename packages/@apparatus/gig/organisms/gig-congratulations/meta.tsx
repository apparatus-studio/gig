import { TComponentConfig } from 'autoprops'
import { OrganismGigCongratulations, TOrganismGigCongratulations } from './src'

export const config: TComponentConfig<TOrganismGigCongratulations> = {
  props: {
    selectedGig: ['ACME'],
    onGoToGig: [() => {}],
    onGoToHome: [() => {}],
    onClose: [() => {}],
  },
  required: [
    'selectedGig',
    'onGoToGig',
    'onGoToHome',
    'onClose',
  ],
}

export const Component = OrganismGigCongratulations

export { default as packageJson } from './package.json'
