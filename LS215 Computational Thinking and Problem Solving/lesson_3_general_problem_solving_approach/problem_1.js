/*
Write a program that cleans up user-entered phone numbers so that they can be sent as SMS messages. Other than digits, the number may also contain special character such as spaces, dash, dot, and parentheses that should be ignored.

The rules are as follows:

If the phone number is less than 10 digits, assume that it is a bad number.
If the phone number is 10 digits, assume that it is good.
If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.
If the phone number is 11 digits and the first number is not 1, then it is a bad number.
If the phone number is more than 11 digits, assume that it is a bad number.

For bad numbers, just a return a string of 10 0s.


*** PROBLEM/REQUIREMENTS ***
Objective: given phone number, return a cleaned-up version of the number
Input: string (with any characters)
Output: string - cleaned up version of input string according to criteria

Rules:
- valid characters in phone number:
  - digits
  - ignore:
    - spaces
    - dash
    - dot
    - parentheses
- bad number (return a string of 10 0s: '0000000000'):
  - phone number < 10 digits
  - phone number = 11 digits && first number is not 1
  - phone number > 11 digits
- good number:
  - phone number = 10 digits
- need to clean up:
  - phone number = 11 digits && first number is 1
    - trim the 1 and use the last 10 digits
- returned string will always have 10 digits, can include other chars or not

Questions:
- by digits, we mean 0-9?
- in terms of number of digits, this is number of digits 0-9, so ignoring special characters entirely?
- by "special characters", any are ok to also ignore including ones not explicitly listed?
- are we returning with the special characters included or not?
- by "first number is 1", does this mean the starting character can be special character that will just be ignored? So this will still be a string to clean up if it's special character then 1, and 11 digits in total?
- by "trim 1 and use the last 10 digits", are we still including special characters?

*** EXAMPLES/TEST CASES ***
// 10 digits
console.log(cleanNumber('0123456789')) // '0123456789'
console.log(cleanNumber('-01234567(89')) // '0123456789'
console.log(cleanNumber('0-12. 3456789 ')) // '0123456789'

// 11 digits and first number is 1
console.log(cleanNumber('12345678910')) // '2345678910'
console.log(cleanNumber('- 12345678910')) // '2345678910'
console.log(cleanNumber('12-3(4)56  7-.8910')) // '2345678910'
console.log(cleanNumber('1.2-3(4)56  7-.8910')) // '2345678910'

// less than 10 digits
console.log(cleanNumber('')) // '0000000000'
console.log(cleanNumber('----------')) // '0000000000'
console.log(cleanNumber('111')) // '0000000000'
console.log(cleanNumber('123456789')) // '0000000000'
console.log(cleanNumber('1-.23)456789')) // '0000000000'
console.log(cleanNumber('-123456789')) // '0000000000'
console.log(cleanNumber('123456789  ')) // '0000000000'

// 11 digits and first number not 1
console.log(cleanNumber('01234567899')) // '0000000000'
console.log(cleanNumber('01.234-567899')) // '0000000000'

// more than 11 digits
console.log(cleanNumber('012345678914')) // '0000000000'
console.log(cleanNumber('012345 6 -789143')) // '0000000000'

*** DATA STRUCTURES ***
- string

*** ALGORITHM ***
- takes a string as argument
- find all digits are in the string in order (`digitsOnly`) - replace anything that is not a digit with empty ''
- find number of digits in the string (`numDigits`)
- check for cases that will return '0000000000' immediately (use invalidCase helper function - pass in `digitsOnly` and `numDigits`)
  - if invalidCase helper function returns true, return '0000000000' from the function
- if number of digits is 10
  - return the `digitsOnly` string
- otherwise
  - return `digitsOnly` string from index 1 to the end of the string

invalidCase helper function:
- takes an integer (number of digits) and string (just digits) as arguments
- return true if:
  - if number of digits < 10
  - number of digits > 11
  - number of digits is 11, and first digit is not 1
- otherwise, return false

*/

function cleanNumber(str) {
  const DEFAULT_INVALID = '0'.repeat(10);
  let digitsOnly = str.replace(/\D/g, '');
  let numDigits = digitsOnly.length;
  
  if (invalidCase(digitsOnly, numDigits)) {
    return DEFAULT_INVALID;
  }

  if (numDigits === 10) {
    return digitsOnly;
  } else {
    return digitsOnly.slice(1);
  }
}

function invalidCase(str, num) {
  return (num < 10) ||
         (num > 11) ||
         (num === 11 && str[0] !== '1');
}

// 10 digits
console.log(cleanNumber('0123456789')) // '0123456789'
console.log(cleanNumber('-01234567(89')) // '0123456789'
console.log(cleanNumber('0-12. 3456789 ')) // '0123456789'

// 11 digits and first number is 1
console.log(cleanNumber('12345678910')) // '2345678910'
console.log(cleanNumber('- 12345678910')) // '2345678910'
console.log(cleanNumber('12-3(4)56  7-.8910')) // '2345678910'
console.log(cleanNumber('1.2-3(4)56  7-.8910')) // '2345678910'

// less than 10 digits
console.log(cleanNumber('')) // '0000000000'
console.log(cleanNumber('----------')) // '0000000000'
console.log(cleanNumber('111')) // '0000000000'
console.log(cleanNumber('123456789')) // '0000000000'
console.log(cleanNumber('1-.23)456789')) // '0000000000'
console.log(cleanNumber('-123456789')) // '0000000000'
console.log(cleanNumber('123456789  ')) // '0000000000'

// 11 digits and first number not 1
console.log(cleanNumber('01234567899')) // '0000000000'
console.log(cleanNumber('01.234-567899')) // '0000000000'

// more than 11 digits
console.log(cleanNumber('012345678914')) // '0000000000'
console.log(cleanNumber('012345 6 -789143')) // '0000000000'



// 10 digits
console.log(cleanNumber('0123456789') === '0123456789') // true
console.log(cleanNumber('-01234567(89') === '0123456789') // true
console.log(cleanNumber('0-12. 3456789 ') === '0123456789') // true

// 11 digits and first number is 1
console.log(cleanNumber('12345678910') === '2345678910') // true
console.log(cleanNumber('- 12345678910') === '2345678910') // true
console.log(cleanNumber('12-3(4)56  7-.8910') === '2345678910') // true
console.log(cleanNumber('1.2-3(4)56  7-.8910') === '2345678910') // true

// less than 10 digits
console.log(cleanNumber('') === '0000000000') // true
console.log(cleanNumber('----------') === '0000000000') // true
console.log(cleanNumber('111') === '0000000000') // true
console.log(cleanNumber('123456789') === '0000000000') // true
console.log(cleanNumber('1-.23)456789') === '0000000000') // true
console.log(cleanNumber('-123456789') === '0000000000') // true
console.log(cleanNumber('123456789  ') === '0000000000') // true

// 11 digits and first number not 1
console.log(cleanNumber('01234567899') === '0000000000') // true
console.log(cleanNumber('01.234-567899') === '0000000000') // true

// more than 11 digits
console.log(cleanNumber('012345678914') === '0000000000') // true
console.log(cleanNumber('012345 6 -789143') === '0000000000') // true
