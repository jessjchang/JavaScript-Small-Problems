function isPalindrome(str) {  
  let reverse = '';
  
  for (let index = str.length - 1; index >= 0; index--) {
    reverse += str[index];
  }
  
  return reverse === str;
}

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true
