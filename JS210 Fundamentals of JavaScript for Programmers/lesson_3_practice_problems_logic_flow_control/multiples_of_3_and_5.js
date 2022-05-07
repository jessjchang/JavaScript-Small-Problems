function multiplesOfThreeAndFive() {
  for (let num = 1; num <= 100; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
      console.log(String(num) + '!');
    } else if (num % 3 === 0 || num % 5 === 0) {
      console.log(String(num));
    }
  }
}

multiplesOfThreeAndFive();

// Further Exploration

function multiplesOfThreeAndFive(firstNum, lastNum) {
  for (let num = firstNum; num <= lastNum; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
      console.log(String(num) + '!');
    } else if (num % 3 === 0 || num % 5 === 0) {
      console.log(String(num));
    }
  }
}

multiplesOfThreeAndFive(1, 17);