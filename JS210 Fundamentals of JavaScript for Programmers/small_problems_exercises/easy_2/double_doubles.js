function twice(num) {
  if (isDoubleNumber(num)) {
    return num;
  } else {
    return num * 2;
  }
}

function isDoubleNumber(num) {
  let numString = String(num);
  
  if (numString.length % 2 === 1) {
    return false;
  }

  let firstHalf = createHalf(numString, 0, numString.length / 2);
  
  let secondHalf = createHalf(numString, numString.length / 2, numString.length)
  
  return firstHalf === secondHalf;
}

function createHalf(string, startIndex, endIndex) {
  let result = '';
  
  for (let index = startIndex; index < endIndex; index++) {
    result += string[index];
  }
  
  return result;
}

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676


// Alternate

function twice(num) {
  if (isDoubleNumber(num)) {
    return num;
  } else {
    return num * 2;
  }
}

function isDoubleNumber(num) {
  let numString = String(num);
  
  let firstHalf = numString.slice(0, numString.length / 2);
  
  let secondHalf = numString.slice(numString.length / 2, numString.length);
  
  return firstHalf === secondHalf;
}

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676
