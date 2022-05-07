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

function palindromes(str) {
  let substringList = substrings(str);
  return substringList.filter(isPalindrome);
}

function isPalindrome(str) {
  return str.length > 1 && str.split('').reverse().join('') === str;
}

palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
