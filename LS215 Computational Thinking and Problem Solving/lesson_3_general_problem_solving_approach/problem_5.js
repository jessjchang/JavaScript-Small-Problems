/*
Implement encoding and decoding for the rail fence cipher.

The Rail Fence cipher is a form of transposition cipher that gets its name from the way in which it's encoded. It was already used by the ancient Greeks.

In the Rail Fence cipher, the message is written downwards on successive "rails" of an imaginary fence, then moving up when we get to the bottom (like a zig-zag). Finally the message is then read off in rows.

For example, using three "rails" and the message "WE ARE DISCOVERED FLEE AT ONCE", the cipherer writes out:

W . . . E . . . C . . . R . . . L . . . T . . . E
. E . R . D . S . O . E . E . F . E . A . O . C .
. . A . . . I . . . V . . . D . . . E . . . N . .

Then reads off:

WECRLTEERDSOEEFEAOCAIVDEN

To decrypt a message you take the zig-zag shape and fill the ciphertext along the rows.

? . . . ? . . . ? . . . ? . . . ? . . . ? . . . ?
. ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
. . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .

The first row has seven spots that can be filled with "WECRLTE".

W . . . E . . . C . . . R . . . L . . . T . . . E
. ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
. . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .

Now the 2nd row takes "ERDSOEEFEAOC".

W . . . E . . . C . . . R . . . L . . . T . . . E
. E . R . D . S . O . E . E . F . E . A . O . C .
. . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .

Leaving "AIVDEN" for the last row.

W . . . E . . . C . . . R . . . L . . . T . . . E
. E . R . D . S . O . E . E . F . E . A . O . C .
. . A . . . I . . . V . . . D . . . E . . . N . .

If you now read along the zig-zag shape you can read the original message.


*** PROBLEM/REQUIREMENTS ***

- Build 2 functions
  - first function: `encode`
    - takes 2 arguments - the plaintext message as a string, number of rails as a number (integer)
    - return encoded message as a string
  - second function: `decode`
    - takes 2 arguments - the plaintext encoded message as a string, number of rails as a number (integer)
    - return decoded message as a string

Rules:
  - case-insensitive - don't have to preserve case
  - ignore spaces?
  - only need to worry about alphabetic characters
  - read horizontally row by row
  - start from first (topmost) row for first letter
    - then move over one and down one, and place second letter
    - keep doing until reach correct number of rows
    - then start to move over one and up one, placing letters until reach top row
    - repeat steps on lines 61-63 until reached end of message string

Questions:
  - what are boundaries of number of rails (lower and upper bounds)? 0 to 10?

*** EXAMPLES/TEST CASES ***

console.log(encode("WEAREDISCOVEREDFLEEATONCE", 3)); // "WECRLTEERDSOEEFEAOCAIVDEN"
console.log(encode("WE ARE DISCOVERED FLEE AT ONCE", 3)); // "WECRLTEERDSOEEFEAOCAIVDEN"
console.log(encode("Hi Everyone", 1)); // "HIEVERYONE"
console.log(encode("Hi Everyone", 2)); // "HEEYNIVROE"
console.log(encode("Hi Everyone", 3)); // "HENIVROEEY"
console.log(encode("Hi Everyone", 4)); // "HYIROEENVE"
console.log(encode("Hi", 10)); // "HI"
console.log(encode("", 3)); // ""
console.log(encode(" ", 3)); // ""

H.E.E.Y.N.
.I.V.R.O.E

H...E...N. 0, 4, 8
.I.V.R.O.E 1, 3, 5, 7
..E...Y. 2, 6

H.....Y.  0, 6
.I...R.O  1, 5, 7
..E.E...N  2, 4, 8
...V.....E  3, 9

*** DATA STRUCTURES ***
- strings
- array - nested array
[
[H..],
[.I.],
[..E]
]


[
[],
[], 
[]
]

['H', 'E', 'L', 'L', 'O']
down = true
targetindex = 0

'H'
[
[H],
[.], 
[.]
]

down = true
targetIndex = 1

'E'
[
[H.],
[.E], 
[..]
]

down = true
targetIndex = 2

'L'
[
[H..],
[.E.], 
[..L]
]

down = false
targetIndex = 1

'L'
[
[H...],
[.E.L], 
[..L.]
]

down = false
targetIndex = 0

'O'
[
[H...O],
[.E.L.], 
[..L..]
]


H...O
.E.L
..L.

*** ALGORITHM ***
`encode` function:
- take string (`message`) and number (`numRails`) as arguments
- remove spaces in `message` and convert to all uppercase
- create an array of arrays (i.e. nested array) where number of subarrays is equal to `numRails` - `resultArray` - use `createNestedArray` helper function
- convert `message` to array of characters
- declare variable to keep track of whether you're going down and set to true at first - `down` = true
- declare variable to keep track of target index of subarray - `targetSubarrIndex` - start at 0
- iterate through each character of string - for each character `char` (also include index `charIndex`)
  - iterate through `resultArray` - `subarr` and `subarrIndex`
    - if `numRails` is 1, or if `subarrIndex` is equivalent to `targetSubarrIndex`
      - append `char` to `subarr`
    - otherwise
      - append '.' to `subarr`
  - if `targetSubarrIndex` is equal to 0 and `charIndex` isn't 0, or if `targetSubarrIndex` is equal to `numRails` - 1, set `down` to opposite of what it was before
  - if `down` is true, increment `targetSubarrIndex` by 1, otherwise decrement `targetSubarrIndex` by 1

- iterate through `resultArray` and for each subarray, transform by removing '.' and joining to a string
- join together all of `resultArray` as final string


`createNestedArray` helper function:
- take a number (`numRails`) as argument
- create empty array to store `result`
- do `numRails` times:
  - append empty array to `result`
- return `result`
*/

