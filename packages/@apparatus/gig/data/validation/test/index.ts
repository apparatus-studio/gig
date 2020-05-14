import test from 'tape'
import { isValidTime, isValidDate } from '../src'

test('isValidTime', (t) => {
  t.deepEquals(
    isValidTime(
      '10.05'
    ),
    true,
    'should be true'
  )

  t.deepEquals(
    isValidTime(
      '1078'
    ),
    false,
    'should be false'
  )

  t.deepEquals(
    isValidTime(
      '10:78'
    ),
    false,
    'should be false'
  )

  t.deepEquals(
    isValidTime(
      '30.18'
    ),
    false,
    'should be false'
  )

  t.deepEquals(
    isValidTime(
      '20.68'
    ),
    false,
    'should be false'
  )

  t.end()
})

test('isValidDate', (t) => {
  t.deepEquals(
    isValidDate(
      '2020-04-14'
    ),
    true,
    'should be true'
  )

  t.deepEquals(
    isValidDate(
      '2020-13-12'
    ),
    false,
    'should be false'
  )

  t.deepEquals(
    isValidDate(
      '20200212'
    ),
    false,
    'should be false'
  )

  t.deepEquals(
    isValidDate(
      'Adsfasdf'
    ),
    false,
    'should be false'
  )

  t.end()
})
