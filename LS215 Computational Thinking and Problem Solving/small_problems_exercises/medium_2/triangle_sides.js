/*
A triangle is classified as follows:

Equilateral: All three sides are of equal length.
Isosceles: Two sides are of equal length, while the third is different.
Scalene: All three sides are of different lengths.

To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the lengths of the three sides of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

Examples:
triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"


PROBLEM:
- given 3 numbers representing the lengths of three sides of a triangle, return string 'equilateral', 'isosceles', 'scalene', or 'invalid' depending on criteria for each triangle
- Input: 3 numbers (doesn't have to be integers) - lengths of three sides of triangle
- Output: string - representing type of triangle

Rules:
- Triangle types:
  - equilateral: All three sides are of equal length.
  - isosceles: Two sides are of equal length, while the third is different.
  - scalene: All three sides are of different lengths.
- Invalid triangle:
  - sum of lengths of 2 shortest sides <= length of longest side
  - at least one side has length <= 0
- side length can be floating point number

EXAMPLES:
triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, -1, 1);       // "invalid"
triangle(3, 1, 1);        // "invalid"


ALGORITHM:
- takes 3 numbers (`side1`, `side2`, `side3`) as arguments
- put arguments into an array - `sidesArray` (can also use `arguments` object   // let sidesArray = Array.prototype.slice.call(arguments);)
- sort `sidesArray` in ascending numerical order
- determine if triangle is invalid - `invalidTriangle` helper function
  - return 'invalid' if so
- determine if triangle is equilateral - `equilateralTriangle` helper function
  - return 'equilateral' if so
- determine if triangle is isosceles - `isoscelesTriangle` helper function
  - return 'isosceles' if so
- otherwise
  - return 'scalene'

`invalidTriangle` helper function:
- takes array of 3 numbers as argument
- check if any of the numbers are <= 0 (`some` method)
- check if `sidesArray[0]` + `sidesArray[1]` is <= `sidesArray[2]`
- if either of the above conditions is true, return `true`, otherwise return `false`

`equilateralTriangle` helper function:
- takes array of 3 numbers as argument
- if all three numbers are equivalent, return `true`, otherwise return `false`

`isoscelesTriangle` helper function:
- takes array of 3 numbers as argument
- if either of the two numbers of array are equal, return `true`, otherwise return `false`
*/

function triangle(side1, side2, side3) {
  let sidesArray = [side1, side2, side3];
  sidesArray.sort((a, b) => a - b);
  
  if (invalidTriangle(sidesArray)) {
    return 'invalid';
  } else if (equilateralTriangle(sidesArray)) {
    return 'equilateral';
  } else if (isoscelesTriangle(sidesArray)) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}

function invalidTriangle(sidesArray) {
  let negativeOrZero = sidesArray.some(side => side <= 0);
  let invalidSum = sidesArray[0] + sidesArray[1] <= sidesArray[2];
  
  return negativeOrZero || invalidSum;
}

function equilateralTriangle(sidesArray) {
  return sidesArray.every(side => side === sidesArray[0]);
}

function isoscelesTriangle(sidesArray) {
  return sidesArray[0] === sidesArray[1] ||
         sidesArray[0] === sidesArray[2] ||
         sidesArray[1] === sidesArray[2];
}

console.log(triangle(3, 3, 3) === "equilateral");        // "equilateral"
console.log(triangle(3, 3, 1.5) === "isosceles");      // "isosceles"
console.log(triangle(3, 4, 5) === "scalene");        // "scalene"
console.log(triangle(0, 3, 3) === "invalid");        // "invalid"
console.log(triangle(3, -1, 1) === "invalid");       // "invalid"
console.log(triangle(3, 1, 1) === "invalid");        // "invalid"
