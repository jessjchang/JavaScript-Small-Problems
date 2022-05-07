const readlineSync = require('readline-sync');

let phrase = readlineSync.question('Please enter a phrase: ');

console.log(`There are ${phrase.length} characters in "${phrase}".`);

// ignore spaces
const readlineSync = require('readline-sync');

let phrase = readlineSync.question('Please enter a phrase: ');
let noSpaces = phrase.replace(/\W/g, '');

console.log(`There are ${noSpaces.length} characters (spaces not included) in "${phrase}".`);

// only alphabetic characters
const readlineSync = require('readline-sync');

let phrase = readlineSync.question('Please enter a phrase: ');
let alphabetPhrase = phrase.replace(/[^a-z]/ig, '');

console.log(`There are ${alphabetPhrase.length} alphabetic characters in "${phrase}".`);

