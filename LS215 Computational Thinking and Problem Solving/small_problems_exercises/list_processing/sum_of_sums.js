function sumOfSums(arr) {
  let subsequences = arr.map((el, index) => arr.slice(0, index + 1));
  
  return subsequences.reduce((total, subarr) => {
    let subarrTotal = subarr.reduce((acc, val) => acc + val);
    return total + subarrTotal;
  }, 0);
}

sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35
