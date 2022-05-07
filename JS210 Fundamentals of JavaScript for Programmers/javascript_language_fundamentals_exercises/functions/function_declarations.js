logValue(); // Hello, world!

function logValue() {
  console.log('Hello, world!');
}

// FURTHER EXPLORATION

var logValue = 'foo';

function logValue() {
  console.log('Hello, world!');
}

console.log(typeof logValue); // string

// Hoisted Equivalent

function logValue() {
  console.log('Hello, world!');
}

var logValue;

logValue = 'foo';

console.log(typeof logValue);