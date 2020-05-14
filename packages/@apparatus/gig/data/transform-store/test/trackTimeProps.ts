import test from 'tape'
import { state } from '@apparatus/gig-data-demo'
import { trackTimeProps, currentGig } from '../src'

test('trackTimeProps: currentRate', (t) => {
  const selectedState = trackTimeProps(state)

  t.deepEquals(
    selectedState.currentRate,
    currentGig(state)?.currentRate,
    `should be ${currentGig(state)?.currentRate}`
  )

  t.end()
})
