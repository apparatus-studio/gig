import { currencies } from '@apparatus/data-currencies'
import { TState, TAction } from '@apparatus/gig-types-store'
import { createStore, Reducer } from 'redux'
import { StoreContextFactory } from 'refun'
import { trackingStop } from './trackingStop'

export const initialState: TState = {
  currencies,
  currentCurrency: currencies[91],
  gigs: [],
  patreonLink: 'https://patreon.com/Apparatus',
  section: 'SPLASH',
  selectedGig: '',
  period: 'today',
  today: '2020-04-14',
  rootWidth: 375,
  rootHeight: 500,
}

export const reducer: Reducer<TState, TAction> = (state = initialState, action) => {
  switch (action.type) {
    case 'CURRENCY_UPDATE': {
      return {
        ...state,
        currentCurrency: action.payload,
      }
    }

    case 'GIG_NEW': {
      return {
        ...state,
        gigs: [
          ...state.gigs,
          action.payload,
        ],
        section: 'GIG_CONGRATULATIONS',
        selectedGig: action.payload.name,
      }
    }

    case 'GIG_REMOVE': {
      const gigs = state.gigs.filter(
        ({ name }) => (name !== state.selectedGig)
      )

      return {
        ...state,
        gigs,
        section: 'HOME',
        selectedGig: gigs.length > 0
          ? gigs[gigs.length - 1].name
          : '',
      }
    }

    case 'SYNC_STATE': {
      return {
        ...state,
        ...action.payload,
      }
    }

    case 'TIME_REPORT_NEW': {
      return {
        ...state,
        section: 'GIG',
        startTime: undefined,
        length: undefined,
        gigs: state.gigs.map(
          (gig) => (
            gig.name === state.selectedGig
              ? {
                ...gig,
                timeReports: [
                  ...gig.timeReports,
                  {
                    rate: gig.currentRate,
                    startTime: action.payload.startTime,
                    length: action.payload.length,
                    currency: 'SEK',
                  },
                ],
              }
              : gig
          )
        ),
      }
    }

    case 'TIME_REPORT_UPDATE': {
      return {
        ...state,
        section: 'GIG',
        startTime: undefined,
        length: undefined,
        gigs: state.gigs.map(
          (gig) => (
            gig.name === state.selectedGig
              ? {
                ...gig,
                timeReports: gig.timeReports.map(
                  (timeReport) => (
                    timeReport.startTime === action.payload.currentStartTime
                      ? {
                        ...timeReport,
                        startTime: action.payload.startTime,
                        length: action.payload.length,
                      }
                      : timeReport
                  )
                ),
              }
              : gig
          )
        ),
      }
    }

    case 'TIME_REPORT_REMOVE': {
      return {
        ...state,
        section: 'GIG',
        startTime: undefined,
        length: undefined,
        gigs: state.gigs.map(
          (gig) => (
            gig.name === state.selectedGig
              ? {
                ...gig,
                timeReports: gig.timeReports.filter(
                  (timeReport) => (
                    timeReport.startTime !== action.payload.startTime
                  )
                ),
              }
              : gig
          )
        ),
      }
    }

    case 'TRACKING_START': {
      return {
        ...state,
        ...action.payload,
      }
    }

    case 'TRACKING_STOP': {
      return trackingStop(state, action)
    }

    case 'NAVIGATE': {
      return {
        ...state,
        ...action.payload,
      }
    }

    case 'GIG_UPDATE': {
      return {
        ...state,
        gigs: state.gigs.map((gig) => (
          gig.name === state.selectedGig
            ? {
              ...gig,
              ...action.payload,
            }
            : gig
        )),
        selectedGig: action.payload.name,
        section: 'GIG',
      }
    }

    case 'PERIOD_UPDATE': {
      return {
        ...state,
        ...action.payload,
      }
    }

    case 'ROOT_DIMENSIONS_UPDATE': {
      return {
        ...state,
        ...action.payload,
      }
    }

    default: {
      return state
    }
  }
}

export const store = createStore(reducer)

export const { Context, mapStoreDispatch, mapStoreState } = StoreContextFactory(store)
