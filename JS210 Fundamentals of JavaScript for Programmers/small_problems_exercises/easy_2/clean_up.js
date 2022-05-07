function cleanUp(str) {
  let result = '';

  for (let index = 0; index < str.length; index++) {
    let char = str[index];

    if (isAlphabeticChar(char)) {
      result += char;
    } else if (result[result.length - 1] !== ' ') {
      result += ' ';
    }
  }
  
  return result;
}

function isAlphabeticChar(char) {
  return char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z';
}

cleanUp("---what's my +*& line?");    // " what s my line "


// Further Exploration

function cleanUp(str) {
  return str.replace(/[^a-zA-Z]+/g, ' ');
}

cleanUp("---what's my +*& line?");    // " what s my line "
