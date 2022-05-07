/*
Write a function that rotates the last n digits of a number. For the rotation, rotate by one digit to the left, moving the first digit to the end.

Examples:

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917

PROBLEM:
- Objective: given 2 numbers (num and n), rotate the last n digits of the number
- Input: 2 numbers
  - first argument will be number to perform rotation on
  - second argument will be the number of digits to be rotated
- Output/Return: number - rotated

Rules:
- rotation means moving by one digit to the left, i.e. first digit will be moved to the end
- if n (second argument) is 1, number will stay the same
- if n is 2, take the last 2 digits of the number, move the first digit to the end, and then append this new 2-digit number to the rest of the number
  - "rest of number" means, if number were a string, from index 0 to (length of string - n), exclusive
- if n is 3, take the last 3 digits of the number, move the first digit to the end, and then append this new 3-digit number to the rest of the number

Questions:
- what if n is greater than the length of the number?
- do I have to worry about floats, negative numbers?
- what if n is 0?
- what if new number starts with 0's?

DATA STRUCTURES:
- number
- string

ALGORITHM:
- takes number `num` and number of digits `n` as arguments
- convert number to string
- take slice of `num` from index 0 to (length of string - n), exclusive - `firstPortion`
- take slice of `num` from end of string, with n digits - `toRotate`
- rotate `toRotate` - `rotateNumString` helper function
- append this returned string to `firstPortion`
- convert `firstPortion` to a number, and return it

`rotateNumString` helper function:
- takes `numString` as argument
- take slice of `numString` from index 1 to end, append digit at index 0 of `numString` to end of this, and return
*/

function rotateRightmostDigits(num, n) {
  num = String(num);
  let firstPortion = num.slice(0, (num.length - n));
  let toRotate = num.slice(-n);
  toRotate = rotateNumString(toRotate);
  return Number(firstPortion + toRotate);
}

function rotateNumString(numString) {
  return numString.slice(1) + numString[0];
}


console.log(rotateRightmostDigits(735291, 1) === 735291);      // 735291
console.log(rotateRightmostDigits(735291, 2) === 735219);      // 735219
console.log(rotateRightmostDigits(735291, 3) === 735912);      // 735912
console.log(rotateRightmostDigits(735291, 4) === 732915);      // 732915
console.log(rotateRightmostDigits(735291, 5) === 752913);      // 752913
console.log(rotateRightmostDigits(735291, 6) === 352917);      // 352917
