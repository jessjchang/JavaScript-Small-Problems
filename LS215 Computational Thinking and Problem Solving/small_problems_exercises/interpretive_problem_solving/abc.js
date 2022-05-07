/*
A collection of spelling blocks has two letters per block, as shown in this list:

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

This limits the words you can spell with the blocks to only those words that do not use both letters from any given block. You can also only use each block once.

Write a function that takes a word string as an argument, and returns true if the word can be spelled using the set of blocks, or false otherwise. You can consider the letters to be case-insensitive when you apply the rules.

Examples:

isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
isBlockWord('jest');       // true


*** PROBLEM/REQUIREMENTS ***
- Objective: determine if we can spell a given word with spelling blocks
- Input: string - word
- Output: boolean - indicates whether we spell the input word according to criteria

Rules:
- spelling blocks contain 2 letters per block
B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M
- can't use both letters from same block
- can only use a block once for each given word
- case-insensitive - given string can contain upper and lowercase, but both cases should be considered the same in regards to the letter

Questions:
- will input string always be a single word, i.e. no spaces?
- will input string ever include special characters?
- what do we do with empty string input? Return `true`?

*** EXAMPLES/TEST CASES ***
console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BaTCh'));      // true
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('BATCB'));      // false
console.log(isBlockWord('BATCb'));      // false
console.log(isBlockWord('buTCH'));      // false
console.log(isBlockWord('BATCH7'));      // false

*** DATA STRUCTURES ***
- string
- array

*** ALGORITHM ***
- take string as argument (`word`)
- initialize constant to array of strings, whereby each string is pair of letters for block (`BLOCKS`)
- convert `word` to uppercase
- if `word` contains any non-alphabetic characters, return `false`
- iterate through `BLOCKS`
  - for each string pair, find count of how many times either letter appears in `word` (`countAppearances` helper method)
  - if the count is > 1, return `false`
- return `true` at end if never returned `false`

countAppearances helper function:
- take 2 strings as arguments (`pair`, `word`)
- convert `word` to array of characters
- iterate through array of characters
  - select the characters that are included in `pair`, and include in an array
- return size of returned array
*/

function isBlockWord(word) {
  const BLOCKS = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM']
  
  word = word.toUpperCase();
  
  if (/[^A-Z]/.test(word)) {
    return false;
  }
  
  for (let index = 0; index < BLOCKS.length; index += 1) {
    if (countAppearances(BLOCKS[index], word) > 1) {
      return false;
    }
  }
  
  return true;
}

function countAppearances(pair, word) {
  let chars = word.split('');
  return chars.filter(char => pair[0] === char || pair[1] === char).length;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BaTCh'));      // true
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('BATCB'));      // false
console.log(isBlockWord('BATCb'));      // false
console.log(isBlockWord('buTCH'));      // false
console.log(isBlockWord('BATCH7'));      // false
