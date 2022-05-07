let rlSync = require('readline-sync');
const password = 'password';

let guessCount = 0;
let guess;

do {
  guess = rlSync.question('What is the password: ');
  guessCount += 1;
} while (guess !== password && guessCount < 3);

if (guess === password) {
  console.log('You have successfully logged in.');
} else {
  console.log('You have been denied access.');
}
