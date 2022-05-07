function missing(arr) {
  let result = [];
  
  for (let num = arr[0]; num < arr[arr.length - 1]; num++) {
    if (!arr.includes(num)) {
      result.push(num);
    }
  }
  
  return result;
}

missing([-3, -2, 1, 5]);                  // [-1, 0, 2, 3, 4]
missing([1, 2, 3, 4]);                    // []
missing([1, 5]);                          // [2, 3, 4]
missing([6]);                             // []
