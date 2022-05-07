rlSync = require('readline-sync');

let numbers = [];

numbers.push(rlSync.question('Enter the 1st number: '));
numbers.push(rlSync.question('Enter the 2nd number: '));
numbers.push(rlSync.question('Enter the 3rd number: '));
numbers.push(rlSync.question('Enter the 4th number: '));
numbers.push(rlSync.question('Enter the 5th number: '));
let lastNum = rlSync.question('Enter the last number: ');

if (numbers.includes(lastNum)) {
  console.log(`The number ${lastNum} appears in [${numbers.join(', ')}].`)
} else {
  console.log(`The number ${lastNum} does not appear in [${numbers.join(', ')}].`)
}

// Further Exploration
function isIncluded(arr, val) {
  const greater = (element) => element > val;

  return arr.some(greater);
}

console.log(isIncluded([15, 20, 30], 25)); // true
console.log(isIncluded([15, 20, 22], 25)); // false
