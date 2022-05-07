/*
Write a function that takes a sentence string as an argument and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

Example:

wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."


PROBLEM:
- given a sentence string, replace every "number word" with its corresponding digit character, and return the string with this substitution
- Input: string
- Output: string - number words replaced with digits

Rules:
- given string can contain punctuation, special characters, whitespace - all will be preserved in original positions
- number word:
  - zero
  - one
  - two
  - three
  ...
  - nine
  
Questions:
- do we have to deal with 2-digit?
- case sensitivity?
- if "number word" is included as part of another word, would we replace that?


EXAMPLES:
console.log(wordToDigit('Please call me at five five five one two three four. Thanks.') === "Please call me at 5 5 5 1 2 3 4. Thanks.");
// "Please call me at 5 5 5 1 2 3 4. Thanks."

console.log(wordToDigit('Hello hfive five. three  Wnine. t.en.') === 'Hello hfive 5. 3  Wnine. t.en.');
// 'Hello hfive 5. 3  Wnine. t.en.'

console.log(wordToDigit('  FiVE tEn NiNEteen  ZeRO!') === '  5 tEn NiNEteen  0!');
// '  5 tEn NiNEteen  0!'


ALGORITHM:
- initialize array of "number words" in lowercase
- take string `sentence` as argument
- find all matches in `sentence` that are a sequence of one or more alphabetic characters, not including whitespace
- iterate through these matches and for each match
  - if the "number words" array includes the match (lowercased), replace it in `sentence` with the corresponding index in "number words" array
  - otherwise just replace the match as is again in `sentence`
*/

const WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

function wordToDigit(sentence) {
  return sentence.replace(/[a-z]+/gi, match => {
    if (WORDS.includes(match.toLowerCase())) {
      return WORDS.indexOf(match.toLowerCase());
    } else {
      return match;
    }
  });
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.') === "Please call me at 5 5 5 1 2 3 4. Thanks.");
// "Please call me at 5 5 5 1 2 3 4. Thanks."

console.log(wordToDigit('Hello hfive five. three  Wnine. t.en.') === 'Hello hfive 5. 3  Wnine. t.en.');
// 'Hello hfive 5. 3  Wnine. t.en.'

console.log(wordToDigit('  FiVE tEn NiNEteen  ZeRO!') === '  5 tEn NiNEteen  0!');
// '  5 tEn NiNEteen  0!'
