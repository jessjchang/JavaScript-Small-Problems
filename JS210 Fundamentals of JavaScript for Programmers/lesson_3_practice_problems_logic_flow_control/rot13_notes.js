// - given a string, translate into new string according to certain criteria 

// - if character is letter, change to character 13 positions later
// a->n
// o->b
// n->a
// - preserve case
// - don't modify non-alphabetic characters

// console.log(rot13('Teachers open the door, but you must enter by yourself.'));
// // logs:
// // Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

// console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));
// // logs:
// // Teachers open the door, but you must enter by yourself.

// **MAIN METHOD:**
// - create new string to store result
// - iterate through each character of the given string
//   - if encounter character in alphabet (use `firstHalfAlpha` and `secondHalfAlpha` helper methods)
//     - rotate the character accordingly (use `rotateChar` helper method)
//     - if the character is uppercase (use `isUpperCase` helper method), convert character to uppercase
//   - add character to new string
// - return new string

// **HELPER METHODS:**
// `rotateChar`:
// - accept string as argument, representing character
// - if character is in first half of alphabet, then add 13 to the character code
// - otherwise, if character is in second half of alphabet, then subtract 13 from character code
// - convert from character code back to character

// `firstHalfAlpha`:
// - accept string as argument, representing character
// - check if lowercased character is between 'a' and 'n' (not including 'n')

// `secondHalfAlpha`:
// - accept string as argument, representing character
// - check if lowercased character is between 'n' and 'z'

// `isUpperCase`:
//   - accept string as argument, representing character
//   - check if uppercased character is equal to character


function firstHalfAlpha(char) {
  return (char.toLowerCase() >= 'a' && char.toLowerCase() < 'n');
}

function secondHalfAlpha(char) {
  return (char.toLowerCase() >= 'n' && char.toLowerCase() <= 'z');
}

function isUpperCase(char) {
  return (char.toUpperCase() === char);
}

function rotateChar(char) {
  const ROTATION_POSITIONS = 13;
  let rotatedCharCode;

  if (firstHalfAlpha(char)) {
    rotatedCharCode = (char.charCodeAt(0) + ROTATION_POSITIONS);
  } else {
    rotatedCharCode = (char.charCodeAt(0) - ROTATION_POSITIONS);
  }

  return String.fromCharCode(rotatedCharCode);
}

function rot13(string) {
  let rotatedString = '';

  for (let index = 0; index < string.length; index++) {
    let char = string[index];

    if (firstHalfAlpha(char) || secondHalfAlpha(char)) {
      char = rotateChar(char);
      
      if (isUpperCase(char)) {
        char = char.toUpperCase();
      }
    }
    
    rotatedString += char
  }

  return rotatedString;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.') === 'Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.');
// logs:
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')) === 'Teachers open the door, but you must enter by yourself.');
// logs:
// Teachers open the door, but you must enter by yourself.
