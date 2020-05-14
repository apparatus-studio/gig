import test from 'tape'
import { state } from '@apparatus/gig-data-demo'
import { totalEarnings } from '../src'

test('totalEarnings', (t) => {
  t.deepEquals(
    totalEarnings(state),
    19800,
    'should be 19800'
  )

  t.end()
})
