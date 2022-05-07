/*
Write a function that displays an 8-pointed star in an nxn grid, where n is an odd integer that is supplied as an argument to the function. The smallest such star you need to handle is a 7x7 grid (i.e., when n is 7).

Examples:

star(7);
// logs
*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *

star(9);
// logs
*   *   *
 *  *  *
  * * *
   ***
*********
   ***
  * * *
 *  *  *
*   *   *

PROBLEM:
- Objective: Given a number n (odd integer), display an 8-pointed star in an nxn grid
- Input: number - odd integer, greater than or equal to 7
- Output: 8-pointed star in nxn grid

Rules:
- smallest star we need to handle is 7x7 grid (i.e. argument n will always be greater than or equal to 7)
- given number n will always be odd
- given n, nxn grid means that diagonals, vertical, and horizontal middle will always contain n asterisks
  - star will fit within nxn square
  - 4 corners of grid will always contain asterisk
- given n = 7:
  - row 1: asterisk, 2 spaces, asterisk, 2 spaces, asterisk
  - row 2: 1 space, 1 asterisk, 1 space, 1 asterisk, 1 space, 1 asterisk, 1 space
  - row 3: 2 spaces, 3 asterisk, 2 spaces
  - row 4: 7 asterisks
  - row 5 - 7: repeat rows 1-3 in reverse
  
- given n = 9:
  - row 1: asterisk, 3 spaces, asterisk, 3 spaces, asterisk
  - row 2: space, asterisk, 2 spaces, asterisk, 2 spaces, asterisk, space
  - row 3: 2 spaces, asterisk, 1 space, asterisk, 1 space, asterisk, 2 spaces
  - row 4: 3 spaces, 3 asterisk, 3 spaces
  - row 5: 9 asterisks
  - row 6 - 9: rows 1 - 4 in reverse

- given n:
  - pattern for each row other than the middle row will always be:
    - outer_space, asterisk, inner_space, asterisk, inner_space, asterisk, outer_space
  - row 1: 0 outer_spaces, 1 asterisk, (n / 2) rounded down - 1 inner_spaces
  - row 2: 1 outer_space, 1 asterisk, (n / 2) rounded down - 2 inner_spaces
  - row 3: 2 outer_space, 1 asterisk, (n / 2) rounded down - 3 inner_spaces
  - ... continue until inner_space === 0
  - middle row - (n / 2) rounded up - will always have n asterisks
  - repeat the same as rows before middle row in reverse
  
EXAMPLES:
star(7);
// logs
*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *

star(9);
// logs
*   *   *
 *  *  *
  * * *
   ***
*********
   ***
  * * *
 *  *  *
*   *   *

star(11):
*    *    *
 *   *   * 
  *  *  *
   * * *
    ***
***********
    ***
   * * *
  *  *  *
 *   *   *
*    *    *

  
DATA STRUCTURES:
- strings
- arrays
- numbers

ALGORITHM:
- keep track of the `outer_spaces` starting from 0 to (n / 2) rounded down - 1
- keep track of inner_spaces starting from (n / 2) rounded down - 1
- create empty array to keep track of result
- while `inner_spaces` >= 0
  - display pattern from earlier - pattern for each row other than the middle row will always be:
    - outer_space, asterisk, inner_space, asterisk, inner_space, asterisk, outer_space
  - create proper string with correct pattern
  - append to result array
  - increment outer_spaces by 1
  - decrement inner_spaces by 1
- create copy of result array as `second half array`, and reverse it
- append to `result` the row with all asterisks (repeated n times)
- append second half array to `result` and display each string

*/

function star(n) {
  let outerSpaces = 0;
  let innerSpaces = Math.floor(n / 2) - 1;
  let result = [];
  
  while (innerSpaces >= 0) {
    let outerRowSpacesPortion = ' '.repeat(outerSpaces);
    let innerRowSpacesPortion = ' '.repeat(innerSpaces);
    let row = outerRowSpacesPortion + ('*' + innerRowSpacesPortion).repeat(2) + '*' + outerRowSpacesPortion;
    
    result.push(row);
    outerSpaces += 1;
    innerSpaces -= 1;
  }
  
  let secondHalfArray = result.slice().reverse();
  result.push('*'.repeat(n));
  result = result.concat(secondHalfArray);
  console.log(result.join('\n'));
}

star(7);
star(9);
star(11);
