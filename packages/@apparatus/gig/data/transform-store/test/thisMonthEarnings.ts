import test from 'tape'
import { state } from '@apparatus/gig-data-demo'
import { thisMonthEarnings } from '../src'

test('thisMonthEarnings', (t) => {
  t.deepEquals(
    thisMonthEarnings(state),
    19800,
    'should be 19800'
  )

  t.end()
})
