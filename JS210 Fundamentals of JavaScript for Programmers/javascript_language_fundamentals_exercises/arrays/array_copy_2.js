// OPTION 1
function copyArray(arr) {
  let result = [];

  for (let index = 0; index < arr.length; index++) {
    result.push(arr[index]);
  }

  return result;
}

let myArray = [1, 2, 3, 4];
const myOtherArray = copyArray(myArray);

myArray.pop();
console.log(myOtherArray); // [1, 2, 3, 4]

myArray = [1, 2];
console.log(myOtherArray); // [1, 2, 3, 4]


// OPTION 2
let myArray = [1, 2, 3, 4];
const myOtherArray = myArray.slice();

myArray.pop();
console.log(myOtherArray); // [1, 2, 3, 4]

myArray = [1, 2];
console.log(myOtherArray); // [1, 2, 3, 4]
