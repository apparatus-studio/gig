import test from 'tape'
import { state } from '@apparatus/gig-data-demo'
import { currentGig } from '../src'

test('currentGig', (t) => {
  t.deepEquals(
    currentGig(
      {
        ...state,
        selectedGig: 'BigBuy',
      }
    )?.name,
    'BigBuy',
    'should be BigBuy'
  )

  t.deepEquals(
    currentGig(
      {
        ...state,
        selectedGig: 'wrong',
      }
    ),
    undefined,
    'should be undefined'
  )

  t.end()
})
