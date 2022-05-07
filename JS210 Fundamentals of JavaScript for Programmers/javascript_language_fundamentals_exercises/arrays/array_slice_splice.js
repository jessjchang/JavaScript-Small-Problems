function slice(array, begin, end) {
  if (begin > array.length) {
    begin = array.length;
  }

  if (end > array.length) {
    end = array.length;
  }

  let result = [];
  
  for (let index = begin; index < end; index++) {
    result.push(array[index]);
  }

  return result;
}

slice([1, 2, 3], 1, 2);               // [2]
slice([1, 2, 3], 2, 0);               // []
slice([1, 2, 3], 5, 1);               // []
slice([1, 2, 3], 0, 5);               // [1, 2, 3]

const arr1 = [1, 2, 3];
slice(arr1, 1, 3);                     // [2, 3]
arr1;                                  // [1, 2, 3]

function splice(array, start, deleteCount, ...args) {
  if (start > array.length) {
    start = array.length;
  }

  if (deleteCount > array.length - start) {
    deleteCount = array.length - start;
  }

  let originalLength = array.length
  let remaining = createRemainingArray(array, start, deleteCount)
  let deleted = createDeletedArray(array, start, deleteCount);
  array.length = originalLength - remaining.length - deleteCount;

  if (args.length === 0) {
    for (let index = 0; index < remaining.length; index++) {
      array.push(remaining[index]);
    }
  } else {
    for (let index = 0; index < args.length; index++) {
      array.push(args[index]);
    }

    for (let index = 0; index < remaining.length; index++) {
      array.push(remaining[index]);
    }
  }

  return deleted;
}

function createRemainingArray(array, start, deleteCount) {
  let remaining = [];

  for (let index = start + deleteCount; index < array.length; index++) {
    remaining.push(array[index]);
  }

  return remaining;
}

function createDeletedArray(array, start, deleteCount) {
  let deleted = [];

  for (let index = start; deleted.length < deleteCount; index++) {
    deleted.push(array[index]);
  }

  return deleted;
}

splice([1, 2, 3], 1, 2);              // [2, 3]
splice([1, 2, 3], 1, 3);              // [2, 3]
splice([1, 2, 3], 1, 0);              // []
splice([1, 2, 3], 0, 1);              // [1]
splice([1, 2, 3], 1, 0, 'a');         // []

const arr2 = [1, 2, 3];
splice(arr2, 1, 1, 'two');             // [2]
arr2;                                  // [1, "two", 3]

const arr3 = [1, 2, 3];
splice(arr3, 1, 2, 'two', 'three');    // [2, 3]
arr3;                                  // [1, "two", "three"]

const arr4 = [1, 2, 3];
splice(arr4, 1, 0);                    // []
splice(arr4, 1, 0, 'a');               // []
arr4;                                  // [1, "a", 2, 3]

const arr5 = [1, 2, 3];
splice(arr5, 0, 0, 'a');               // []
arr5;                                  // ["a", 1, 2, 3]
