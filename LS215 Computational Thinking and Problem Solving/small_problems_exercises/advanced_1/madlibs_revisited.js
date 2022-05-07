/*
Let's build another program using madlibs. We made a similar program in the Easy exercises, but this time the requirements are a bit different.

Build a madlibs program that takes a text template as input, plugs in a selection of randomized nouns, verbs, adjectives, and adverbs into that text, and then returns it. You can build your lists of nouns, verbs, adjectives, and adverbs directly into your program. Your program should read this text and, for each line, place random words of the appropriate types into the text and return the result.

The challenge of this program isn't just about writing your solution—it's about choosing the structure of the text template. Choose the right way to structure your template and this problem becomes much easier. Consequently, this exercise is a bit more open-ended since the input is also something that you'll be defining.

Examples:

Note: The quotes in the example strings returned by the madlibs function are only shown for emphasis. These quotes are not present in the actual output strings. The words in quotes come from the list of texts and it is the madlibs function that puts them in.

function madlibs(template) {
  // ...
}

// These examples use the following list of replacement texts:
adjectives: quick lazy sleepy noisy hungry
nouns: fox dog head leg tail cat
verbs: jumps lifts bites licks pats
adverbs: easily lazily noisily excitedly
------

madlibs(template1);
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

madlibs(template1);
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

madlibs(template2);      // The "fox" "bites" the "dog"'s "tail".

madlibs(template2);      // The "cat" "pats" the "cat"'s "head".

PROBLEM:
- given a text template, plug in random words in predetermined places in the template, and return the string
- Input: template - string with placeholders
- Output: string

Rules:
- 2 templates
- within template string, the placeholder for words to be replaced are delimited by `${}`
- template 1:
  - The ${adjective} brown ${noun} ${adverb} ${verb} the ${adjective} yellow ${noun}, who ${adverb} ${verb} his ${noun} and looks around.
- template 2:
  - The ${noun} ${verb} the ${noun}'s ${noun}.
- selection of adjectives, nouns, verbs, and adverbs

ALGORITHM:
- initialize constants to the template strings
- initialize constant to object
  - keys of object will be 'adjective', 'noun', 'verb', 'adverb'
  - values of these keys will be array of potential words in those categories
- main method takes template string `template` as argument
- replace each ${} delimited word in `template` with a random word based on correct key in object
  - for every sequence of characters that is ${, followed by sequence of one or more alphabetic characters, followed by }, replace with random word
    - remove the `${}` from the sequence of characters to find the correct key
    - randomize an index between 0 (inclusive) and the length of the array (exclusive) corresponding to correct key
    - choose a random word based off this index

*/
const template1 = "The ${adjective} brown ${noun} ${adverb} ${verb} the ${adjective} yellow ${noun}, who ${adverb} ${verb} his ${noun} and looks around.";

const template2 = "The ${noun} ${verb} the ${noun}'s ${noun}.";

const WORDS = {
  adjective: [ 'quick', 'lazy', 'sleepy', 'noisy', 'hungry' ],
  noun: [ 'fox', 'dog', 'head', 'leg', 'tail', 'cat' ],
  verb: [ 'jumps', 'lifts', 'bites', 'licks', 'pats' ],
  adverb: [ 'easily', 'lazily', 'noisily', 'excitedly' ],
};

function madlibs(template) {
  return template.replace(/\${[a-z]+}/g, replaceWord);
}

function replaceWord(matchedText) {
  let wordTypeKey = matchedText.replace(/[^a-z]/g, '');
  let randomIndex = Math.floor(Math.random() * WORDS[wordTypeKey].length);
  return WORDS[wordTypeKey][randomIndex];
}

console.log(madlibs(template1));
console.log(madlibs(template1));
console.log(madlibs(template2));
console.log(madlibs(template2));
