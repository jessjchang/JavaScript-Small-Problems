/*
Write a function that displays a four-pointed diamond in an nxn grid, where n is an odd integer supplied as an argument to the function. You may assume that the argument will always be an odd integer.

Examples:

diamond(1);
// logs
*

diamond(3);
// logs
 *
***
 *
 
diamond(9);
// logs
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
    

PROBLEM:
- Objective: given an odd integer `n`, create a four-pointed diamond in an nxn grid

- Input: integer - odd - number of rows and columns in the diamond
- Output: display of asterisks in a diamond shape

Rules:
- argument will always be an odd integer
- `n` represents the number of rows and columns in the diamond
- number of asterisks in a row will always be odd
- asterisks will be centered in the row with spaces leading and trailing
  - first row will contain 1 asterisk (*), (n - 1) / 2 spaces on either side
  - second row will contain 3 asterisks, (n - 1) / 2 spaces on either side
  - third row will contain 5 asterisks,(n - 1) / 2 spaces on either side
  ...
  - nth row will be the middle row of the diamond
    - nth row will contain n asterisks, 0 spaces on either side
  
  - continue back in opposite order of above rows
  - last row will again be 1 asterisk, (n - 1) / 2 spaces on either side
  
Examples:
diamond(1);
// logs
*

diamond(3);
// logs
 *
***
 *
 
diamond(9);
// logs
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
    

diamond(5);
// logs

  *  
 ***
*****
 ***
  *

Data Structures:
- Input: integer
- Output: strings

Algorithm:
- takes integer `n` as argument
- create an array of just the odd integers from 1 to `n` - `oddIntegers` helper function
  - declare `oddIntegersArray` and initialize to the return value of above
- create a copy of `oddIntegersArray` and reverse it - `reversedOddIntegersArray`
- Concatenate `oddIntegersArray` and `reverseOddIntegersArray` (from index 1 to the end) - `numStarsArray`
- iterate through `numStars`, and on each iteration for `numStar`
  - initialize `numSpaces` to (n - numStar) / 2
  - create a string of ' ' repeated `numSpaces` times, followed by '*' repeated `numStar` times, followed by ' ' repeated `numSpaces` times
  - log this string

`oddIntegers` helper function:
- takes an integer `n` as argument
- create an empty array to store result
- iterate from 1 to `n`
  - on each iteration, append the current number to the results array
  - increment current number by 2
- return the results array
    
    
*/

function diamond(n) {
  let oddIntegersArray = oddIntegers(n);
  let reversedOddIntegersArray = oddIntegersArray.slice().reverse();
  let numStarsArray = oddIntegersArray.concat(reversedOddIntegersArray.slice(1));
  
  numStarsArray.forEach(numStar => {
    let numSpaces = (n - numStar) / 2;
    let row = `${' '.repeat(numSpaces)}${'*'.repeat(numStar)}${' '.repeat(numSpaces)}`
    console.log(row);
  });  
}

function oddIntegers(n) {
  let result = [];
  
  for (let num = 1; num <= n; num += 2) {
    result.push(num);
  }
  
  return result;
}

diamond(1);
diamond(3);
diamond(9);
diamond(5);


// FURTHER EXPLORATION

/*

diamond(1);
// logs
*

diamond(3);
// logs
 *
* *
 *
 
diamond(9);
// logs
    *
   * *
  *   *
 *     *
*       *
 *     *
  *   *
   * *
    *
    

diamond(5);
// logs

  *  
 * *
*   *
 * *
  *


Algorithm:
- takes integer `n` as argument
- create an array of just the odd integers from 1 to `n` - `oddIntegers` helper function
  - declare `oddIntegersArray` and initialize to the return value of above
- create a copy of `oddIntegersArray` and reverse it - `reversedOddIntegersArray`
- Concatenate `oddIntegersArray` and `reverseOddIntegersArray` (from index 1 to the end) - `numStarsArray`
- iterate through `numStars`, and on each iteration for `numStar`
  - initialize `numSurroundingSpaces` to (n - numStar) / 2
  - initialize `numHollowSpaces` to (numStar - 2)
  - declare `row`
  - if `numStar` is 1
    - reassign `row` to string of ' ' repeated `numSurroundingSpaces` times, followed by '*', followed by ' ' repeated `numSurroundingSpaces` times
  - otherwise
    - create a string of ' ' repeated `numSurroundingSpaces` times, followed by '*', followed by ' ' repeated `numHollowSpaces` times, followed by '*', followed by ' ' repeated `numSurroundingSpaces` times
  - log `row`

`oddIntegers` helper function:
- takes an integer `n` as argument
- create an empty array to store result
- iterate from 1 to `n`
  - on each iteration, append the current number to the results array
  - increment current number by 2
- return the results array
    
    
*/

function diamond(n) {
  let oddIntegersArray = oddIntegers(n);
  let reversedOddIntegersArray = oddIntegersArray.slice().reverse();
  let numStarsArray = oddIntegersArray.concat(reversedOddIntegersArray.slice(1));
  
  numStarsArray.forEach(numStar => {
    let numSurroundingSpaces = (n - numStar) / 2;
    let numHollowSpaces = numStar - 2;
    let row;
    
    if (numStar === 1) {
      row = singleStarRow(numSurroundingSpaces);
    } else {
      row = hollowRow(numSurroundingSpaces, numHollowSpaces);
    }
    
    console.log(row);
  });  
}

function singleStarRow(numSurroundingSpaces) {
  return `${' '.repeat(numSurroundingSpaces)}*${' '.repeat(numSurroundingSpaces)}`;
}

function hollowRow(numSurroundingSpaces, numHollowSpaces) {
  return `${' '.repeat(numSurroundingSpaces)}*${' '.repeat(numHollowSpaces)}*${' '.repeat(numSurroundingSpaces)}`;
}

function oddIntegers(n) {
  let result = [];
  
  for (let num = 1; num <= n; num += 2) {
    result.push(num);
  }
  
  return result;
}

diamond(1);
diamond(3);
diamond(9);
diamond(5);
