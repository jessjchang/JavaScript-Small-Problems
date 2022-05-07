/*
'Bubble Sort' is one of the simplest sorting algorithms available. Although it is not an efficient algorithm, it is an excellent exercise for student developers. In this exercise, you will write a function that sorts an array using the bubble sort algorithm.

A bubble sort works by making multiple passes (iterations) through an array. On each pass, the two values of each pair of consecutive elements are compared. If the first value is greater than the second, the two elements are swapped. This process is repeated until a complete pass is made without performing any swaps — at which point the array is completely sorted.

We can stop iterating the first time we make a pass through the array without making any swaps because this means that the entire array is sorted.

For further information — including pseudo-code that demonstrates the algorithm, as well as a minor optimization technique — see the Bubble Sort Wikipedia page (https://en.wikipedia.org/wiki/Bubble_sort).

Write a function that takes an array as an argument and sorts that array using the bubble sort algorithm described above. The sorting should be done "in-place" — that is, the function should mutate the array. You may assume that the array contains at least two elements.

Examples:
const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

PROBLEM:
- given an array, perform a bubble sort so that the array is sorted in place in ascending order
- Input: array, containing integers or strings
- Output: same array, now sorted in-place

Rules:
- mutate the given array
- array will contain at least 2 elements
- strings should be sorted "alphabetically" and numbers should be sorted numerically

ALGORITHM:
- takes an array `arr` as argument
- declare variable `swapped`
- continue performing the following while `swapped` is true (but do at least once)
  - set `swapped` to false
  - iterate over `arr` from index 0 up to the second to last index (arr.length - 2)
    - on each iteration, compare element at current index and element at current index + 1
      - if first element > second element
        - swap them in-place
        - set `swapped` to true
- return `arr`
*/

function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let index = 0; index < arr.length - 1; index += 1) {
      if (arr[index] > arr[index + 1]) {
        [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
        swapped = true;
      }
    }
  } while (swapped);
    
  return arr;
}

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
