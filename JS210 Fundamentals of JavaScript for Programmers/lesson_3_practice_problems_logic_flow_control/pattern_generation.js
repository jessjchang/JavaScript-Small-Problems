function generatePattern(nStars) {
  for (let rowNumber = 1; rowNumber <= nStars; rowNumber++) {
    let result = '';

    for (let currentNumber = 1; currentNumber <= rowNumber; currentNumber++) {
      result += String(currentNumber);
    }

    let remainingNumber = nStars - rowNumber;

    while (remainingNumber > 0) {
      result += '*';
      remainingNumber -= 1;
    }

    console.log(result);
  }
}

generatePattern(7);

// console output
// 1******
// 12*****
// 123****
// 1234***
// 12345**
// 123456*
// 1234567

// Further Exploration

function generatePattern(nStars) {
  let lastRow = '';

  for (let currentNumber = 1; currentNumber <= nStars; currentNumber++) {
    lastRow += String(currentNumber);
  }

  let rectangleWidth = lastRow.length;

  for (let rowNumber = 1; rowNumber <= nStars; rowNumber++) {
    let result = '';

    for (let currentNumber = 1; currentNumber <= rowNumber; currentNumber++) {
      result += String(currentNumber);
    }

    let remainingNumber = rectangleWidth - result.length;

    while (remainingNumber > 0) {
      result += '*';
      remainingNumber -= 1;
    }

    console.log(result);
  }
}

generatePattern(20);

// console output
// 1******************************
// 12*****************************
// 123****************************
// 1234***************************
// 12345**************************
// 123456*************************
// 1234567************************
// 12345678***********************
// 123456789**********************
// 12345678910********************
// 1234567891011******************
// 123456789101112****************
// 12345678910111213**************
// 1234567891011121314************
// 123456789101112131415**********
// 12345678910111213141516********
// 1234567891011121314151617******
// 123456789101112131415161718****
// 12345678910111213141516171819**
// 1234567891011121314151617181920