/*
A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occurring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

NOTE: The largest possible featured number is 9876543201.

Examples:
featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."

PROBLEM:
- given a number, find the next featured number greater than the given number
- Input: number - integer
- Output: number - integer, the next greater featured number

Rules:
- argument will always be an integer
- issue error message (String) if no next featured number exists
- the largest possible featured number is 9876543201
- featured number:
  - odd
  - multiple of 7
  - each digit in number only occurs once
  
ADDITIONAL EXAMPLES:
featured(0);            // 7
featured(7);            // 21
  
ALGORITHM:
- take number (`num`) as argument
- if `num` is >= 9876543201, return string "There is no possible number that fulfills those requirements."
- iterate from `num` + 1 up to 9876543201
  - if current number is a featured number (`isFeaturedNum` helper function), return it from the function
  
`isFeaturedNum` helper function:
- takes number `num` as argument
- check if `num` % 2 === 1
- check if `num` % 7 === 0
- check if each digit in `num` is unique (`uniqueDigits` helper function)
- if all of the above conditions are true, then return `true`, otherwise return `false`

`uniqueDigits` helper function:
- takes number `num` as argument
- convert number to string, then to array of string digits - `numDigitsArray`
- iterate from 0 to 9
  - convert each digit to string
  - for each digit, check if the first index of the digit occurrence in `numDigitsArray` is equal to the last index occurrence
  - if they are not equal, return `false` from the method
- return `true` if never returned `false`
*/

function featured(num) {
  if (num >= 9876543201) {
    return "There is no possible number that fulfills those requirements.";
  }
  
  while (num <= 9876543201) {
    num += 1;
    if (isFeaturedNum(num)) {
      return num;
    }
  }
}

function isFeaturedNum(num) {
  return num % 2 === 1 && num % 7 === 0 && uniqueDigits(num);
}

function uniqueDigits(num) {
  let numDigitsArray = String(num).split('');
  
  for (let digit = 0; digit <= 9; digit += 1) {
    if (numDigitsArray.indexOf(String(digit)) !== numDigitsArray.lastIndexOf(String(digit))) {
      return false;
    }
  }
  
  return true;
}

console.log(featured(0));            // 7
console.log(featured(7));            // 21
console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."
