let rlSync = require('readline-sync');

let score1 = Number(rlSync.question('Enter score 1: '));
let score2 = Number(rlSync.question('Enter score 2: '));
let score3 = Number(rlSync.question('Enter score 3: '));

let average = (score1 + score2 + score3) / 3;

let letterGrade;
if (average >= 90) {
  letterGrade = 'A';
} else if (average >= 70) {
  letterGrade = 'B';
} else if (average >= 50) {
  letterGrade = 'C';
} else {
  letterGrade = 'F';
}

console.log(`Based on the average of your 3 scores your letter grade is "${letterGrade}".`);


// Further Exploration

function calculateAverage(numScores) {
  let sum = 0;

  for (let scoreNumber = 1; scoreNumber <= numScores; scoreNumber++) {
    let score = Number(rlSync.question(`Enter score ${scoreNumber}: `));
    sum += score;
  }

  let average = sum / numScores;
  return average;
}

let numScores = Number(rlSync.question('How many scores would you like to enter? '));

let average = calculateAverage(numScores);

let letterGrade;
if (average >= 90) {
  letterGrade = 'A';
} else if (average >= 70) {
  letterGrade = 'B';
} else if (average >= 50) {
  letterGrade = 'C';
} else {
  letterGrade = 'F';
}

console.log(`Based on the average of your 3 scores your letter grade is "${letterGrade}".`);
