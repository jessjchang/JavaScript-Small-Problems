function doubleConsonants(str) {
  let result = '';

  for (let index = 0; index < str.length; index++) {
    if (shouldNotDouble(str[index])) {
      result += str[index];
    } else {
      result += str[index] + str[index];
    }
  }
  
  return result;
}

function shouldNotDouble(char) {
  return /[aeiou]|[^a-z]/i.test(char);
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""
