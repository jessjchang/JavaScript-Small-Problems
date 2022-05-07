/*
Write a function that takes two sorted arrays as arguments and returns a new array that contains all the elements from both input arrays in sorted order.

You may not provide any solution that requires you to sort the result array. You must build the result array one element at a time in the proper order.

Your solution should not mutate the input arrays.

Problem:
- Given two arrays, return a new array that contains all elements from the two given arrays, but in sorted order (ascending)
- Input: 2 arrays
- Output: 1 array - size will be the total number of elements from the 2 given arrays

Rules:
- if elements are all numbers, "sorted order" means in ascending numerical order
- we can't mutate the input arrays - return a *new* array
- we can't just concatenate the two given arrays together and sort that one array
  - we have to build the return array one element at a time
- if one of the given arrays is empty, the returned array will just be the populated array (but a new copy)
- the two given arrays will always already be in sorted order
- the two given arrays don't have to be equal in length

// Data Structures
- arrays
- numbers

- guard clauses for the empty array scenarios
- start out with an empty array to store the results
- find the array that starts from the smallest element - that will be my starting array
- one option is to create copies of the given arrays and mutate as we go
- other option is to not mutate any copies of the given arrays, but keep track of index
- I could either set the number of "iterations" as the total number of elements between the first and second arrays, or I could just continue comparing until both arrays are empty
- watch out for situation where there are still multiple elements in one array, but then other is already empty - separate helper function

ALGORITHM:
- take 2 arrays `array1` and `array2` as arguments
- reassign `array1` to a copy of `array1`
- reassign `array2` to a copy of `array2`
// - if both arrays are empty, return a new empty array
- create a new empty array to store my results - `resultArray`
- determine `numIterations` - length of array1 + length of array2
- iterate `numIterations` times
  - on each iteration:
    - if array1 is empty or array2 is empty, return `resultArray` and the non-empty array concatenated from the method
    - determine if first element of array1 < first element of array2
      - if so, append first element of array1 to `resultArray`, and remove first element from array1
      - otherwise, append first element of array2 to `resultArray`, and remove first element from array2

*/

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

// // smallest and biggest numbers come from first array
console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
// // duplicate numbers in both arrays
console.log(merge([1, 1, 3], [1, 2]));         // [1, 1, 1, 2, 3]
// // biggest number is in both first and second arrays
console.log(merge([1, 1, 3], [1, 3]));         // [1, 1, 1, 3, 3]
// smallest number comes from second array
console.log(merge([1, 1, 3], [0, 3]));         // [0, 1, 1, 3, 3]
// biggest number comes from second array
console.log(merge([1, 1, 3], [2, 2, 4]));         // [1, 1, 2, 2, 3, 4]
// smallest and biggest numbers come from second array
console.log(merge([1, 1, 3], [0, 2, 4, 5]));         // [0, 1, 1, 2, 3, 4, 5]
// empty array scenarios
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]
console.log(merge([], []));                    // []
// one-element scenarios
console.log(merge([1], [1]));                    // [1, 1]
console.log(merge([1], [2]));                    // [1, 2]
console.log(merge([2], [1]));                    // [1, 2]
console.log(merge([2], [1, 3]));                    // [1, 2, 3]
