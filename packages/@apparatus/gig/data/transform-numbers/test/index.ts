import test from 'tape'
import { hoursInHooman, moneyInHooman, hoursMinutesSecondsInHooman } from '../src'

test('hoursInHooman', (t) => {
  t.deepEquals(
    hoursInHooman(
      4.5
    ),
    '4.5 hours',
    'should have 4.5 hours'
  )

  t.deepEquals(
    hoursInHooman(
      1
    ),
    '1 hour',
    'should have 1 hour'
  )

  t.end()
})

test('hoursMinutesSecondsInHooman', (t) => {
  t.deepEquals(
    hoursMinutesSecondsInHooman(
      45
    ),
    '00:00:45',
    'should be 00:00:45'
  )

  t.deepEquals(
    hoursMinutesSecondsInHooman(
      (60 * 1) + 15
    ),
    '00:01:15',
    'should be 00:01:15'
  )

  t.deepEquals(
    hoursMinutesSecondsInHooman(
      (60 * 60 * 2) + (14 * 60) + 52
    ),
    '02:14:52',
    'should be 02:14:52'
  )

  t.end()
})

test('moneyInHooman', (t) => {
  t.deepEquals(
    moneyInHooman(
      15000
    ),
    '15,000',
    'should have moneyInHooman'
  )

  t.deepEquals(
    moneyInHooman(
      1350567
    ),
    '1,350,567',
    'should have 1,350,567'
  )

  t.deepEquals(
    moneyInHooman(
      45.5
    ),
    '45.5',
    'should have 45.5'
  )

  t.end()
})
