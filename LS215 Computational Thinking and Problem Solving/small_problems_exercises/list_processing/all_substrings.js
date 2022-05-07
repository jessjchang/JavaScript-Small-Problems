function leadingSubstrings(str) {
  return str.split('').map((el, index) => str.slice(0, index + 1));
}

function substrings(str) {
  return str.split('').reduce((substrings, _char, index) => {
    let currStr = str.slice(index);
    let addedSubstrings = substrings.concat(leadingSubstrings(currStr));
    return addedSubstrings;
  }, []);
}

substrings('abcde');
// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]
