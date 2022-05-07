// PROBLEM 1
function lastInArray(arr) {
  return arr[arr.length - 1];
}

console.log(lastInArray([1, 2, 3])); // 3


// PROBLEM 2
function rollCall(arr) {
  for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
  }
}

rollCall(['Jim', 'Jane', 'John']);
// Jim
// Jane
// John


// PROBLEM 3
function reverse(arr) {
  let result = [];
  
  for (let index = arr.length - 1; index >= 0; index--) {
    result.push(arr[index]);
  }
  
  return result;
}

console.log(reverse([1, 2, 3])); // [ 3, 2, 1 ]


// PROBLEM 4
function stringArray(arr) {
  let result = '';
  
  for (let index = 0; index < arr.length; index++) {
    result += String(arr[index]);
  }
  
  return result;
}

console.log(stringArray([1, 'a', 4])); // 1a4
