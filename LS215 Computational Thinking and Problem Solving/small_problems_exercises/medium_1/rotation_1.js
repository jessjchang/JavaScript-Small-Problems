/*
Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

If the input is not an array, return undefined.
If the input is an empty array, return an empty array.

Review the test cases below, then implement the solution accordingly.

rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
const array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]


PROBLEM:
- Objective: Given an array, move the first element of the array to the end of the array
- Input: array
- Return: array - with first element rotated to end of array

Rules:
- input array can contain any data types (primitives and arrays/objects)
- do not modify the original array, i.e. return a new array
- if input is empty array, return empty array
- if input is not an array, return undefined
- if input only contains 1 element, return new array containing this element

Questions:
- do we need to worry about input array containing "non-elements", i.e. property keys that aren't necessarily "indexes" (non-negative, non-integer), and if so, do these count as "element" to be moved to end of array?
- do we need to worry about "empty items", i.e. unset elements?

Katarina's solution for determining if element is "empty":
function isEmptyEl(el) {
  let counter = 0;
  let arr = [el];
  arr.forEach(a => counter++);
  return arr.length !== counter;
}

DATA STRUCTURES:
- arrays

ALGORITHM:
- takes array `arr` as argument
- check if `arr` is an array
  - if not, return undefined
- check if `arr` is empty
  - if so, return empty array
- create a copy of `arr` from index 1 to end of array
- append first element of `arr` to this array, and return it
*/

function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return [];
  let result = arr.slice(1);
  result.push(arr[0]);
  return result;
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
const array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]
