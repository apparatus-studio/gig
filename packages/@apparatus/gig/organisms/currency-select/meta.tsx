import { TComponentConfig } from 'autoprops'
import { currencies } from '@apparatus/data-currencies'
import { OrganismCurrencySelect, TOrganismCurrencySelect } from './src'

export const config: TComponentConfig<TOrganismCurrencySelect> = {
  props: {
    currencies: [currencies.slice(0, 4)],
    onBack: [() => {}],
    onSearchUpdate: [() => {}],
    onSelect: [() => {}],
    search: ['a', 'w'],
  },
  required: [
    'currencies',
    'onBack',
    'onSearchUpdate',
    'onSelect',
  ],
}

export const Component = OrganismCurrencySelect

export { default as packageJson } from './package.json'
