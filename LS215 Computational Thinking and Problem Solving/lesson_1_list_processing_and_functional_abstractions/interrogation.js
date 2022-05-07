function myOwnEvery(array, func) {
  for (let index = 0; index < array.length; index += 1) {
    if (!func(array[index])) {
      return false;
    }
  }
  
  return true;
}

let isAString = value => typeof value === 'string';
myOwnEvery(['a', 'a234', '1abc'], isAString);       // true
