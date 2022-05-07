function crunch(str) {
  if (str === '') {
    return '';
  }

  let result = str[0];

  for (let index = 1; index < str.length; index++) {
    if (result[result.length - 1] !== str[index]) {
      result += str[index];
    }
  }

  return result;
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""
