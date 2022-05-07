// EXERCISE #2

// let myArray = [1, 3, 6, 11, 4, 2,
//                4, 9, 17, 16, 0];

// myArray.forEach(function(num) {
//   if (num % 2 === 0) {
//     console.log(num);
//   }
// });

// EXERCISE #3

// let myArray = [
//   [1, 3, 6, 11],
//   [4, 2, 4],
//   [9, 17, 16, 0],
// ];

// myArray.forEach(function(arr) {
//   arr.forEach(function(num) {
//     if (num % 2 === 0) {
//       console.log(num);
//     }
//   });
// });

// EXERCISE #4

let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let newArray = myArray.map(function(num) {
  if (num % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
});

console.log(newArray);
