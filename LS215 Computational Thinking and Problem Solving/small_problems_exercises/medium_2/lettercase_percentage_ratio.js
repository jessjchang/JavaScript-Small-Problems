/*
Write a function that takes a string and returns an object containing the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither

You may assume that the string will always contain at least one character.

Examples:
letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }


PROBLEM:
- Objective: given a string, return an object containing percentage of chars in given string that are lowercase letters, percentage of chars that are uppercase letters, and percentage of chars that are not alphabetic letters
- Input: string - can contain letters, whitespace, special characters
- Output: object - keys will be 'lowercase', 'uppercase', and 'neither', and values will be corresponding percentages

Rules:
- can assume string will always contain at least one character, i.e. won't have to worry about empty string (or dividing by 0)
- percentages are rounded to 2 decimal places
- percentages are set as "strings"

Questions:
- for the percentages, are we rounding to nearest precision, or just truncating to 2 decimal places?


EXAMPLES:
letterPercentages('a');
// { lowercase: "100.00", uppercase: "0.00", neither: "0.00" }

letterPercentages(' ');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

letterPercentages('abC');
// { lowercase: "66.67", uppercase: "33.33", neither: "0.00" }

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }


ALGORITHM:
- take string `str` as argument
- initialize an empty object to store final `percentages`
- initialize `strLength` variable to the length of `str`

- find array of all characters in `str` that are lowercase alphabetic letters (use regex) - set this to `lowercaseChars` or set `lowercaseChars` to empty array if the match returned `null`
  - find the length of this array
  - divide this by `strLength`, multiply by 100, and round to 2 decimal places
  - set `lowercase` key in `percentages` to this value

- find array of all characters in `str` that are uppercase alphabetic letters (use regex) - set this to `uppercaseChars` or set `uppercaseChars` to empty array if the match returned `null`
  - find the size of this array
  - divide this by `strLength`, multiply by 100, and round to 2 decimal places
  - set `uppercase` key in `percentages` to this value
  
- find array of all characters in `str` that are not alphabetic letters (use regex) - set this to `neitherChars` or set `neitherChars` to empty array if the match returned `null`
  - find the size of this array
  - divide this by `strLength`, multiply by 100, and round to 2 decimal places
  - set `neither` key in `percentages` to this value
  
- return `percentages`
*/

function letterPercentages(str) {
  let percentages = {};
  let strLength = str.length;
  
  let lowercaseChars = str.match(/[a-z]/g) || [];
  let uppercaseChars = str.match(/[A-Z]/g) || [];
  let neitherChars = str.match(/[^a-z]/ig) || [];
  
  percentages.lowercase = ((lowercaseChars.length / strLength) * 100).toFixed(2);
  percentages.uppercase = ((uppercaseChars.length / strLength) * 100).toFixed(2);
  percentages.neither = ((neitherChars.length / strLength) * 100).toFixed(2);
  
  return percentages;
}

console.log(letterPercentages('a'));
// { lowercase: "100.00", uppercase: "0.00", neither: "0.00" }

console.log(letterPercentages(' '));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

console.log(letterPercentages('abC'));
// { lowercase: "66.67", uppercase: "33.33", neither: "0.00" }

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
