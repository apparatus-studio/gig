import test from 'tape'
import { ACME, BigBuy } from '@apparatus/gig-data-demo'
import { totalEarnings, totalHours, todayEarnings, todayHours, thisMonthEarnings, thisMonthHours } from '../src'

test('totalEarnings', (t) => {
  t.deepEquals(
    totalEarnings(
      ACME
    ),
    13500,
    'should be 13500'
  )

  t.deepEquals(
    totalEarnings(
      BigBuy
    ),
    6300,
    'should be 6300'
  )

  t.end()
})

test('totalHours', (t) => {
  t.deepEquals(
    totalHours(
      ACME
    ),
    10,
    'should be 10'
  )

  t.deepEquals(
    totalHours(
      BigBuy
    ),
    4.5,
    'should be 4.5'
  )

  t.end()
})

test('todayEarnings', (t) => {
  t.deepEquals(
    todayEarnings(
      ACME,
      '2020-04-14'
    ),
    7500,
    'should be 7500'
  )

  t.deepEquals(
    todayEarnings(
      BigBuy,
      '2020-04-12'
    ),
    6300,
    'should be 6300'
  )

  t.end()
})

test('todayHours', (t) => {
  t.deepEquals(
    todayHours(
      ACME,
      '2020-04-14'
    ),
    5,
    'should be 5'
  )

  t.deepEquals(
    todayHours(
      BigBuy,
      '2020-04-12'
    ),
    4.5,
    'should be 4.5'
  )

  t.end()
})

test('thisMonthEarnings', (t) => {
  t.deepEquals(
    thisMonthEarnings(
      ACME,
      '2020-04'
    ),
    13500,
    'should be 13500'
  )

  t.deepEquals(
    thisMonthEarnings(
      BigBuy,
      '2020-04'
    ),
    6300,
    'should be 6300'
  )

  t.end()
})

test('thisMonthHours', (t) => {
  t.deepEquals(
    thisMonthHours(
      ACME,
      '2020-04'
    ),
    10,
    'should be 10'
  )

  t.deepEquals(
    thisMonthHours(
      BigBuy,
      '2020-04'
    ),
    4.5,
    'should be 4.5'
  )

  t.end()
})
