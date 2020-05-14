import { parseISO } from 'date-fns'

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

export const isValidTime = (timeInput: string): boolean => {
  if (timeInput.length !== 5) {
    return false
  }

  if (timeInput[2] !== '.') {
    return false
  }

  const splitted = timeInput.split('.').join('').split('')

  if (!allNumbers(splitted)) {
    return false
  }

  const [hour, minutes] = timeInput.split('.')

  if (parseInt(hour, 10) > 23) {
    return false
  }

  if (parseInt(minutes, 10) > 59) {
    return false
  }

  return true
}

export const isValidDate = (dateInput: string): boolean => (
  /\d\d\d\d-\d\d-\d\d/.test(dateInput) &&
  parseISO(dateInput).toString() !== 'Invalid Date'
)
