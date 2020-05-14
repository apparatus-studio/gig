import test from 'tape'
import { state } from '@apparatus/gig-data-demo'
import { totalHours } from '../src'

test('totalHours', (t) => {
  t.deepEquals(
    totalHours(state),
    14.5,
    'should be 14.5'
  )

  t.end()
})
