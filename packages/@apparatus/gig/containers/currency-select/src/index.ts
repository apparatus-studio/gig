import Fuse from 'fuse.js'
import { component, mapHandlers, mapState, mapWithPropsMemo } from 'refun'
import { mapStoreState, mapStoreDispatch } from '@apparatus/gig-data-store'
import { OrganismCurrencySelect } from '@apparatus/gig-organisms-currency-select'

export const componentCurrencySelect = component(
  mapStoreState((state) => state, ['rootHeight', 'rootWidth']),
  mapStoreDispatch('dispatch'),
  mapState('search', 'onSearchUpdate', () => '', []),
  mapHandlers({
    onBack: ({ dispatch }) => () => {
      dispatch({
        type: 'NAVIGATE',
        payload: {
          section: 'SETTINGS',
        },
      })
    },
    onSelect: ({ dispatch, currencies }) => (code) => {
      const nextCurrentCurrency = currencies.find((currency) => currency.code === code)

      if (nextCurrentCurrency !== undefined) {
        dispatch({
          type: 'CURRENCY_UPDATE',
          payload: nextCurrentCurrency,
        })
        dispatch({
          type: 'NAVIGATE',
          payload: {
            section: 'SETTINGS',
          },
        })
      }
    },
  }),
  mapWithPropsMemo(({ currencies, search }) => {
    const fuse = new Fuse(
      currencies,
      {
        keys: [
          'code',
          'description',
          'symbol',
        ],
      }
    )

    return search === ''
      ? { currencies }
      : { currencies: fuse.search(search).map(({ item }) => item) }
  }, ['search'])
)

export const ContainerCurrencySelect = componentCurrencySelect(OrganismCurrencySelect)
