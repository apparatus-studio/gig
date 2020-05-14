import test from 'tape'
import { state } from '@apparatus/gig-data-demo'
import { gigUpdateProps, currentGig } from '../src'

test('gigUpdateProps: currentRate', (t) => {
  const selectedState = gigUpdateProps(state)

  t.deepEquals(
    selectedState.currentRate,
    currentGig(state)?.currentRate,
    `should be ${currentGig(state)?.currentRate}`
  )

  t.end()
})
