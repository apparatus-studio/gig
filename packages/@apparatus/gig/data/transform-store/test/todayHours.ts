import test from 'tape'
import { state } from '@apparatus/gig-data-demo'
import { todayHours } from '../src'

test('todayHours', (t) => {
  t.deepEquals(
    todayHours(state),
    5,
    'should be 5'
  )

  t.end()
})
