/*
Write a function that implements the Caesar Cipher. The Caesar Cipher is one of the earliest and simplest ways to encrypt plaintext so that a message can be transmitted securely. It is a substitution cipher in which each letter in a plaintext is substituted by the letter located a given number of positions away in the alphabet. For example, if the letter 'A' is right-shifted by 3 positions, it will be substituted with the letter 'D'. This shift value is often referred to as the key. The "encrypted plaintext" (ciphertext) can be decoded using this key value.

The Caesar Cipher only encrypts letters (including both lower and upper case). Any other character is left as is. The substituted letters are in the same letter case as the original letter. If the key value for shifting exceeds the length of the alphabet, it wraps around from the beginning.

Examples:

// simple shift
caesarEncrypt('A', 0);       // "A"
caesarEncrypt('A', 3);       // "D"

// wrap around
caesarEncrypt('y', 5);       // "d"
caesarEncrypt('a', 47);      // "v"

// all letters
caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"


PROBLEM:
- Objective: given a string and a key (number), encrypt it using the Caesar Cipher and return the encrypted string
- Input: 
  - string - can contain alphabetic letters (upper and lowercase), punctuation, special characters, etc.
  - number - integer representing the key value for shifting - greater than or equal to 0
- Output: string - encrypted via Caesar Cipher applied

Rules:
- Caesar Cipher
  - only encrypts letters (both lettercases)
    - non-alphabetic characters are ignored
  - given an alphabetic letter and a shift value (key), the encrypted/substituted letter is the original letter shifted forward in position by the shift value
    - "position" of letter in alphabet can be based on zero-indexed positions
      - 'A'/'a' considered position 0, 'Z'/'z' considered position 25
      - shifting forward means take the original letter's position, add the shift value to it, and this will be the index position of the substitute letter
        - if the resulting key value (from adding index of original letter to the shift key) is greater than the length of the alphabet (i.e. if result > 25), then wrap around to beginning of alphabet
          - i.e. if resulting key value is 26, this is equivalent to 'A'/'a' at index 0
  - retain same lettercase as original letter
  
Questions:
- what do I do with an empty string?
  
EXAMPLES:
// simple shift
caesarEncrypt('A', 0);       // "A"
caesarEncrypt('A', 3);       // "D"

// wrap around
caesarEncrypt('y', 5);       // "d"
caesarEncrypt('a', 47);      // "v"

// all letters
caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"


console.log(caesarEncrypt('A', 0) === "A");
console.log(caesarEncrypt('A', 3) === "D");
console.log(caesarEncrypt('y', 5) === "d");
console.log(caesarEncrypt('a', 47) === "v");
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25) === "ZABCDEFGHIJKLMNOPQRSTUVWXY");
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5) === "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!");
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2) === "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?");
console.log(caesarEncrypt('') === '');
console.log(caesarEncrypt('? !;') === '? !;');


DATA STRUCTURES:
- string
- number
- array?

ALGORITHM:
- takes string `str` and number `key` as arguments
- convert given string to array of characters (`charsArray`)
- declare `encryptChar` and initialize to function returned by `determineCharSubstitution`
- iterate through `charsArray` and transform each character `char`
  - if `char` is alphabetic, encrypt the character - invoke `encryptChar`
  - otherwise, return the character as is
- join the transformed array into a new string

`createCharSubstitution` helper function:
- takes number (`key`) as argument
- create an array of all lowercase alphabetic letters (`LOWERCASE_LETTERS`) - `createAlpha` helper function
- create empty object to store `substitutions`
- iterate through `LOWERCASE_LETTERS`
  - on each iteration for `originalLetter`
    - add `key` to `index` and take % 26 to find resulting `keyValue`
    - find resulting character at `keyValue` of `LOWERCASE_LETTERS`
    - add `originalLetter` as `substitutions` key and value as the resulting character you just found
- return `substitutions`

`determineCharSubstitution` helper function:
- invoke `createCharSubstitution` and initialize `substitutions` to return value
- return a function
  - takes character `char`
  - look up `char` (lowercased) in `substitutions` object (`substituteChar`)
  - if `char` is uppercase, return uppercased `substituteChar`, otherwise return `substituteChar`

`createAlpha` helper function:
- create empty array to store `result`
- find character code of 'a' - 'a'.charCodeAt(0) and set to `startingCharCode`
- iterate 26 times
  - on each iteration, convert `startingCharCode` to corresponding letter
  - append this letter to `result`
  - increment `startingCharCode` by 1
- return `result`

*/

function caesarEncrypt(str, key) {
  let charsArray = str.split('');
  let encryptChar = determineCharSubstitution(key);

  return charsArray.map(char => /[a-z]/i.test(char) ? encryptChar(char) : char).join('');
}

function createCharSubstitution(key) {
  const LOWERCASE_LETTERS = createAlpha();
  let substitutions = {};
  
  LOWERCASE_LETTERS.forEach((originalLetter, index) => {
    let newChar = LOWERCASE_LETTERS[(key + index) % 26];
    substitutions[originalLetter] = newChar;
  });
  
  return substitutions;
}

function determineCharSubstitution(key) {
  let substitutions = createCharSubstitution(key);
  
  return function(char) {
    let substituteChar = substitutions[char.toLowerCase()];
    
    return char.toUpperCase() === char ? substituteChar.toUpperCase() : substituteChar;
  }
}

function createAlpha() {
  let result = [];
  let startingCharCode = 'a'.charCodeAt(0);
  
  for (let iteration = 1; iteration <= 26; iteration += 1) {
    result.push(String.fromCharCode(startingCharCode));
    startingCharCode += 1;
  }
  
  return result;
}

console.log(caesarEncrypt('A', 0) === "A");
console.log(caesarEncrypt('A', 3) === "D");
console.log(caesarEncrypt('y', 5) === "d");
console.log(caesarEncrypt('a', 47) === "v");
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25) === "ZABCDEFGHIJKLMNOPQRSTUVWXY");
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5) === "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!");
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2) === "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?");
console.log(caesarEncrypt('') === '');
console.log(caesarEncrypt('? !;') === '? !;');
