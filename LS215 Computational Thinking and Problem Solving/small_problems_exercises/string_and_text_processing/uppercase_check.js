function isUppercase(str) {
  let lowercaseRegex = /[a-z]/
  return !lowercaseRegex.test(str);
}

isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true
