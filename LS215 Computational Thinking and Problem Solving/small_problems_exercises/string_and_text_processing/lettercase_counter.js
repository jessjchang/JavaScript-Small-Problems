function letterCaseCount(str) {
  return str.split('').reduce((obj, char) => {
    if (/[a-z]/.test(char)) {
      obj.lowercase += 1;
    } else if (/[A-Z]/.test(char)) {
      obj.uppercase += 1;
    } else {
      obj.neither += 1;
    }
    
    return obj;
  }, { lowercase: 0, uppercase: 0, neither: 0 });
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }
