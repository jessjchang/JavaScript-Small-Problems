function swap(str) {
  return str.split(' ').map(word => swapWord(word)).join(' ');
}

function swapWord(str) {
  if (str.length <= 1) {
    return str;
  } else {
    let firstLetter = str[0];
    let lastLetter = str[str.length - 1];
    return lastLetter + str.slice(1, -1) + firstLetter;
  }
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"
