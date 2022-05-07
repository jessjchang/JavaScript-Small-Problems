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
