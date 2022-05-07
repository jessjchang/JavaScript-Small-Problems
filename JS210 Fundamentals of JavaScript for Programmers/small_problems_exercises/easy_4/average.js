function showMultiplicativeAverage(arr) {
  let average = arr.reduce((acc, currVal) => acc * currVal, 1) / arr.length;
  
  return average.toFixed(3);
}

showMultiplicativeAverage([3, 5]);                   // "7.500"
showMultiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"
