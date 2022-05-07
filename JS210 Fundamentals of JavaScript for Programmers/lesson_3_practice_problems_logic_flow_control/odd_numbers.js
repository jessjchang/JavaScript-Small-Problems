// Solution 1
function logOddNumbers(integer) {
  for (let currentNum = 1; currentNum <= integer; currentNum += 2) {
    console.log(currentNum);
  }
}

logOddNumbers(19);

// Solution 2
function logOddNumbers(integer) {
  for (let currentNum = 1; currentNum <= integer; currentNum++) {
    if (isOdd(currentNum)) {
      console.log(currentNum);
    }
  }
}

function isOdd(integer) {
  return integer % 2 === 1;
}

logOddNumbers(19);

// Further Exploration
function logOddNumbers(integer) {
  for (let currentNum = 1; currentNum <= integer; currentNum++) {
    if (currentNum % 2 === 0) {
      continue;
    } else {
      console.log(currentNum);
    }
  }
}

logOddNumbers(19);
