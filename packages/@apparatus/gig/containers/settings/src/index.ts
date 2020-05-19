import { component, mapHandlers, mapWithProps } from 'refun'
import { mapStoreState, mapStoreDispatch } from '@apparatus/gig-data-store'
import { OrganismSettings } from '@apparatus/gig-organisms-settings'
import { openLink } from '@apparatus/effects-open-link'

export const componentSettings = component(
  mapStoreState((state) => state, ['rootHeight', 'rootWidth']),
  mapStoreDispatch('dispatch'),
  mapHandlers({
    onAboutGig: ({ dispatch }) => () => {
      dispatch({
        type: 'NAVIGATE',
        payload: {
          section: 'ABOUT_GIG',
        },
      })
    },
    onBack: ({ dispatch }) => () => {
      dispatch({
        type: 'NAVIGATE',
        payload: {
          section: 'HOME',
        },
      })
    },
    onChangeCurrency: ({ dispatch }) => () => {
      dispatch({
        type: 'NAVIGATE',
        payload: {
          section: 'CHANGE_CURRENCY',
        },
      })
    },
    onSupportUs: ({ patreonLink }) => async () => {
      await openLink(patreonLink)
    },
    onStartShare: ({ dispatch }) => () => {
      dispatch({
        type: 'SHARE_START',
      })
    },
  }),
  mapWithProps(({ currentCurrency }) => ({
    currentCurrencyName: `${currentCurrency.code} / ${currentCurrency.symbol}`,
  }))
)

export const ContainerSettings = componentSettings(OrganismSettings)
