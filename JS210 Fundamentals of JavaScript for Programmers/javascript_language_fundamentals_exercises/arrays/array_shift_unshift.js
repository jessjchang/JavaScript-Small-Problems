function shift(arr) {
  let firstElement = arr[0];
  
  if (arr.length === 0) {
    return firstElement;
  }
  
  for (let index = 0; index < arr.length - 1; index++) {
    arr[index] = arr[index + 1];
  }
  
  arr.length = arr.length - 1;
  
  return firstElement;
}

function unshift(arr, ...args) {
  let arrCopy = arr.slice();

  for (let index = 0; index < args.length; index++) {
    arr[index] = args[index];
  }
  
  arr.length = args.length;
  
  for (let index = 0; index < arrCopy.length; index++) {
    arr.push(arrCopy[index]);
  }
  
  return arr.length;
}

shift([1, 2, 3]);                // 1
shift([]);                       // undefined
shift([[1, 2, 3], 4, 5]);        // [1, 2, 3]

unshift([1, 2, 3], 5, 6);        // 5
unshift([1, 2, 3]);              // 3
unshift([4, 5], [1, 2, 3]);      // 3

const testArray = [1, 2, 3];
shift(testArray);                // 1
testArray;                       // [2, 3]
unshift(testArray, 5);           // 3
testArray;                       // [5, 2, 3]
