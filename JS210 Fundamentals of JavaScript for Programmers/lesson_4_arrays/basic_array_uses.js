// PROBLEM 1
function firstElementOf(arr) {
  return arr[0];
}

firstElementOf(['U', 'S', 'A']);  // returns "U"


// PROBLEM 2
function lastElementOf(arr) {
  return arr[arr.length - 1];
}

lastElementOf(['U', 'S', 'A']);  // returns "A"


// PROBLEM 3
function nthElementOf(arr, index) {
  return arr[index];
}

let digits = [4, 8, 15, 16, 23, 42];

nthElementOf(digits, 3);   // returns 16
nthElementOf(digits, 8);   // returns undefined
nthElementOf(digits, -1);  // returns undefined


// PROBLEM 5
function firstNOf(arr, count) {
  let result = [];
  
  for (let index = 0; result.length < count; index++) {
    result.push(arr[index]);
  }
  
  return result;
}

let digits = [4, 8, 15, 16, 23, 42];
firstNOf(digits, 3);    // returns [4, 8, 15]


// PROBLEM 6
function lastNOf(arr, count) {
  return arr.slice(arr.length - count, arr.length);
}

let digits = [4, 8, 15, 16, 23, 42];
lastNOf(digits, 3);    // returns [16, 23, 42]


// PROBLEM 7
function lastNOf(arr, count) {
  let index = arr.length - count;

  if (index < 0) {
    index = 0;
  }

  return arr.slice(index);
}

let digits = [4, 8, 15, 16, 23, 42];
lastNOf(digits, 9);    // returns [4, 8, 15, 16, 23, 42]


// PROBLEM 8
function endsOf(beginningArr, endingArr) {
  return [beginningArr[0], endingArr[endingArr.length - 1]];
}

endsOf([4, 8, 15], [16, 23, 42]);  // returns [4, 42]
