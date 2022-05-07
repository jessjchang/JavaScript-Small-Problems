function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  
  let array2Copy = array2.slice();
  
  for (let index = 0; index < array1.length; index++) {
    if (array2Copy.includes(array1[index])) {
      let array2Index = array2Copy.indexOf(array1[index])
      array2Copy.splice(array2Index, 1);
    } else {
      return false;
    }
  }
  
  return true;
}

areArraysEqual([1, 2, 3], [1, 2, 3]);                  // true
areArraysEqual([1, 2, 3], [3, 2, 1]);                  // true
areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']);      // true
areArraysEqual(['1', 2, 3], [1, 2, 3]);                // false
areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]);            // true
areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]);            // false
areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]);            // false
areArraysEqual([1, 1, 2], [1, 2, 2]);                  // false
areArraysEqual([1, 1, 1], [1, 1]);                     // false
areArraysEqual([1, 1], [1, 1]);                        // true
