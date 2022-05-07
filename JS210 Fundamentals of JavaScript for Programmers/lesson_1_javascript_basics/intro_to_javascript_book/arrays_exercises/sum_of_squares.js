function sumOfSquares(arr) {
  return arr.reduce((accumulator, num) => accumulator + (num * num), 0);
}

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83
