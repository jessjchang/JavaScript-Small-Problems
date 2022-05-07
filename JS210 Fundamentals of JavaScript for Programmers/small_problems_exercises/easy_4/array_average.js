function average(arr) {
  let average = arr.reduce((acc, currVal) => acc + currVal, 0) / arr.length;
  
  return Math.floor(average);
}

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40
