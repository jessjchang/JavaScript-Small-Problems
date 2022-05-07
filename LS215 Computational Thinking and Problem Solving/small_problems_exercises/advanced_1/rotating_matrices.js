/*
As we saw in the previous exercises, a matrix can be represented by an array of arrays. For example, the 3x3 matrix shown below:

1  5  8
4  7  2
3  9  6

is represented by the following array of arrays:

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

A 90-degree rotation of a matrix produces a new matrix in which each side of the matrix is rotated clockwise by 90 degrees. For example, the 90-degree rotation of the matrix shown above is:

3  4  1
9  7  5
6  2  8

A 90-degree rotation of a non-square matrix is similar. For example, given the following matrix:

3  4  1
9  7  5

its 90-degree rotation is:

9  3
7  4
5  1

Write a function that takes an arbitrary MxN matrix, rotates it clockwise by 90-degrees as described above, and returns the result as a new matrix. The function should not mutate the original matrix.

Examples:

const matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

const matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

const newMatrix1 = rotate90(matrix1);
const newMatrix2 = rotate90(matrix2);
const newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]


PROBLEM:
- given a matrix of any dimension, return a new matrix that is the original one rotated clockwise by 90 degrees
- Input: nested array, could be any size, i.e. contain any number of subarrays, whereby each subarray contains any number of elements
- Output: nested array

Rules:
- don't mutate the original array, return a new array
- given matrix can be any size
- if we call rotate90 4 times, should return a new array that contains same values as the original array
- in new array, will contain x subarrays, where x is number of elements in each subarray of the original array
- in new array, each subarray will contain n elements, where n is the number of subarrays in the original array
- Rotate 90:
  - new matrix:
    - rowIndex 0 - will contain n elements, where n is the number of rows (i.e. subarrays) in original nested array:
      - rowElement 0: from original - element at index 0 of last row
      - rowElement 1: from original - element at index 0 second to last row
      ...
      - last rowElement: from original - element at index 0 of first row (i.e. subarray index 0)
    - rowIndex 1:
      - rowElement 0: from original - element at index 1 of last row
      - rowElement 1: from original - element at index 1 of second to last row
      ...
      - last rowElement: from original - element at index 1 of first row (i.e. subarray index 0)
      
Questions:
- will subarrays always contain same number of elements?

ALGORITHM:
- take nested array `arr` as argument
- create an empty array `resultArr` to store resulting array
- determine new number of subarrays in `resultArr` - number of elements in first subarray of `arr` (`arr[0]`)
  - assign to variable `numResultSubarrs`
- append `numResultSubarrs` number of empty arrays [] to `resultArr`
- make copy of `arr` and reverse it - `reversedArr`
- iterate through `reversedArr` - for each `reversedOriginalRow` and `reversedOriginalRowIndex`
  - iterate through `reversedOriginalRow` - for each `reversedOriginalRowElement` and `reversedOriginalRowElementIndex`
  - `resultArr[reversedOriginalRowElementIndex][reversedOriginalRowIndex]` should be set to `reversedOriginalRowElement`
- return `resultArr`
*/

function rotate90(arr) {
  let resultArr = [];
  
  let numResultSubarrs = arr[0].length;
  for (let num = 0; num < numResultSubarrs; num += 1) {
    resultArr.push([]);
  }
  
  let reversedArr = arr.slice().reverse();
  reversedArr.forEach((reversedOriginalRow, reversedOriginalRowIndex) => {
    reversedOriginalRow.forEach((reversedOriginalRowElement, reversedOriginalRowElementIndex) => resultArr[reversedOriginalRowElementIndex][reversedOriginalRowIndex] = reversedOriginalRowElement);
  });
  
  return resultArr;
}


const matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

const matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

const matrix3 = [
  []
];

const matrix4 = [
  [1]
];

const matrix5 = [
  [1, 2]
];

const newMatrix1 = rotate90(matrix1);
const newMatrix2 = rotate90(matrix2);
const newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));
const newMatrix4 = rotate90(matrix3);
const newMatrix5 = rotate90(matrix4);
const newMatrix6 = rotate90(matrix5);

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]
console.log(newMatrix4);      // []
console.log(newMatrix5);      // [[1]]
console.log(newMatrix6);      // [[1], [2]]
