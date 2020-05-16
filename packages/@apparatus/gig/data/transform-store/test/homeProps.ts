import test from 'tape'
import { state } from '@apparatus/gig-data-demo'
import { homeProps, totalHours, totalEarnings, thisMonthHours, thisMonthEarnings, todayHours, todayEarnings } from '../src'

test('homeProps: month', (t) => {
  const selectedState = homeProps(state)

  t.deepEquals(
    selectedState.month,
    '2020-04',
    'should be 2020-04'
  )

  t.end()
})

test('homeProps: month', (t) => {
  const selectedState = homeProps({
    ...state,
    period: 'month',
  })

  t.deepEquals(
    selectedState.hours,
    totalHours(state),
    `should be ${totalHours(state)}`
  )

  t.deepEquals(
    selectedState.earnings,
    totalEarnings(state),
    `should be ${totalEarnings(state)}`
  )

  t.end()
})

test('homeProps: week', (t) => {
  const selectedState = homeProps({
    ...state,
    period: 'week',
  })

  t.deepEquals(
    selectedState.hours,
    thisMonthHours(state),
    `should be ${thisMonthHours(state)}`
  )

  t.deepEquals(
    selectedState.earnings,
    thisMonthEarnings(state),
    `should be ${thisMonthEarnings(state)}`
  )

  t.end()
})

test('homeProps: today', (t) => {
  const selectedState = homeProps({
    ...state,
    period: 'day',
  })

  t.deepEquals(
    selectedState.hours,
    todayHours(state),
    `should be ${todayHours(state)}`
  )

  t.deepEquals(
    selectedState.earnings,
    todayEarnings(state),
    `should be ${todayEarnings(state)}`
  )

  t.end()
})
