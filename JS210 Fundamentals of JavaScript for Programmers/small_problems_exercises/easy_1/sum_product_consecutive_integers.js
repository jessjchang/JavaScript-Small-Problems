let rlSync = require('readline-sync');

let integer = parseInt(rlSync.question('Please enter an integer greater than 0: '), 10);
let computationChoice = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');

function computeSum(num) {
  let sum = 0;

  for (let start = 1; start <= num; start++) {
    sum += start;
  }

  return sum;
}

function computeProduct(num) {
  let product = 1;

  for (let start = 1; start <= num; start++) {
    product *= start;
  }

  return product;
}

if (computationChoice === 's') {
  console.log(`The sum of the integers between 1 and ${integer} is ${computeSum(integer)}.`);
} else if (computationChoice === 'p') {
  console.log(`The product of the integers between 1 and ${integer} is ${computeProduct(integer)}.`);
}

// Further Exploration

let rlSync = require('readline-sync');

function computeSum(arr) {
  const reducer = (accumulator, element) => accumulator + element;
  let sum = arr.reduce(reducer, 0);
  return sum;
 }

function computeProduct(arr) {
  const reducer = (accumulator, element) => accumulator * element;
  let product = arr.reduce(reducer, 1);
  return product;
 }

console.log(computeSum([1, 2, 3, 4]));
console.log(computeProduct([1, 2, 3, 4]));
