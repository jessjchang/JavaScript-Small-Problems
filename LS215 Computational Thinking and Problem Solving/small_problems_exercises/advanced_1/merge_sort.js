/*
Merge sort is a recursive sorting algorithm that works by breaking down an array's elements into nested subarrays, then combining those nested subarrays back together in sorted order. It is best explained with an example. Given the array [9, 5, 7, 1], let's walk through the process of sorting it with merge sort. We'll start off by breaking the array down into nested subarrays:

[9, 5, 7, 1] -->
[[9, 5], [7, 1]] -->
[[[9], [5]], [[7], [1]]]

We then work our way back to a flat array by merging each pair of nested subarrays back together in the proper order:

[[[9], [5]], [[7], [1]]] -->
[[5, 9], [1, 7]] -->
[1, 5, 7, 9]

Write a function that takes an array argument and returns a new array that contains the values from the input array in sorted order. The function should sort the array using the merge sort algorithm as described above. You may assume that every element of the array will be of the same data type—either all numbers or all strings.

Feel free to use the merge function you wrote in the previous exercise.

Examples:

mergeSort([9, 5, 7, 1]);           // [1, 5, 7, 9]
mergeSort([5, 3]);                 // [3, 5]
mergeSort([6, 2, 7, 1, 4]);        // [1, 2, 4, 6, 7]

mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']);
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]);
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]

PROBLEM:
- given an array, use merge sort algorithm to sort the elements in ascending order, and return the sorted elements in a new array
- Input: array
- Output: new array, sorted

Rules:
- every element of given array will always be either all numbers or all strings
- merge sort:
  - break down array into nested subarrays, continuously dividing in half until have nested subarrays, whereby each individual subarray contains only a single element
  - from there, work back into a flat array, merging each pair of subarrays in proper order
  
even length:
[6, 2, 7, 1, 4, 4]
[[6, 2, 7], [1, 4, 4]]
[[[6, 2], [7]], [[1, 4], [4]]]
[[[[6], [2]], [[7]]], [[[1], [4]], [[4]]]]

[[[2, 6], [7]], [[1, 4]], [4]]]
[[2, 6, 7], [1, 4, 4]]
[1, 2, 4, 4, 6, 7]

odd length:
[6, 2, 7, 1, 4]
[[6, 2, 7], [1, 4]]
[[[6, 2], [7]], [[1], [4]]]
[[[[6], [2]], [7]], [[1], [4]]]

[[[2, 6], [7]], [1, 4]]
[[2, 6, 7], [1, 4]]
[1, 2, 4, 6, 7]


ALGORITHM:
- take array `arr` as argument
- if the length of `arr` is <= 1, return the array itself
- set `firstHalfSubarray` as the portion of `arr` from index 0 up to but not including length of `arr` / 2
- set `secondHalfSubarray` as the portion of `arr` from index length of `arr` / 2 to the end of `arr`

- recursively drill down, reassigning `firstHalfSubarray` and `secondHalfSubarray` to the return value of calling the `mergeSort` method and passing in  `firstHalfSubarray` and `secondHalfSubarray` respectively, so that we keep drilling down until we get to individual subarrays of one element each
- return `firstHalfSubarray` and `secondHalfSubarray` merged - use `merge` helper function
*/

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  
  let firstHalfSubarray = arr.slice(0, arr.length / 2);
  let secondHalfSubarray = arr.slice(arr.length / 2);
  
  firstHalfSubarray = mergeSort(firstHalfSubarray);
  secondHalfSubarray = mergeSort(secondHalfSubarray);
  
  return merge(firstHalfSubarray, secondHalfSubarray);
}

function merge(array1, array2) {
  array1 = array1.slice();
  array2 = array2.slice();
  
  let resultArray = [];
  
  if (array1.length === 0 && array2.length === 0) return resultArray;
  
  let numIterations = array1.length + array2.length;
  
  for (let iterationNumber = 0; iterationNumber < numIterations; iterationNumber += 1) {
    if (array1.length === 0 || array2.length === 0) {
      let nonEmptyArray = array1.length === 0 ? array2 : array1;
      return resultArray.concat(nonEmptyArray);
    }
    
    if (array1[0] < array2[0]) {
      resultArray.push(array1.shift());
    } else {
      resultArray.push(array2.shift());
    }
  }
}

console.log(mergeSort([]));                 // []
console.log(mergeSort([5]));                 // [5]
console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]
console.log(mergeSort([6, 2, 7, 1, 4, 4]));        // [1, 2, 4, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]
