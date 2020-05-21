import { component, mapState, mapHandlers, mapWithProps } from 'refun'
import { mapStoreState, mapStoreDispatch } from '@apparatus/gig-data-store'
import { gigUpdateProps } from '@apparatus/gig-data-transform-store'
import { OrganismGigUpdate } from '@apparatus/gig-organisms-gig-update'

export const componentGigUpdate = component(
  mapStoreState(
    (state) => state,
    ['isKeyboardVisible', 'section', 'selectedGig']
  ),
  mapWithProps(gigUpdateProps),
  mapStoreDispatch('dispatch'),
  mapHandlers({
    onBack: ({ dispatch, selectedGig }) => () => {
      dispatch({
        type: 'NAVIGATE',
        payload: {
          section: 'GIG',
          selectedGig,
        },
      })
    },
  }),
  mapState('gigName', 'setGigName', ({ selectedGig }) => selectedGig, ['selectedGig']),
  mapState('rate', 'setRate', ({ currentRate }) => `${currentRate}`, ['currentRate']),
  mapHandlers({
    onSave: ({ dispatch, gigName, rate }) => () => {
      dispatch({
        type: 'GIG_UPDATE',
        payload: {
          name: gigName,
          currentRate: parseInt(rate, 10),
        },
      })
    },
  })
)

export const ContainerGigUpdate = componentGigUpdate(OrganismGigUpdate)
