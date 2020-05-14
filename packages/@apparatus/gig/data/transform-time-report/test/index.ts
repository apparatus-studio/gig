import test from 'tape'
import { getUnixTime } from 'date-fns'
import { ACME, BigBuy } from '@apparatus/gig-data-demo'
import { splitByDay, lengthInHooman, startTimeInHooman, endTimeInHooman, dayInHooman } from '../src'

test('splitByDay', (t) => {
  t.deepEquals(
    splitByDay(
      ACME.timeReports
    ),
    [
      {
        date: '2020-04-14',
        timeReports: [
          {
            rate: 1500,
            currency: 'SEK',
            startTime: getUnixTime(
              new Date('2020-04-14 15:00:00')
            ),
            length: 3 * (60 * 60),
          },
          {
            rate: 1500,
            currency: 'SEK',
            startTime: getUnixTime(
              new Date('2020-04-14 10:00:00')
            ),
            length: 2 * (60 * 60),
          },
        ],
      },
      {
        date: '2020-04-13',
        timeReports: [
          {
            rate: 1200,
            currency: 'SEK',
            startTime: getUnixTime(
              new Date('2020-04-13 10:00:00')
            ),
            length: 5 * (60 * 60),
          },
        ],
      },
    ],
    'should have 2020-04-14 and 2020-04-13'
  )

  t.end()
})

test('lengthInHooman', (t) => {
  t.deepEquals(
    lengthInHooman(
      ACME.timeReports[0]
    ),
    '3 hours',
    'should be 3 hours'
  )

  t.deepEquals(
    lengthInHooman(
      BigBuy.timeReports[0]
    ),
    '4 h  30 min',
    'should be 4 h  30 min'
  )

  t.end()
})

test('startTimeInHooman', (t) => {
  t.deepEquals(
    startTimeInHooman(
      ACME.timeReports[0]
    ),
    '15.00',
    'should be 15.00'
  )

  t.deepEquals(
    startTimeInHooman(
      BigBuy.timeReports[0]
    ),
    '11.35',
    'should be 11.35'
  )

  t.end()
})

test('endTimeInHooman', (t) => {
  t.deepEquals(
    endTimeInHooman(
      ACME.timeReports[0]
    ),
    '18.00',
    'should be 18.00'
  )

  t.deepEquals(
    endTimeInHooman(
      BigBuy.timeReports[0]
    ),
    '16.05',
    'should be 16.05'
  )

  t.end()
})

test('dayInHooman', (t) => {
  t.deepEquals(
    dayInHooman(
      {
        date: '2020-04-14',
        timeReports: [],
      },
      '2020-04-14'
    ),
    'Today',
    'should be Today'
  )

  t.deepEquals(
    dayInHooman(
      {
        date: '2020-04-12',
        timeReports: [],
      },
      '2020-04-14'
    ),
    'April 12th',
    'should be April 12th'
  )

  t.end()
})
