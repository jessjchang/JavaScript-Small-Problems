function stringy(length) {
  let result = ''
  
  for (let index = 0; result.length < length; index++) {
    if (index % 2 === 0) {
      result += '1';
    } else {
      result += '0';
    }
  }
  
  return result;
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"