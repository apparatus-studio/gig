import { useEffect } from 'react'
import { component, mapHandlers, mapWithProps } from 'refun'
import { mapStoreState, mapStoreDispatch } from '@apparatus/gig-data-store'
import Share from 'react-native-share'

export const componentShare = component(
  mapStoreState((state) => state, ['shouldShare']),
  mapStoreDispatch('dispatch'),
  mapHandlers({
    onShared: ({ dispatch }) => () => {
      dispatch({
        type: 'NAVIGATE',
        payload: {
          section: 'WELCOME',
        },
      })
    },
  }),
  mapWithProps(({ onShared, shouldShare }) => {
    const content = 'data:text/csv,asdf;2'

    useEffect(() => {
      if (shouldShare === true) {
        Share
          .open({
            url: content,
            title: 'Some title',
            filename: 'this.txt',
            type: 'text/csv',
            message: 'Export to CSV',
            subject: 'Some subject',
          })
          .then(() => onShared())
          .catch(() => {
            console.log('SHARED')
            onShared()
          })
      }
    }, [shouldShare])

    return {}
  })
)

export const ContainerShare = componentShare(() => null)
