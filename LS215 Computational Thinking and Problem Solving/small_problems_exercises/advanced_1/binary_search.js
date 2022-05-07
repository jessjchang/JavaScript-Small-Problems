/*
It is quite common to find yourself in a situation where you need to perform a search on some data to find something you're looking for. Imagine that you need to search through the yellow pages to find the phone number of a particular business. A straightforward way to do this would be to go through the yellow pages one business at a time, checking if the current business name is the one you're trying to find.

This may be a simple and easy way to search, but it's not very efficient. In the worst case scenario, it could mean having to search through every single business name before finding out that the business isn't listed—or, slightly better, having to go through every letter from 'A' to 'Z' before finding the business. A linear search such as this can take quite a long time.

A binary search algorithm is a much more efficient alternative. This algorithm allows you to cut the search area in half on each iteration by discarding the half that you know your search term doesn't exist in. The binary search algorithm is able to do this by relying on the data being sorted. Going back to the yellow pages example, let's say that we're searching the following yellowPages data for the search item 'Pizzeria':

// Yellow pages list of business names data:
const yellowPages = ['Apple Store', 'Bags Galore',
                     'Bike Store',  'Donuts R Us',
                     'Eat a Lot',   'Good Food',
                     'Pasta Place', 'Pizzeria',
                     'Tiki Lounge', 'Zooper'];

With a linear search, we would have to sequentially go through each of the items until we found the search item 'Pizzeria'. In a binary search, however, the following sequence happens:

- Retrieve the middle value from the data (assume truncation to integer) --> 'Eat a Lot'.
- If the middle value is equal to 'Pizzeria', stop the search.
- If the middle value is less than 'Pizzeria':
  - Discard the lower half, including the middle value --> ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot'].
  - Repeat the process from the top, using the upper half as the starting data --> ['Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'].
- If the middle value is greater than 'Pizzeria', do the same as the previous step, but with opposite halves.

Using the process described above, the search successfully ends on the second iteration when the middle value is 'Pizzeria'.

Implement a binarySearch function that takes an array and a search item as arguments, and returns the index of the search item if found, or -1 otherwise. You may assume that the array argument will always be sorted.

Examples:

const yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
binarySearch(yellowPages, 'Pizzeria');                   // 7
binarySearch(yellowPages, 'Apple Store');                // 0

binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77);    // -1
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89);    // 7
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5);     // 1

binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter');  // -1
binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler');  // 6


PROBLEM:
- given a sorted array and a search item, return index of search item in the array, or -1 if the array does not include the search item
- Input: array and number or string as search item
- Output: number (index or -1)

Rules:
- can assume that array argument will always be sorted in ascending order
- elements and search item will always be numbers or strings?
- use binary search:
  - find element in middle of array
  - if search item is < element, search second half same way until find element
  - if search item is > element, search first half same way until find element
  
Questions:
- case sensitivity?
  
ALGORITHM:
- take array `arr` and search item `searchItem` as arguments
- set `lowestIndex` to 0
- set `highestIndex` to length of `arr` - 1

- continue while `lowestIndex` is still <= `highestIndex`
  - find middle index between `lowestIndex` and `highestIndex` - `lowestIndex` + (highestIndex - lowestIndex) / 2 rounded down
  - find the element at middle index of `arr`
  - if `searchItem` is equal to this element, return the middle index
  - otherwise, if this element is > `searchItem`
    - reassign `highestIndex` to middle index - 1
  - otherwise, if this element is < `searchItem`
    - reassign `lowestIndex` to middle index + 1

- return -1 if didn't return an index earlier

*/
function binarySearch(arr, searchItem) {
  let lowestIndex = 0;
  let highestIndex = arr.length - 1;
  
  while (lowestIndex <= highestIndex) {
    let middleIndex = lowestIndex + Math.floor((highestIndex - lowestIndex) / 2);
    let middleElement = arr[middleIndex];
    
    if (searchItem === middleElement) {
      return middleIndex;
    } else if (middleElement > searchItem) {
      highestIndex = middleIndex - 1;
    } else {
      lowestIndex = middleIndex + 1;
    }
  }
  
  return -1;
}

const yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6
