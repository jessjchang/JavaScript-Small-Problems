let rlSync = require('readline-sync');

const currYear = new Date().getFullYear();

let currAge = parseInt(rlSync.question('What is your age? '), 10);
let retireAge = parseInt(rlSync.question('At what age would you like to retire? '), 10);

let yearsLeft = retireAge - currAge;

console.log(`It's ${currYear}. You will retire in ${currYear + yearsLeft}.`);
console.log(`You have only ${yearsLeft} years of work to go!`);
