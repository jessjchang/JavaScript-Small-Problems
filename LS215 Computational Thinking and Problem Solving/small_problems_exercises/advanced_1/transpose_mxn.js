/*
In the previous exercise, you wrote a function that transposed a 3x3 matrix represented by an array of arrays.

Matrix transposes are not limited to 3x3 matrices, or even square matrices. Any matrix can be transposed simply by switching columns with rows.

Modify your transpose function from the previous exercise so that it works with any MxN matrix with at least one row and one column.

Examples:

transpose([[1, 2, 3, 4]]);            // [[1], [2], [3], [4]]
transpose([[1], [2], [3], [4]]);      // [[1, 2, 3, 4]]
transpose([[1]]);                     // [[1]]

transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]);
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]

PROBLEM:
- given a nested array of any size/dimension, return transposed array
- Input: array of array(s)
- Output: new array

Rules:
- switch columns and rows
- given matrix will always contain at least one row and one column
- number of elements in first row will be number of columns, i.e. number of subarrays in the returned array
- number of subarrays in the original array will be number of elements in each subarray of the returned array

Question:
- can we assume the number of elements in each row of given matrix will always be the same?

ALGORITHM:
- take array `arr` as argument
- create a new empty array to store resulting `transposedArr`
- determine number of rows in transposed array `numTransposedRows` - the number of elements in `arr[0]`
- for `numTransposedRows` times, push an empty array into `transposedArr`
- iterate through `arr` - for each `originalRow` and `originalRowIndex`
  - iterate through ``originalRow` - for each `originalRowEl` and `originalRowElIndex`
    - set `transposedArr[originalRowElIndex][originalRowIndex]` to `originalRowEl`
- return `transposedArr`
*/

function transpose(arr) {
  let transposedArr = [];
  
  for (let newRows = 0; newRows < arr[0].length; newRows += 1) {
    transposedArr.push([]);
  }
  
  arr.forEach((originalRow, originalRowIndex) => {
    originalRow.forEach((originalRowEl, originalRowElIndex) => transposedArr[originalRowElIndex][originalRowIndex] = originalRowEl)
  });
  
  return transposedArr;
}

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]
