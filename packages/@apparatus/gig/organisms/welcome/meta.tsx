import { TComponentConfig } from 'autoprops'
import { OrganismWelcome, TOrganismWelcome } from './src'

export const config: TComponentConfig<TOrganismWelcome> = {
  props: {
    onOnboardMe: [() => {}],
  },
  required: [
    'onOnboardMe',
  ],
}

export const Component = OrganismWelcome

export { default as packageJson } from './package.json'
