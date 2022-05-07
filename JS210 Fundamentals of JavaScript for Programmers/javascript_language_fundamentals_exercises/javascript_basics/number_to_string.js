const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(num) {
  let result = '';
  
  do {
    let currDigit = num % 10;
    result = DIGITS[currDigit] + result;
    num = (num - currDigit) / 10;
  } while (num !== 0);
  
  return result;
}

integerToString(4321);      // "4321"
integerToString(0);         // "0"
integerToString(5000);      // "5000"
