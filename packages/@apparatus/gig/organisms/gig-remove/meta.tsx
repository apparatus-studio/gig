import { TComponentConfig } from 'autoprops'
import { OrganismGigRemove, TOrganismGigRemove } from './src'

export const config: TComponentConfig<TOrganismGigRemove> = {
  props: {
    selectedGig: ['ACME'],
    onConfirmRemove: [() => {}],
    onCancel: [() => {}],
  },
  required: [
    'selectedGig',
    'onConfirmRemove',
    'onCancel',
  ],
}

export const Component = OrganismGigRemove

export { default as packageJson } from './package.json'
