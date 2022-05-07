function logInBox(str) {
  console.log(`+${createRow(str.length + 2, '-')}+`);
  console.log(`|${createRow(str.length + 2, ' ')}|`);
  console.log(`| ${str} |`);
  console.log(`|${createRow(str.length + 2, ' ')}|`);
  console.log(`+${createRow(str.length + 2, '-')}+`);
}

function createRow(length, char) {
  let result = '';

  for (let repeat = 1; repeat <= length; repeat++) {
    result += char;
  }

  return result;
}

logInBox('To boldly go where no one has gone before.');

// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+

logInBox('');
// +--+
// |  |
// |  |
// |  |
// +--+
