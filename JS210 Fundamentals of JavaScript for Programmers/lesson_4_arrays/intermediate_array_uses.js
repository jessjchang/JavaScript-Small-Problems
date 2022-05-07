// PROBLEM 1
function oddElementsOf(arr) {
  let result = [];
  
  for (let index = 1; index < arr.length; index += 2) {
    result.push(arr[index]);
  }
  
  return result;
}

let digits = [4, 8, 15, 16, 23, 42];

oddElementsOf(digits);    // returns [8, 16, 42]


// PROBLEM 2
function mirroredArray(arr) {
  let reversedArr = arr.slice(0).reverse();
  return arr.concat(reversedArr);
}

let digits = [4, 8, 15, 16, 23, 42];

mirroredArray(digits);    // returns [4, 8, 15, 16, 23, 42, 42, 23, 16, 15, 8, 4]


// PROBLEM 3
function sortDescending(arr) {
  return arr.slice().sort((a, b) => b - a);
}

let array = [23, 4, 16, 42, 8, 15];
let result = sortDescending(array);  // returns [42, 23, 16, 15, 8, 4]
console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
console.log(array);                  // logs    [23, 4, 16, 42, 8, 15]


// PROBLEM 4
function matrixSums(arr) {
  let result = [];
  
  for (let index = 0; index < arr.length; index++) {
    let sum = arr[index].reduce((accumulator, currVal) => accumulator + currVal);
    result.push(sum);
  }
  
  return result;
}

matrixSums([[2, 8, 5], [12, 48, 0], [12]]);  // returns [15, 60, 12]


// PROBLEM 5
function uniqueElements(arr) {
  let result = [];
  
  for (let index = 0; index < arr.length; index++) {
    if (!result.includes(arr[index])) {
      result.push(arr[index]);
    }
  }
  
  return result;
}

uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]);  // returns [1, 2, 4, 3, 5]
