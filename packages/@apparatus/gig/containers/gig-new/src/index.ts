import { component, mapState, mapHandlers } from 'refun'
import { mapStoreDispatch } from '@apparatus/gig-data-store'
import { OrganismGigNew } from '@apparatus/gig-organisms-gig-new'

export const componentGigNew = component(
  mapStoreDispatch('dispatch'),
  mapHandlers({
    onBack: ({ dispatch }) => () => {
      dispatch({
        type: 'NAVIGATE',
        payload: {
          section: 'HOME',
        },
      })
    },
  }),
  mapState('gigName', 'setGigName', () => '', []),
  mapState('rate', 'setRate', () => '', []),
  mapHandlers({
    onSave: ({ dispatch, gigName, rate }) => () => {
      dispatch({
        type: 'GIG_NEW',
        payload: {
          name: gigName,
          currentRate: parseInt(rate, 10),
          timeReports: [],
        },
      })
    },
  })
)

export const ContainerGigNew = componentGigNew(OrganismGigNew)
