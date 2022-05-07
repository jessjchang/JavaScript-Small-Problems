// *** push, pop, shift, and unshift ***

// PROBLEM 1
function push(arr, value) {
  arr[arr.length] = value;
  return arr.length;
}

let count = [0, 1, 2];
push(count, 3);         // 4
count;                  // [ 0, 1, 2, 3 ]


// PROBLEM 2
function pop(arr) {
  if (arr.length === 0) {
    return undefined;
  }

  let lastElement = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return lastElement;
}

let count = [1, 2, 3];
pop(count);             // 3
count;                  // [ 1, 2 ]


// PROBLEM 3
function unshift(arr, value) {
  for (let index = arr.length; index > 0; index--) {
    arr[index] = arr[index - 1];
  }
  
  arr[0] = value;
  
  return arr.length;
}

let count = [1, 2, 3];
unshift(count, 0);      // 4
count;                  // [ 0, 1, 2, 3 ]


// PROBLEM 4
function shift(arr) {
  let value = arr[0];

  if (arr.length === 0) {
    return undefined;
  }
  
  for (let index = 0; index < arr.length - 1; index++) {
    arr[index] = arr[index + 1];
  }
  
  arr.length = arr.length - 1;
  
  return value;
}

let count = [1, 2, 3];
shift(count);           // 1
count;                  // [ 2, 3 ]


// *** indexOf and lastIndexOf ***

// PROBLEM 1
function indexOf(arr, value) {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === value) {
      return index;
    }
  }
  
  return -1;
}

indexOf([1, 2, 3, 3], 3);         // 2
indexOf([1, 2, 3], 4);            // -1


// PROBLEM 2
function lastIndexOf(arr, value) {
  for (let index = arr.length - 1; index >= 0; index--) {
    if (arr[index] === value) {
      return index;
    }
  }
  
  return -1;
}

lastIndexOf([1, 2, 3, 3], 3);     // 3
lastIndexOf([1, 2, 3], 4);        // -1


// *** slice, splice, concat, and join ***

// PROBLEM 1
function push(arr, value) {
  arr[arr.length] = value;
  return arr.length;
}

function slice(arr, startIndex, endIndex) {
  let result = [];
  
  for (let index = startIndex; index < endIndex; index++) {
    push(result, arr[index]);
  }
  
  return result;
}

slice([1, 2, 3, 4, 5], 0, 2);                      // [ 1, 2 ]
slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3);  // [ 'b', 'c' ]


// PROBLEM 2
function push(arr, value) {
  arr[arr.length] = value;
  return arr.length;
}

function unshift(arr, value) {
  for (let index = arr.length; index > 0; index--) {
    arr[index] = arr[index - 1];
  }
  
  arr[0] = value;
  
  return arr.length;
}

function shift(arr) {
  let value = arr[0];

  if (arr.length === 0) {
    return undefined;
  }
  
  for (let index = 0; index < arr.length - 1; index++) {
    arr[index] = arr[index + 1];
  }
  
  arr.length = arr.length - 1;
  
  return value;
}

function pop(arr) {
  if (arr.length === 0) {
    return undefined;
  }

  let lastElement = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return lastElement;
}

function splice(arr, startIndex, num) {
  let firstValues = [];
  let index = 0;
  
  while (index < startIndex) {
    push(firstValues, shift(arr));
    index += 1;
  }
  
  let remaining = [];
  
  while (remaining.length < num) {
    push(remaining, shift(arr));
  }
  
  while (firstValues.length > 0) {
    unshift(arr, pop(firstValues));
  }
  
  return remaining;
}

let count = [1, 2, 3, 4, 5, 6, 7, 8];
splice(count, 2, 5);                   // [ 3, 4, 5, 6, 7 ]
count;                                 // [ 1, 2, 8 ]


// PROBLEM 3
function push(arr, value) {
  arr[arr.length] = value;
  return arr.length;
}

function concat(arr1, arr2) {
  let result = [];
  
  for (let index = 0; index < arr1.length; index++) {
    push(result, arr1[index]);
  }
    
  for (let index = 0; index < arr2.length; index++) {
    push(result, arr2[index]);
  }
  
  return result;
}

concat([1, 2, 3], [4, 5, 6]);       // [ 1, 2, 3, 4, 5, 6 ]


// PROBLEM 4
function join(arr, str) {
  let result = '';
  
  for (let index = 0; index < arr.length - 1; index++) {
    result += (String(arr[index]) + str);
  }
  
  result += arr[arr.length - 1];
  
  return result;
}

join(['bri', 'tru', 'wha'], 'ck ');       // 'brick truck wha'
join([1, 2, 3], ' and ');                 // '1 and 2 and 3'
