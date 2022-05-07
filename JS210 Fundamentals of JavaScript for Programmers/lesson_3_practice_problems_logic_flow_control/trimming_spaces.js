function trim(string) {
  let leftTrimmed = trimLeft(string);
  let result = trimRight(leftTrimmed);

  return result;
}

function trimLeft(string) {
  let result = '';
  let copyMode = false;

  for (let index = 0; index < string.length; index++) {
    if (string[index] !== ' ') {
      copyMode = true;
    }

    if (copyMode) {
      result += string[index];
    }
  }

  return result;
}

function trimRight(string) {
  let result = '';
  let copyMode = false;

  for (let index = string.length - 1; index >= 0; index--) {
    if (string[index] !== ' ') {
      copyMode = true;
    }

    if (copyMode) {
      result = string[index] + result;
    }
  }

  return result;
}

trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
trim('      ');   // ""
trim('');         // ""