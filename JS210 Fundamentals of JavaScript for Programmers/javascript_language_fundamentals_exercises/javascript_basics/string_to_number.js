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

function stringToInteger(str) {
  let result = 0;

  for (let index = 0; index < str.length; index++) {
    result = (result * 10) + DIGITS[str[index]]
  }
  
  return result;
}

stringToInteger('4321');      // 4321
stringToInteger('570');       // 570