function encode(message, numRails) {
  message = message.replaceAll(' ', '').toUpperCase();
  let resultArray = createNestedArray(numRails);
  let chars = message.split('');
  let down = true;
  let targetSubarrIndex = 0;
  
  chars.forEach((char, charIndex) => {
    resultArray.forEach((subarr, subarrIndex) => {
      if (numRails === 1 || subarrIndex === targetSubarrIndex) {
        subarr.push(char);
      } else {
        subarr.push('.');
      }
    });
    
    if ((targetSubarrIndex === 0 && charIndex !== 0) || (targetSubarrIndex === numRails - 1)) {
      down = !down;
    }
    
    targetSubarrIndex = down ? targetSubarrIndex + 1 : targetSubarrIndex - 1;
  });
  
  return resultArray.map(subarr => subarr.filter(el => el !== '.').join('')).join('');
}

function createNestedArray(numRails) {
  let result = [];
  
  for (let railNum = 1; railNum <= numRails; railNum += 1) {
    result.push([]);
  }
  
  return result;
}

console.log(encode("WEAREDISCOVEREDFLEEATONCE", 3)); // "WECRLTEERDSOEEFEAOCAIVDEN"
console.log(encode("WE ARE DISCOVERED FLEE AT ONCE", 3)); // "WECRLTEERDSOEEFEAOCAIVDEN"
console.log(encode("Hi Everyone", 1)); // "HIEVERYONE"
console.log(encode("Hi Everyone", 2)); // "HEEYNIVROE"
console.log(encode("Hi Everyone", 3)); // "HENIVROEEY"
console.log(encode("Hi Everyone", 4)); // "HYIROEENVE"
console.log(encode("Hi", 10)); // "HI"
console.log(encode("", 3)); // ""
console.log(encode(" ", 3)); // ""

// REFACTORED
function encode(message, numRails) {
  message = message.replaceAll(' ', '').toUpperCase();
  
  let resultArray = createResultArray(message, numRails);
  
  return resultArray.map(subarr => subarr.filter(el => el !== '.').join('')).join('');
}

function createResultArray(message, numRails) {
  let resultArray = createNestedArray(numRails);
  let chars = message.split('');
  let down = true;
  let targetSubarrIndex = 0;
  
  chars.forEach((char, charIndex) => {
    resultArray.forEach((subarr, subarrIndex) => {
      if (numRails === 1 || subarrIndex === targetSubarrIndex) {
        subarr.push(char);
      } else {
        subarr.push('.');
      }
    });
    
    if ((targetSubarrIndex === 0 && charIndex !== 0) || (targetSubarrIndex === numRails - 1)) {
      down = !down;
    }
    
    targetSubarrIndex = down ? targetSubarrIndex + 1 : targetSubarrIndex - 1;
  });
  
  return resultArray;
}

function createNestedArray(numRails) {
  let result = [];
  
  for (let railNum = 1; railNum <= numRails; railNum += 1) {
    result.push([]);
  }
  
  return result;
}

console.log(encode("WEAREDISCOVEREDFLEEATONCE", 3)); // "WECRLTEERDSOEEFEAOCAIVDEN"
console.log(encode("WE ARE DISCOVERED FLEE AT ONCE", 3)); // "WECRLTEERDSOEEFEAOCAIVDEN"
console.log(encode("Hi Everyone", 1)); // "HIEVERYONE"
console.log(encode("Hi Everyone", 2)); // "HEEYNIVROE"
console.log(encode("Hi Everyone", 3)); // "HENIVROEEY"
console.log(encode("Hi Everyone", 4)); // "HYIROEENVE"
console.log(encode("Hi", 10)); // "HI"
console.log(encode("", 3)); // ""
console.log(encode(" ", 3)); // ""


