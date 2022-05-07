/*
Write a function that takes any two version numbers in this format and compares them, with the result of this comparison showing whether the first is less than, equal to, or greater than the second version:

If version1 > version2, we should return 1.
If version1 < version2, we should return -1.
If version1 === version2, we should return 0.
If either version number contains characters other than digits and the . character, we should return null.

Here is an example of version number ordering:
0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37

*** UNDERSTANDING THE PROBLEM ***
- Input: two version numbers in string representation, version1 and version2
- Output: one of the numbers from 1, 0, and -1; or null for invalid inputs

Rules/Requirements:
- if any inputs contain invalid characters, return null
  - any characters other than digits and . are considered invalid
- Compare the two input versions
  - if version1 > version2, return 1
  - if version1 < version2, return -1
  - if version1 === version2, return 0
- The rules to compare two version numbers
  - start from the left most parts of the two version numbers
  - if the number part of the first version number is larger, then the first version number is larger
  - if the number part of the second version number is larger, then the first version number is smaller
  - if the number parts of both version numbers are the same, move to the next number part of the two version numbers
    - do the same comparison and decide which version number is larger
    - keep moving to the right until the result of the comparison is determined
      - if we reach the end of only one number, pad that number with a 0 part
    - if we get to the last number part of the two version numbers and they're equal,
      then the two version numbers are equal

*** EXAMPLES/TEST CASES ***
console.log(compareVersions('1', '1'));            // 0
console.log(compareVersions('1.1', '1.0'));        // 1
console.log(compareVersions('2.3.4', '2.3.5'));    // -1
console.log(compareVersions('1.a', '1'));          // null
console.log(compareVersions('.1', '1'));           // null
console.log(compareVersions('1.', '2'));           // null
console.log(compareVersions('1..0', '2.0'));       // null
console.log(compareVersions('1.0', '1.0.0'));      // 0
console.log(compareVersions('1.0.0', '1.1'));      // -1
console.log(compareVersions('1.0', '1.0.5'));      // -1

*** DATA STRUCTURES ***
- array of numbers

*** ALGORITHM ***
- return null if the inputs contain any characters other than digits and dots
- split the input numbers into parts as arrays of integers
- loop through the two version numbers' parts
  - for each step, access one part from each version number
  - if one version number runs out of parts, use 0
  - compare the two parts
    - if part1 < part2
      - return -1
    - if part1 > part2
      - return 1
    - if part1 === part2
      - we move to the next pair of parts
- when we reach the end of the loop, return 0

*/

function compareVersions(versionA, versionB) {
  let validChars = /^[0-9]+(\.[0-9]+)*$/;

  if (!validChars.test(versionA) || !validChars.test(versionB)) {
    return null;
  }

  let aParts = versionA.split('.').map(Number);
  let bParts = versionB.split('.').map(Number);
  let maxLength = Math.max(aParts.length, bParts.length);

  for (let i = 0; i < maxLength; i += 1) {
    let aValue = aParts[i] || 0;
    let bValue = bParts[i] || 0;

    if (aValue > bValue) {
      return 1;
    } else if (aValue < bValue) {
      return -1;
    }
  }

  return 0;
}

console.log(compareVersions('1', '1'));            // 0
console.log(compareVersions('1.1', '1.0'));        // 1
console.log(compareVersions('2.3.4', '2.3.5'));    // -1
console.log(compareVersions('1.a', '1'));          // null
console.log(compareVersions('.1', '1'));           // null
console.log(compareVersions('1.', '2'));           // null
console.log(compareVersions('1..0', '2.0'));       // null
console.log(compareVersions('1.0', '1.0.0'));      // 0
console.log(compareVersions('1.0.0', '1.1'));      // -1
console.log(compareVersions('1.0', '1.0.5'));      // -1
