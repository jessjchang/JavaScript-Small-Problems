function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let divisor = 2; divisor < num; divisor++) {
    if (num % divisor === 0) {
      return false;
    }
  }

  return true;
}

function checkGoldbach(expectedSum) {
  if (expectedSum % 2 === 1 || expectedSum < 4) {
    console.log(null);
    return;
  }

  for (let firstNum = 2; firstNum <= expectedSum / 2; firstNum++) {
    let secondNum = expectedSum - firstNum;

    if (isPrime(firstNum) && isPrime(secondNum)) {
      console.log(`${firstNum} ${secondNum}`);
    }
  }
}

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53
