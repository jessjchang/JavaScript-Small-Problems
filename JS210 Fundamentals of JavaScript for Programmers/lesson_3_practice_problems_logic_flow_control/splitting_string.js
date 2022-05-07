function splitString(string, delimiter) {
  if (delimiter === undefined) {
    console.log('ERROR: No delimiter');
    return;
  }

  let tempString = '';
  
  for (let index = 0; index < string.length; index++) {
    if (delimiter === '') {
      console.log(string[index]);
    } else if (string[index] !== delimiter) {
      tempString += string[index];
    } else {
      console.log(tempString);
      tempString = '';
    }
  }

  if (tempString) {
    console.log(tempString);
  }
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello