const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function signedIntegerToString(num) {
  if (num < 0) {
    return '-' + integerToString(-num);
  } else if (num > 0) {
    return '+' + integerToString(num);
  } else {
    return integerToString(num);
  }
}

function integerToString(num) {
  let result = '';
  
  do {
    let currDigit = num % 10;
    result = DIGITS[currDigit] + result;
    num = (num - currDigit) / 10;
  } while (num !== 0);
  
  return result;
}

signedIntegerToString(4321);      // "+4321"
signedIntegerToString(-123);      // "-123"
signedIntegerToString(0);         // "0"
