// PROBLEM 1
let firstName = 'Jess';
let lastName = 'C';
let fullName = firstName + ' ' + lastName;
console.log(fullName); // 'Jess C'

// PROBLEM 2
let firstName = 'Jess';
let lastName = 'C';
console.log(firstName.concat(lastName)); // 'JessC'

// PROBLEM 3
let firstName = 'Jess';
let lastName = 'C';
let fullName = firstName + ' ' + lastName;
console.log(fullName.split(' ')); // [ 'Jess', 'C' ]

// PROBLEM 4
let language = 'JavaScript';
let idx = language.indexOf('S');
console.log(idx); // 4

// PROBLEM 5
let language = 'JavaScript';
let idx = language.indexOf('S');
let charCode = language.charCodeAt(idx);
console.log(charCode); // 83

// PROBLEM 6
let language = 'JavaScript';
let idx = language.indexOf('S');
let charCode = language.charCodeAt(idx);
console.log(String.fromCharCode(charCode)); // 'S'

// PROBLEM 7
let language = 'JavaScript';
console.log(language.lastIndexOf('a')); // 3

// PROBLEM 8
let a = 'a';
let b = 'b';
console.log(a > b); // false
b = 'B';
console.log(a > b); // true

// PROBLEM 9
let language = 'JavaScript';
let aIndex = language.indexOf('a');
let vIndex = language.indexOf('v');
console.log(language.substr(aIndex, 4)); // 'avaS'
console.log(language.substr(vIndex, 4)); // 'vaSc'

// PROBLEM 10
let language = 'JavaScript';
let aIndex = language.indexOf('a');
let vIndex = language.indexOf('v');
console.log(language.substring(aIndex, 4)); // 'ava'
console.log(language.substring(vIndex, 4)); // 'va'

// PROBLEM 11
let fact1 = 'JavaScript is fun';
let fact2 = 'Kids like it too';
let compoundSentence = fact1 + ' and ' + fact2.toLowerCase();
console.log(compoundSentence); // 'JavaScript is fun and kids like it too'

// PROBLEM 12
let fact1 = 'JavaScript is fun';
let fact2 = 'Kids like it too';
console.log(fact1[0]); // 'J'
console.log(fact2[0]); // 'K'

// PROBLEM 13
let pi = 22 / 7;
pi = pi.toString();
console.log(pi.lastIndexOf('14')); // 14

// PROBLEM 14
let boxNumber = 356.toString(); // SyntaxError
console.log(boxNumber);

let boxNumber = 356..toString(); // '356'
console.log(boxNumber);

let boxNumber = (356).toString(); // '356'
console.log(boxNumber);

// PROBLEM 15
let boxNumber = (356).toString();
console.log(typeof boxNumber); // 'string'
boxNumber = parseInt(boxNumber, 10); // 356
console.log(typeof boxNumber); // 'number'
boxNumber = String(boxNumber); // '356'
console.log(typeof boxNumber); // 'string'

// PROBLEM 16
let rlSync = require('readline-sync');

let name = rlSync.question('What is your name? ');
if (name.endsWith('!')) {
  name = name.slice(0, name.length - 1).toUpperCase();
  console.log(`HELLO ${name}. WHY ARE WE SCREAMING?`)
} else {
  console.log(`Hello ${name}.`)
}
