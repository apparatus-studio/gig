import { parseISO, addHours, addMinutes, getUnixTime } from 'date-fns'

export const isNumber = (digit: string): boolean => (
  digit === '0' ||
  digit === '1' ||
  digit === '2' ||
  digit === '3' ||
  digit === '4' ||
  digit === '5' ||
  digit === '6' ||
  digit === '7' ||
  digit === '8' ||
  digit === '9'
)

export const allNumbers = (digits: string[]): boolean => {
  if (digits.length === 0) {
    return true
  }

  const [head, ...tail] = digits

  return isNumber(head)
    ? allNumbers(tail)
    : false
}

export const transformTime = (timeInput: string): string => {
  const splitted = timeInput.split('')

  if (splitted.length === 1 && allNumbers(splitted)) {
    return `0${timeInput}.00`
  }

  if (splitted.length === 2 && allNumbers(splitted)) {
    const [first, second] = splitted
    const firstNumber = parseInt(first, 10)
    const secondNumber = parseInt(second, 10)

    if (firstNumber === 2 && secondNumber <= 3) { // these are 20+ hours, such as 22
      return `${timeInput}.00`
    }

    if (firstNumber === 1) { // these are 10<=x<20 hours, such as 15
      return `${timeInput}.00`
    }

    if (firstNumber <= 5) { // these are minutes, such as 36
      return `00.${timeInput}`
    }

    if (secondNumber <= 5) { // these are <10 hours and tens of minutes, such as 07.30
      return `0${firstNumber}.${secondNumber}0`
    }

    // otherwise cannot be made into a time, such as 78
  }

  if (splitted.length === 3 && allNumbers(splitted)) {
    const [first, second, third] = splitted
    const firstNumber = parseInt(first, 10)
    const secondNumber = parseInt(second, 10)
    const thirdNumber = parseInt(third, 10)

    if (
      firstNumber === 1 &&
      thirdNumber <= 5
    ) { // these are 10<=x20 hours with tens of minutes, such as 15.30
      return `${splitted[0]}${splitted[1]}.${splitted[2]}0`
    }

    if (
      firstNumber === 2 &&
      secondNumber <= 3 &&
      thirdNumber <= 5
    ) { // these are 20+ hours with tens of minutes, such as 22.40
      return `${splitted[0]}${splitted[1]}.${splitted[2]}0`
    }

    if (secondNumber <= 5) { // these are <10 hours with minutes, such as 7.34
      return `0${splitted[0]}.${splitted[1]}${splitted[2]}`
    }

    // otherwise cannot be made into a time, such as 782
  }

  if (splitted.length === 4 && allNumbers(splitted)) {
    return `${timeInput.slice(0, 2)}.${timeInput.slice(2, 4)}`
  }

  if (splitted.length === 5 && splitted[2] === ':' && allNumbers([...splitted.slice(0, 2), ...splitted.slice(3, 5)])) {
    return `${timeInput.slice(0, 2)}.${timeInput.slice(3, 5)}`
  }

  return timeInput
}

export const startTimeFromHooman = (dateInput: string, timeInput: string): number => (
  getUnixTime(
    addMinutes(
      addHours(
        parseISO(dateInput),
        parseInt(timeInput.slice(0, 2))
      ),
      parseInt(timeInput.slice(3, 5))
    )
  )
)

export const lengthFromHooman = (startTimeInput: string, endTimeInput: string): number => (
  (
    parseInt(endTimeInput.slice(0, 2)) * 60 * 60 +
    parseInt(endTimeInput.slice(3, 5)) * 60
  ) -
  (
    parseInt(startTimeInput.slice(0, 2)) * 60 * 60 +
    parseInt(startTimeInput.slice(3, 5)) * 60
  )
)
