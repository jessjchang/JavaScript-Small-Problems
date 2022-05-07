// EXERCISE #6

// function oddLengths(arr) {
//   let lengths = arr.map((str) => str.length);
//   let result = lengths.filter((length) => length % 2 === 1);
//   return result;
// }

// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// console.log(oddLengths(arr)); // => [1, 5, 3]

// EXERCISE #8

function oddLengths(arr) {
  return arr.reduce((filteredArray, str) => {
    let length = str.length;
    if (length % 2 === 1) {
      filteredArray.push(length);
    }
    return filteredArray;
  }, []);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]