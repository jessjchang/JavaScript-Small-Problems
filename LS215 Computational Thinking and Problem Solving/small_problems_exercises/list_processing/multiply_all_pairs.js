function multiplyAllPairs(arr1, arr2) {
  let products = [];

  arr1.forEach(el1 => {
    arr2.forEach(el2 => {
      products.push(el1 * el2)
    });
  });
  
  return products.sort((el1, el2) => el1 - el2);
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]
