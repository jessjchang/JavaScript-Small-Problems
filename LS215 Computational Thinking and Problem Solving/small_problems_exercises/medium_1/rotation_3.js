/*
Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

Write a function that takes an integer as an argument and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

Examples:

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845

PROBLEM:
- given a number, find maximum rotation
- Input: number
- Output/Return: number - maximum rotation

Rules:
- maximum rotation - e.g. number of length 6:
  - rotate all digits of number
  - rotate last 5 digits of number
  - rotate last 4 digits of number
  - ...
  - rotate last 2 digits of number
- if resulting maximum rotation number includes a leading zero, drop the leading zero

DATA STRUCTURES:
- numbers
- strings

ALGORITHM:
- takes number `num` as argument
- convert `num` to string - `numString`
- from length of `numString` string down to 2 - represents current number of digits to rotate `n`
  - invoke `rotateRightmostDigits` with `num` and `n` as arguments
  - reassign `num` to this return value
- return `num`
*/

function maxRotation(num) {
  let numString = String(num);
  
  for (let n = numString.length; n >= 2; n -= 1) {
    num = rotateRightmostDigits(num, n);
  }
  
  return num;
}

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

console.log(maxRotation(735291) === 321579);          // 321579
console.log(maxRotation(3) === 3);               // 3
console.log(maxRotation(35) === 53);              // 53
console.log(maxRotation(105) === 15);             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146) === 7321609845);      // 7321609845
