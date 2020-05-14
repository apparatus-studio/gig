import test from 'tape'
import { state } from '@apparatus/gig-data-demo'
import { splitByDay } from '@apparatus/gig-data-transform-time-report'
import { hoursInHooman, moneyInHooman } from '@apparatus/gig-data-transform-numbers'
import { totalHours, totalEarnings } from '@apparatus/gig-data-transform-gig'
import { gigProps } from '../src'

test('gigProps: valid gig', (t) => {
  const selectedState = gigProps(state)
  const gig = state.gigs[0]

  t.deepEquals(
    selectedState.days,
    splitByDay(gig.timeReports)
  )

  t.deepEquals(
    selectedState.totalHours,
    hoursInHooman(totalHours(gig))
  )

  t.deepEquals(
    selectedState.totalEarnings,
    moneyInHooman(totalEarnings(gig))
  )

  t.end()
})

test('gigProps: no gig', (t) => {
  const selectedState = gigProps({
    ...state,
    selectedGig: '',
  })

  t.deepEquals(
    selectedState.days,
    undefined
  )

  t.deepEquals(
    selectedState.totalHours,
    undefined
  )

  t.deepEquals(
    selectedState.totalEarnings,
    undefined
  )

  t.end()
})
