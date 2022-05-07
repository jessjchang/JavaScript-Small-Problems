function myReduce(array, func, initial) {
  let value = initial === undefined ? array[0] : initial;
  let index = initial === undefined ? 1 : 0;
  
  for (; index < array.length; index += 1) {
    value = func(value, array[index]);
  }
  
  return value;
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

myReduce([5, 12, 15, 1, 6], smallest);           // 1
myReduce([5, 12, 15, 1, 6], sum, 10);            // 49
