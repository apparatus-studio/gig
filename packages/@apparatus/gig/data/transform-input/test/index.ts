import test from 'tape'
import { getUnixTime, addMinutes, addHours, parseISO } from 'date-fns'
import { transformTime, startTimeFromHooman, lengthFromHooman } from '../src'

test('transformTime', (t) => {
  t.deepEquals(
    transformTime(
      '10.23'
    ),
    '10.23',
    'should be 10.23'
  )

  t.deepEquals(
    transformTime(
      '10:23'
    ),
    '10.23',
    'should be 10.23'
  )

  t.deepEquals(
    transformTime(
      '1023'
    ),
    '10.23',
    'should be 10.23'
  )

  t.deepEquals(
    transformTime(
      '102'
    ),
    '10.20',
    'should be 10.20'
  )

  t.deepEquals(
    transformTime(
      '10'
    ),
    '10.00',
    'should be 10.00'
  )

  t.deepEquals(
    transformTime(
      '8'
    ),
    '08.00',
    'should be 08.00'
  )

  t.deepEquals(
    transformTime(
      '823'
    ),
    '08.23',
    'should be 08.23'
  )

  t.deepEquals(
    transformTime(
      '223'
    ),
    '22.30',
    'should be 22.30'
  )

  t.deepEquals(
    transformTime(
      '27'
    ),
    '00.27',
    'should be 00.27'
  )

  t.deepEquals(
    transformTime(
      '83'
    ),
    '08.30',
    'should be 08.30'
  )

  t.deepEquals(
    transformTime(
      '87'
    ),
    '87',
    'should be 87'
  )

  t.deepEquals(
    transformTime(
      'Wuhan'
    ),
    'Wuhan',
    'should be Wuhan'
  )

  t.end()
})

test('startTimeFromHooman', (t) => {
  t.deepEquals(
    startTimeFromHooman(
      '2020-04-14',
      '10.23'
    ),
    getUnixTime(
      addMinutes(
        addHours(
          parseISO(
            '2020-04-14'
          ),
          10
        ),
        23
      )
    ),
    'should be 1586852580'
  )

  t.end()
})

test('lengthFromHooman', (t) => {
  t.deepEquals(
    lengthFromHooman(
      '06.50',
      '10.23'
    ),
    3 * (60 * 60) + 33 * 60,
    'should be 12780'
  )

  t.end()
})