/*

*** ALGORITHM ***
`decode` function:
- take string (`message`) and number (`numRails`) as arguments
- remove spaces in `message`
- if `numRails` is 1, return `message`
- create string of '?' that is length of `message` - `createDummyString` helper function
- use `createResultArray` function to create `positionArray`, which will be array of nested arrays with '?' in place of where alphabetic characters will go
- convert `message` to array of characters - `messageChars`
- iterate through `positionArray`
  - iterate through each subarr - with index
    - if current subarrElement is a '?'
      - replace it with first element of `messageChars`
      - remove first element of `messageChars`
- iterate through `positionArray`
  - remove all '.' from subarr
- create empty string to store `decodedMessage`
- set `targetSubarrIndex` to 0
- set `down` to `true` to keep track of direction of zigzag
- until *every* subarr of `positionArray` is empty
  - remove first element from subarr at current `targetSubarrIndex` of `positionArray` and append character to `decodedMessage`
  - if `targetSubarrIndex` is equal to `numRails` - 1
    - set `down` to `false`
  - otherwise if `targetSubarrIndex` is `0`
    - set `down` to `true`

  - if `down` is true
    - increment `targetSubarrIndex` by 1
  - otherwise
    - decrement `targetSubarrIndex` by 1

- return `decodedMessage`

`createDummyString` helper function:
- takes `length` as argument
- create empty string to store `result`
- iterate `length` times
  - on each iteration, add '?' to `result` string
- return `result`

*/

function decode(message, numRails) {
  message = message.replaceAll(' ', '')
  
  if (numRails === 1) return message;

  let dummyString = createDummyString(message.length);
  let positionArray = createResultArray(dummyString, numRails);
  let messageChars = message.split('');
  
  positionArray.forEach(subarr => {
    subarr.forEach((subarrElement, index) => {
      if (subarrElement === '?') {
        subarr.splice(index, 1, messageChars.shift());
      }
    });
  });
  
  positionArray = positionArray.map(subarr => subarr.filter(el => el !== '.'));
  
  let decodedMessage = '';
  positionArray = positionArray.map(subarr => subarr.slice());
  
  let targetSubarrIndex = 0;
  let down = true;

  while (!everySubarrEmpty(positionArray)) {
    let nextLetter = positionArray[targetSubarrIndex].shift();
    decodedMessage += nextLetter;
    
    if (targetSubarrIndex === numRails - 1) {
      down = false;
    } else if (targetSubarrIndex === 0) {
      down = true;
    }

    if (down) {
      targetSubarrIndex += 1;
    } else {
      targetSubarrIndex -= 1;
    }
  }
  
  return decodedMessage;
}

function everySubarrEmpty(arr) {
  return arr.every(subarr => subarr.length === 0);
}

function createDummyString(length) {
  let result = '';
  for (let index = 0; index < length; index += 1) {
    result += '?';
  }
  return result;
}

function createResultArray(message, numRails) {
  let resultArray = createNestedArray(numRails);
  let chars = message.split('');
  let down = true;
  let targetSubarrIndex = 0;
  
  chars.forEach((char, charIndex) => {
    resultArray.forEach((subarr, subarrIndex) => {
      if (numRails === 1 || subarrIndex === targetSubarrIndex) {
        subarr.push(char);
      } else {
        subarr.push('.');
      }
    });
    
    if ((targetSubarrIndex === 0 && charIndex !== 0) || (targetSubarrIndex === numRails - 1)) {
      down = !down;
    }
    
    targetSubarrIndex = down ? targetSubarrIndex + 1 : targetSubarrIndex - 1;
  });
  
  return resultArray;
}

function createNestedArray(numRails) {
  let result = [];
  
  for (let railNum = 1; railNum <= numRails; railNum += 1) {
    result.push([]);
  }
  
  return result;
}

console.log(decode("WECRLTEERDSOEEFEAOCAIVDEN", 3)); // "WEAREDISCOVEREDFLEEATONCE"
console.log(decode("WE CRLTEER DSOEEFEAOCAIVDEN", 3)); // "WEAREDISCOVEREDFLEEATONCE"
console.log(decode("HIEVERYONE", 1)); // "HIEVERYONE"
console.log(decode("HEEYNIVROE", 2)); // "HIEVERYONE"
console.log(decode("HENIVROEEY", 3)); // "HIEVERYONE"
console.log(decode("HYIROEENVE", 4)); // "HIEVERYONE"
console.log(decode("HI", 10)); // "HI"
console.log(decode("", 3)); // ""
