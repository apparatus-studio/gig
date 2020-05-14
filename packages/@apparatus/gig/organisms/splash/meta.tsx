import { TComponentConfig } from 'autoprops'
import { OrganismSplash, TOrganismSplash } from './src'

export const config: TComponentConfig<TOrganismSplash> = {
  props: {},
}

export const Component = OrganismSplash

export { default as packageJson } from './package.json'
