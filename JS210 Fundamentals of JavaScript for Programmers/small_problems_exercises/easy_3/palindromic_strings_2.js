function isPalindrome(str) {  
  return str === str.split('').reverse().join('');
}

function isRealPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return isPalindrome(str);
}

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false
