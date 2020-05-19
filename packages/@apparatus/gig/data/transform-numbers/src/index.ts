export const hoursInHooman = (hours: number): string => {
  if (hours === 1) {
    return '1 hour'
  }

  return `${hours} hours`
}

export const hoursMinutesSecondsInHooman = (lengthInSeconds: number): string => {
  const hours = Math.floor(lengthInSeconds / (60 * 60)).toString()
  const minutes = Math.floor((lengthInSeconds % (60 * 60)) / 60).toString()
  const seconds = (lengthInSeconds % 60).toString()

  return `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`
}

const addCommas = (value: string[], result: string[] = []): string[] => {
  if (value.length < 3) {
    return [
      ...result,
      ...value,
    ]
  }

  const [a, b, c, ...d] = value

  return addCommas(
    d,
    [
      ...result,
      a,
      b,
      c,
      ',',
    ]
  )
}

export const moneyInHooman = (money: number): string => {
  const floored = Math.floor(money)

  const withCommas = addCommas(`${floored}`.split('').reverse()).reverse().join('')

  const decimals = `${money - floored}`.split('.')[1]

  return `${withCommas}${money - floored > 0 ? `.${decimals.length > 2 ? decimals.slice(0, 2) : decimals}` : ''}`
}
