function runningTotal(arr) {
  if (arr.length <= 0) {
    return [];
  }

  let result = [arr[0]];
  
  for (let index = 1; index < arr.length; index++) {
    result.push(result[index - 1] + arr[index]);
  }
  
  return result;
}

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []

// Further Exploration
function runningTotal(arr) {
  let sum = 0;
  return arr.map(element => sum += element);
}
