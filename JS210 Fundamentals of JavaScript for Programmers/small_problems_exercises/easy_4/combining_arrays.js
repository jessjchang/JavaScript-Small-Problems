function union(arr1, arr2) {
  let result = [];
  
  arr1.forEach(el => {
    if (!result.includes(el)) {
      result.push(el);
    }
  });
  
  arr2.forEach(el => {
    if (!result.includes(el)) {
      result.push(el);
    }
  });
  
  return result;
}

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]
