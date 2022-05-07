/*
Write a function that computes the difference between the square of the sum of the first n positive integers and the sum of the squares of the first n positive integers.

Examples:
sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150

PROBLEM:
- given a number n (assuming positive integer), compute (sum of first n positive integers) squared - (sum of squares of first n positive integers)
- input: number - integer (assuming positive)
- output: number

Rules:
- "first n positive integers" means from 1 up to and including given number n

ALGORITHM:
- takes number `n` as argument
- create an array of positive integers from 1 to n - `firstNDigits` helper function - `digits`
- find sum of `digits` and square it - `sumSquared`
- iterate through `digits` squaring each number and finding sum - `squareSum`
- return `sumSquared` - `squareSum`

`firstNDigits` helper function:
- takes number `n` as argument
- create an empty array to store result
- iterate from 1 to `n` and on each iteration, append current number to array
- return final array
*/

function sumSquareDifference(n) {
  let digits = firstNDigits(n);
  let sumSquared = digits.reduce((sum, digit) => sum + digit)**2;
  let squareSum = digits.reduce((sum, digit) => sum + digit**2, 0);
  return sumSquared - squareSum;
}

function firstNDigits(n) {
  let result = [];

  for (let currentNum = 1; currentNum <= n; currentNum += 1) {
    result.push(currentNum);
  }
  
  return result;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150
