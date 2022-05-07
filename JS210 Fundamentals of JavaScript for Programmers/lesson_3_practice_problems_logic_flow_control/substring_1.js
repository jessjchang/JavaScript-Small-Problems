function substr(string, start, length) {
  if (start < 0) {
    start = string.length + start
  }

  if (length > string.length - start) {
    length = string.length - start
  }

  let result = '';

  for (let index = start; result.length < length; index++) {
    result += string[index];
  }

  return result;
}

let string = 'hello world';

substr(string, 2, 4);      // "llo "
substr(string, -3, 2);     // "rl"
substr(string, 8, 20);     // "rld"
substr(string, 0, -20);    // ""
substr(string, 0, 0);      // ""