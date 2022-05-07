/*
You are given a list of numbers in a "short-hand" range where only the significant part of the next number is written because we know the numbers are always increasing (ex. "1, 3, 7, 2, 4, 1" represents [1, 3, 7, 12, 14, 21]). Some people use different separators for their ranges (ex. "1-3, 1-2", "1:3, 1:2", "1..3, 1..2" represent the same numbers [1, 2, 3, 11, 12]). Range limits are always inclusive.

Your job is to return a list of complete numbers.

The possible separators are: ["-", ":", ".."]

"1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
"1-3, 1-2" --> 1, 2, 3, 11, 12
"1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
"104-2" --> 104, 105, ... 112
"104-02" --> 104, 105, ... 202
"545, 64:11" --> 545, 564, 565, .. 611


*** PROBLEM/REQUIREMENTS ***
- Objective: determine list of complete numbers given a list of numbers in "shorthand" range
- Input: string of digits and possible separators (-, :, .., comma, space)
- Output: array of numbers

Rules:
- numbers will always be increasing
"1, 3, 7, 2, 4, 1" represents [1, 3, 7, 12, 14, 21]
  - start from first number - 1
  - move to next number, if it's greater than previous number, leave number as is - 3
  - if next number is smaller than previous number (in list), add additional digit in front so it's greater (i.e. find next number that is greater than the previous number and that has the "shorthand" as the rightmost part of it)
- can also represent with ranges - possible separators for ranges - ["-", ":", ".."]
  - range means include all integers in between too
  - "1-3, 1-2", "1:3, 1:2", "1..3, 1..2" are all valid and represent the same numbers [1, 2, 3, 11, 12]
  - range limits are inclusive, i.e. last number is included
- given list of numbers can be comma separated to denote just a list, not a range (i.e. don't include numbers in-between)

Questions:
- can we combine ranges?
- what do we do if we have invalid separators for ranges or invalid characters in given string?
- will I only get positive numbers? And only dealing with integers?

*** EXAMPLES/TEST CASES ***
console.log(listNums("")); // []
console.log(listNums("1, 3, 7, 2, 4, 1")); // [1, 3, 7, 12, 14, 21]
console.log(listNums("1-3, 1-2")); // [1, 2, 3, 11, 12]
console.log(listNums("1-3, 1:2")); // [1, 2, 3, 11, 12]
console.log(listNums("1:3, 1:2")); // [1, 2, 3, 11, 12]
console.log(listNums("1:3, 2:1")); // [1, 2, 3, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
console.log(listNums("1..3, 1..2")); // [1, 2, 3, 11, 12]
console.log(listNums("1:5:2")); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
console.log(listNums("1:5..2")); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
console.log(listNums("1:5-2")); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
console.log(listNums("104-2")); // [104, 105, 106, 107, 108, 109, 110, 111, 112]
console.log(listNums("104, 2")); // [104, 112]
console.log(listNums("10, 02")); // [10, 102]
console.log(listNums("114, 02")); // [114, 202]
console.log(listNums("1004, 2")); // [1004, 1012]
console.log(listNums("1004, 02")); // [1004, 1102]
console.log(listNums("104-02")); // [104, 105, ... 202]
console.log(listNums("1104-02")); // [1104, 1105, ... 1202]
console.log(listNums("545, 64:11")); // [545, 564, 565, .. 611]


*** DATA STRUCTURES ***
- strings
- arrays
- numbers - integers

*** ALGORITHM ***
- initialize empty array to store result
- separate given list into array of numbers/ranges divided on the commas (`numsAndRangesArray`)
  - i.e. "1, 3, 7" -> ['1', '3', '7']
  - i.e. "1-3, 1-2" -> ['1-3', '1-2']
- iterate through `numsAndRangesArray`, and for each number/range (`numOrRangeString`):
  - if we're dealing with just a number (i.e. string doesn't include '-, :, or ..')
    - add correct number to `result` array (`determineNextNum` helper method)
  - otherwise
    - split `numOrRangeString` on possible separators (-, :, ..) into array of number strings and separators (`rangePartsArray`)
    - remove any of the separators from array
    - find correct first number based off first element of `rangePartsArray`, and replace the first element of `rangePartsArray` with this number - use `findNextBiggestNum` helper method
    - create the correct range (`createRange` helper method) - `correctRange`
    - concatenate all of `correctRange` to `result` array
- return `result` array


`determineNextNum` helper function:
- take `result` array and `numString` as arguments
- look at last number added to `result` array
    - if `result` array is empty OR `numString` AS A NUMBER > this last number that was added
      - return `numString` AS NUMBER
    - otherwise
      - find the next biggest number with `numString` as rightmost part of it (`findNextBiggestNum` helper method)
      - return this number

`findNextBiggestNum` helper function:
- take a number `startingNum`(last number that was added to `result` array) and another number `endingNum` (`numString`) as arguments
- find length of `startingNum` AS STRING
- find length of `endingNum`
- find difference between lengths - this difference is the `keypointIndex`
- if difference is `0`, then just add a `1` in front of `endingNum` and return AS NUMBER
- concatenate index 0 to `keypointIndex` (exclusive) of `startingNum` AS STRING with `endingNum` string - set as `nextBiggestNum`
- while `nextBiggestNum` < `startingNum`
  - increment digit of `keypointIndex` - 1 of `nextBiggestNum` by 1
  - replace character at `keypointIndex` with this new digit and set as `nextBiggestNum`
- return `nextBiggestNum`

`createRange` helper function:
- takes an array (`numsForRange`) as argument
- initialize `currentNum` to first element of `numsForRange`
- create array to store `result`, and add `currentNum`
- iterate through `numsForRange` from index 1 to end - for each `currentEndingPoint`
  - find length of `currentEndingPoint`
  - while the rightmost digits of `currentNum` (according to length of `endingPoint`) are not equal to `currentEndingPoint`
    - start from `currentNum`
      - increment `currentNum` AS NUMBER by 1 and add to `result`
      - add this result to `result`
- return `result`
*/

