// PROBLEM 1
function radiansToDegrees(radians) {
  const halfCircleDegrees = 180;
  
  return (radians * halfCircleDegrees) / Math.PI;
}


// PROBLEM 2
let negative = -180;
console.log(Math.abs(negative)); // 180


// PROBLEM 3
console.log(Math.sqrt(16777216)); // 4096


// PROBLEM 4
console.log(Math.pow(16, 6)); // 16777216


// PROBLEM 5
let a = 50.72;
let b = 49.2;
let c = 49.86;

console.log(Math.floor(a)); // 50
console.log(Math.ceil(b)); // 50
console.log(Math.round(c)); // 50


// PROBLEM 6
function randomInteger(min, max) {
  if (min === max) {
    return min;
  } else if (min > max) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomInteger(0, 10));
console.log(randomInteger(10, 0));
console.log(randomInteger(10, 10));
