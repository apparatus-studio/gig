import { TComponentConfig } from 'autoprops'
import { OrganismSettings, TOrganismSettings } from './src'

export const config: TComponentConfig<TOrganismSettings> = {
  props: {
    currentCurrencyName: ['SEK / kr', 'NOK / kr'],
    onAboutGig: [() => {}],
    onBack: [() => {}],
    onChangeCurrency: [() => {}],
    onSupportUs: [() => {}],
  },
  required: [
    'currentCurrencyName',
    'onAboutGig',
    'onBack',
    'onChangeCurrency',
    'onSupportUs',
  ],
}

export const Component = OrganismSettings

export { default as packageJson } from './package.json'
