for(let num = 1; num <= 99; num += 2) {
  console.log(num);
}

// Further Exploration

function logOddNumbers(start, end) {
  let num;

  if (isOdd(start)) {
    num = start;
  } else {
    num = start + 1;
  }

  while (num <= end) {
    console.log(num);
    num += 2;
  }
}

function isOdd(num) {
  return num % 2 === 1;
}

logOddNumbers(2, 8)
logOddNumbers(3, 11)
