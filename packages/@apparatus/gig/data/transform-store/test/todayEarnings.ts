import test from 'tape'
import { state } from '@apparatus/gig-data-demo'
import { todayEarnings } from '../src'

test('todayEarnings', (t) => {
  t.deepEquals(
    todayEarnings(state),
    7500,
    'should be 7500'
  )

  t.end()
})
