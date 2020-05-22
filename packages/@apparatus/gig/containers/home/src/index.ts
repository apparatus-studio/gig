import { elegir } from 'elegir'
import { component, mapHandlers, mapWithProps } from 'refun'
import { mapStoreDispatch, mapStoreState } from '@apparatus/gig-data-store'
import * as transformStore from '@apparatus/gig-data-transform-store'
import { OrganismHome } from '@apparatus/gig-organisms-home'
import { lengthInHooman } from '@apparatus/gig-data-transform-time-report'

export const componentContainerHome = component(
  mapStoreState(
    (state) => state,
    ['gigs', 'period', 'today']
  ),
  mapWithProps((state) => ({
    hours: lengthInHooman(
      elegir(
        state.period === 'month',
        transformStore.thisMonthHours(state) * 60 * 60,
        state.period === 'week',
        transformStore.thisWeekHours(state) * 60 * 60,
        true,
        transformStore.todayHours(state) * 60 * 60
      )
    ),
    earnings: elegir(
      state.period === 'month',
      transformStore.thisMonthEarnings(state),
      state.period === 'week',
      transformStore.thisWeekEarnings(state),
      true,
      transformStore.todayEarnings(state)
    ),
    month: state.today.slice(0, 7),
  })),
  mapStoreDispatch('dispatch'),
  mapHandlers({
    onUpdatePeriod: ({ dispatch }) => (period) => {
      dispatch({
        type: 'PERIOD_UPDATE',
        payload: { period },
      })
    },
    onNewGig: ({ dispatch }) => () => {
      dispatch({
        type: 'NAVIGATE',
        payload: {
          section: 'GIG_NEW',
        },
      })
    },
    onSelect: ({ dispatch }) => (gig) => {
      dispatch({
        type: 'NAVIGATE',
        payload: {
          section: 'GIG',
          selectedGig: gig,
        },
      })
    },
    onSettings: ({ dispatch }) => () => {
      dispatch({
        type: 'NAVIGATE',
        payload: {
          section: 'SETTINGS',
        },
      })
    },
  })
)

export const ContainerHome = componentContainerHome(OrganismHome)
