function alphabeticNumberSort(arr) {
  const NUM_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five',
                     'six', 'seven', 'eight', 'nine', 'ten',
                     'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
                     'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  
  return arr.slice().sort((el1, el2) => compareWords(NUM_WORDS[el1], NUM_WORDS[el2]));
}

function compareWords(word1, word2) {
  if (word1 < word2) {
    return -1;
  } else if (word1 > word2) {
    return 1;
  } else {
    return 0;
  }
}

alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]


// FURTHER EXPLORATION:
function alphabeticNumberSort(arr) {
  const NUM_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five',
                     'six', 'seven', 'eight', 'nine', 'ten',
                     'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
                     'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  
  return arr.slice().sort((el1, el2) => {
    if (NUM_WORDS[el1] < NUM_WORDS[el2]) {
      return -1;
    } else if (NUM_WORDS[el1] > NUM_WORDS[el2]) {
      return 1;
    } else {
      return 0;
    }
  });
}

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
console.log(alphabeticNumberSort(arr));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

console.log(arr)
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
