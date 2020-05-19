import { TComponentConfig } from 'autoprops'
import { OrganismSettings, TOrganismSettings } from './src'

export const config: TComponentConfig<TOrganismSettings> = {
  props: {
    currentCurrencyName: ['SEK / kr', 'NOK / kr'],
    onAboutGig: [() => {}],
    onBack: [() => {}],
    onChangeCurrency: [() => {}],
    onStartShare: [() => {}],
    onSupportUs: [() => {}],
  },
  required: [
    'currentCurrencyName',
    'onAboutGig',
    'onBack',
    'onChangeCurrency',
    'onStartShare',
    'onSupportUs',
  ],
}

export const Component = OrganismSettings

export { default as packageJson } from './package.json'
