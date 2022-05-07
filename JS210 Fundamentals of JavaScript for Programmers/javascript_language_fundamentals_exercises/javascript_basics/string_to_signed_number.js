const DIGITS = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
};

function stringToSignedInteger(str) {
  switch (str[0]) {
    case '-': return -stringToInteger(str.slice(1));
    case '+': return stringToInteger(str.slice(1));
    default: return stringToInteger(str);
  }
}

function stringToInteger(str) {
  let result = 0;

  for (let index = 0; index < str.length; index++) {
    result = (result * 10) + DIGITS[str[index]]
  }
  
  return result;
}

stringToSignedInteger('4321');      // 4321
stringToSignedInteger('-570');      // -570
stringToSignedInteger('+100');      // 100
