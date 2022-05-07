/*
A 3x3 matrix can be represented by an array of arrays: an outer array containing three subarrays that each contain three elements. For example, the 3x3 matrix shown below:

1  5  8
4  7  2
3  9  6

is represented by the following array of arrays:

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

An array of arrays is sometimes called a "nested array" because each inner subarray is nested inside an outer array. It also may be called a "two-dimensional array"

To access an element in the matrix, you can use bracket notation twice (such as array[][]), and include both the row index and column index within the brackets. Given the above matrix, matrix[0][2] is 8, and matrix[2][1] is 9. An entire row in the matrix can be referenced using a single index: matrix[1] is the row (subarray) [4, 7, 2]. Furthermore, given a row, we can determine the total number of columns by counting the number of elements in the row. Unfortunately, a convenient notation for accessing an entire column does not exist.

The transpose of a 3x3 matrix is the matrix that results from exchanging the rows and columns of the original matrix. For example, the transposition of the matrix shown above is:

1  4  3
5  7  9
8  2  6

Write a function that takes an array of arrays that represents a 3x3 matrix and returns the transpose of the matrix. You should implement the function on your own, without using any external libraries.

Take care not to modify the original matrix — your function must produce a new matrix and leave the input matrix array unchanged.

Examples:

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

const newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

PROBLEM:
- given a 3x3 matrix (i.e. a nested array that contains 3 subarrays, each with 3 elements), create a new array that is a transpose of the given array, i.e. rows become columns
- Input: nested array
- Output: new array

Rules:
- given matrix will always be 3x3
- transpose:
  - elements of row 1 become elements of column 1, elements of row 2 become elements of column 2, and elements of row 3 become elements of column 3
  - in transposed array:
    - elements of row 1 will be elements at index 0 of each of the original array's subarrays
    - elements of row 2 will be elements at index 1 of each of the original array's subarrays
    - elements of row 3 will be elements at index 2 of each of the original array's subarrays
    
ALGORITHM:
- take array `arr` as argument
- create a copy of `arr` - `arrCopy`
- iterate through `arrCopy` - with each `subarr` and `subarrIndex`
  - on each iteration, iterate through `subarr` - each element `el` and `elIndex`
    - transform each `el` into element at `arr[elIndex][subarrIndex]`
- return the final transformed array
*/

function transpose(arr) {
  let arrCopy = arr;
  return arrCopy.map((subarr, subarrIndex) => {
    return subarr.map((el, elIndex) => arr[elIndex][subarrIndex]);
  });
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

const newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
