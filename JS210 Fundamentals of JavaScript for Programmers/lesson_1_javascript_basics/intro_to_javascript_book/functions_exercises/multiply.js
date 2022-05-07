function multiply(firstNum, secondNum) {
  return firstNum * secondNum;
}

function getNumber(prompt) {
  let rlSync = require('readline-sync');
  let number = parseFloat(rlSync.question(prompt));
  return number;
}

let firstNumber = getNumber("Enter the first number: ");
let secondNumber = getNumber("Enter the second number: ");
console.log(`${firstNumber} * ${secondNumber} = ${multiply(firstNumber, secondNumber)}`);
