/*
A triangle is classified as follows:

Right: One angle is a right angle (exactly 90 degrees).
Acute: All three angles are less than 90 degrees.
Obtuse: One angle is greater than 90 degrees.

To be a valid triangle, the sum of the angles must be exactly 180 degrees, and every angle must be greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the three angles of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'.

You may assume that all angles have integer values, so you do not have to worry about floating point errors. You may also assume that the arguments are in degrees.

Examples:
triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"


PROBLEM:
- given three integers representing angles of triangle, determine triangle type
- Input: 3 numbers - integers, representing angles of a triangle
- Output: string, representing triangle type

Rules:
- all given arguments will be integer values
- arguments will be provided in degrees
- triangle types:
  - Right: One angle is a right angle (exactly 90 degrees).
  - Acute: All three angles are less than 90 degrees.
  - Obtuse: One angle is greater than 90 degrees.
- invalid triangle:
  - sum of angles does not equal 180
  - at least one angle is <= 0 degrees
  
ALGORITHM:
- takes 3 numbers `angle1`, `angle2`, and `angle3` as arguments
- determine if triangle is invalid - `invalidTriangle` helper function
  - return 'invalid' if so
- determine if triangle is right - `rightTriangle` helper function
  - return 'right' if so
- determine if triangle is obtuse - `obtuseTriangle` helper function
  - return 'obtuse' if so
- otherwise
  - return 'acute'

`invalidTriangle` helper function:
- takes 3 numbers `angle1`, `angle2`, and `angle3` as arguments
- find sum of 3 arguments, and determine if not equal to 180
- find smallest of the 3 arguments, and if it is <= 0
- if either condition is true, return true, otherwise return false

`rightTriangle` helper function:
- takes 3 numbers `angle1`, `angle2`, and `angle3` as arguments
- find largest angle
- if largest angle is equal to 90, return true, otherwise return false

`obtuseTriangle` helper function:
- takes 3 numbers `angle1`, `angle2`, and `angle3` as arguments
- find largest angle
- if largest angle is > 90, return true, otherwise return false

*/

function triangle(angle1, angle2, angle3) {
  if (invalidTriangle(angle1, angle2, angle3)) {
    return 'invalid';
  } else if (rightTriangle(angle1, angle2, angle3)) {
    return 'right';
  } else if (obtuseTriangle(angle1, angle2, angle3)) {
    return 'obtuse';
  } else {
    return 'acute';
  }
}

function invalidTriangle(angle1, angle2, angle3) {
  let invalidSum = angle1 + angle2 + angle3 !== 180;
  let invalidAngle = Math.min(angle1, angle2, angle3) <= 0;
  return invalidSum || invalidAngle;
}

function rightTriangle(angle1, angle2, angle3) {
  let largestAngle = Math.max(angle1, angle2, angle3);
  return largestAngle === 90;
}

function obtuseTriangle(angle1, angle2, angle3) {
  let largestAngle = Math.max(angle1, angle2, angle3);
  return largestAngle > 90;
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
