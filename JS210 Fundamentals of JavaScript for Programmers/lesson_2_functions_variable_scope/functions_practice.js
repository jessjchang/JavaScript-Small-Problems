// PROBLEM 1
function average(a, b, c) {
  return (a + b + c) / 3;
}

console.log(average(1, 2, 3)); // 2


// PROBLEM 2
function average(a, b, c) {
  return sum(a, b, c) / 3;
}

function sum(a, b, c) {
  return a + b + c;
}

console.log(average(1, 2, 3)); // 2


// PROBLEM 3
function average(arr) {
  let total = 0;
  for (let index = 0; index < arr.length; index += 1) {
    total += arr[index];
  }

  return total / arr.length;
}

console.log(average([1, 2, 3, 4, 5])); // 3


// PROBLEM 4
function average(arr) {
  return sum(arr) / arr.length;
}

function sum(arr) {
  let total = 0;
  for (let index = 0; index < arr.length; index += 1) {
    total += arr[index];
  }
  
  return total;
}

console.log(average([1, 2, 3, 4, 5])); // 3


// PROBLEM 5
function average(arr) {
  return sum(arr) / arr.length;
}

function sum(arr) {
  let total = 0;
  for (let index = 0; index < arr.length; index += 1) {
    total += arr[index];
  }
  
  return total;
}

let temperatures = [70, 80, 90, 95, 100];
console.log(average(temperatures)); // 87
