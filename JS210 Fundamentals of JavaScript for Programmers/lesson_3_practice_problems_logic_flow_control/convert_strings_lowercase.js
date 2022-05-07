function toLowerCase(string) {
  const CONVERT_ASCII = 32;
  let result = '';

  for (let index = 0; index < string.length; index++) {
    if (string[index] < 'A' || string[index] > 'Z') {
      result += string[index]
    } else {
      let asciiNumeric = string.charCodeAt(index);
      asciiNumeric += CONVERT_ASCII;
      result += String.fromCharCode(asciiNumeric);
    }
  }

  return result;
}

toLowerCase('ALPHABET');    // "alphabet"
toLowerCase('123');         // "123"
toLowerCase('abcDEF');      // "abcdef"