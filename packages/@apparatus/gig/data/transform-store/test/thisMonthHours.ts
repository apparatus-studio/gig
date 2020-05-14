import test from 'tape'
import { state } from '@apparatus/gig-data-demo'
import { thisMonthHours } from '../src'

test('thisMonthHours', (t) => {
  t.deepEquals(
    thisMonthHours(state),
    14.5,
    'should be 14.5'
  )

  t.end()
})