function listNums(str) {
  if (str === '') return [];

  let result = [];
  
  let numsAndRangesArray = str.split(', ');
  
  numsAndRangesArray.forEach(numOrRangeString => {
    if (numOrRangeString.match(/[-.:]/g) === null) {
      result.push(determineNextNum(result, numOrRangeString));
    } else {
      let rangePartsArray = numOrRangeString.split(/[-.:]/);
      rangePartsArray = rangePartsArray.filter(el => el !== '');
      let correctFirstNum = rangePartsArray[0];
      if (result.length !== 0) {
        correctFirstNum = findNextBiggestNum(result[result.length - 1], rangePartsArray[0]);
      }
      rangePartsArray.splice(0, 1, correctFirstNum);
      let correctRange = createRange(rangePartsArray);
      result = result.concat(correctRange);
    }
  });
  
  return result;
}

function determineNextNum(result, numString) {
  let lastNum = result[result.length - 1];
  
  if (lastNum === undefined || Number(numString) > lastNum) {
    return Number(numString);
  } else {
    return findNextBiggestNum(lastNum, numString);
  }
}

function findNextBiggestNum(startingNum, endingNumString) {
  let startingNumLength = String(startingNum).length;
  let endingNumLength = endingNumString.length;
  let keypointIndex = startingNumLength - endingNumLength;
  if (keypointIndex === 0) {
    return Number('1' + endingNumString);
  } else {
    let startingNumString = String(startingNum);
    let nextBiggestNum = startingNumString.slice(0, keypointIndex) + endingNumString
    while (Number(nextBiggestNum) < startingNum) {
      let nextDigit = Number(nextBiggestNum[keypointIndex - 1]) + 1;
      let newNum = nextBiggestNum.split('')
      newNum.splice(keypointIndex - 1, 1, String(nextDigit));
      nextBiggestNum = newNum.join('');
    }
    return Number(nextBiggestNum);
  }
}

function createRange(numsForRange) {
  let currentNum = Number(numsForRange[0]);
  let result = [currentNum];
  
  numsForRange.slice(1).forEach(currentEndPoint => {
    let endLength = currentEndPoint.length;
    while (String(currentNum).slice(-endLength) !== currentEndPoint) {
      currentNum += 1;
      result.push(currentNum);
    }
  });
  
  return result;
}

console.log(listNums("")); // []
console.log(listNums("1, 3, 7, 2, 4, 1")); // [1, 3, 7, 12, 14, 21]
console.log(listNums("1-3, 1-2")); // [1, 2, 3, 11, 12]
console.log(listNums("1-3, 1:2")); // [1, 2, 3, 11, 12]
console.log(listNums("1:3, 1:2")); // [1, 2, 3, 11, 12]
console.log(listNums("1:3, 2:1")); // [1, 2, 3, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
console.log(listNums("1..3, 1..2")); // [1, 2, 3, 11, 12]
console.log(listNums("1:5:2")); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
console.log(listNums("1:5..2")); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
console.log(listNums("1:5-2")); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
console.log(listNums("104-2")); // [104, 105, 106, 107, 108, 109, 110, 111, 112]
console.log(listNums("104, 2")); // [104, 112]
console.log(listNums("10, 02")); // [10, 102]
console.log(listNums("114, 02")); // [114, 202]
console.log(listNums("1004, 2")); // [1004, 1012]
console.log(listNums("1004, 02")); // [1004, 1102]
console.log(listNums("104-02")); // [104, 105, ... 202]
console.log(listNums("1104-02")); // [1104, 1105, ... 1202]
console.log(listNums("545, 64:11")); // [545, 564, 565, .. 611]
