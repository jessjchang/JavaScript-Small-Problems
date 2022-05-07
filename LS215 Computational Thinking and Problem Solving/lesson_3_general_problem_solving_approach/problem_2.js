/*
The Luhn formula is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers and Canadian Social Insurance Numbers.

The formula verifies a number against its included check digit, which is usually appended to a partial number to generate the full number. This number must pass the following test:

Counting from the rightmost digit and moving left, double the value of every second digit

For any digit that thus become 10 or more, subtract 9 from the result
1111 becomes 2121
8763 becomes 7733 (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 = 7)

Add all these digits together
1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6
8763 becomes 7733, and 7 + 7 + 3 + 3 is 20

If the total (the checksum) ends in 0 (put another way, if the total modulo 10 is congruent to 0), then the number is valid according to the Luhn Formula; else it is not valid. Thus, 1111 is not valid (as shown above, it comes out to 6), while 8763 is valid (as shown above, it comes out to 20).

Write a program that, given a number in string format, check if it is valid per the Luhn formula. This should treat, for example, "2323 2005 7766 3554" as valid. You can ignore all non-numeric characters in the input string.


*** PROBLEM/REQUIREMENTS ***
Objective: given a number, check if it is valid according to the Luhn formula
Input: string - represent a number
Output: boolean - true if valid, false if not valid

Rules:
- Luhn formula:
  - move from right to left
  - for every second number, double it (i.e. multiply numerical value by 2) (by "second number", we mean: '86' -> second number is '8'; '863' -> second number is '6; '9863' -> second number is '6', then '9')
    - if doubled digit becomes >= 10, subtract 9 from the result of the multiplication
    - this new number will replace the original digit
  - for numbers not doubled (i.e. moving from right to left, starting from first number and then every other one), leave as is
  - add digits of new string together
    - if result ends in 0 (i.e. result % 10 is 0), then return true
    - otherwise, return false
- ignore all non-numeric characters in input string

"2323 2005 7766 3554"

4
1
5
6

6
3
7
5

5
0
0
4

3
4
3
4
60


*** EXAMPLES/TEST CASES ***
console.log(checkLuhn('0')) // true
console.log(checkLuhn('00')) // true
console.log(checkLuhn('000')) // true
console.log(checkLuhn('42')) // true
console.log(checkLuhn('141')) // true
console.log(checkLuhn('8763')) // true
console.log(checkLuhn('2323 2005 7766 3554')) // true
console.log(checkLuhn('2323  2-005.7766 /-35.54.')) // true
console.log(checkLuhn('-2323  2-005.7766 /-35.54.')) // true
console.log(checkLuhn('1111')) // false
console.log(checkLuhn('111')) // false
console.log(checkLuhn('11')) // false
console.log(checkLuhn('1')) // false
console.log(checkLuhn('11,11 ')) // false
console.log(checkLuhn('1.1,11 ')) // false
console.log(checkLuhn('')) // false

*** DATA STRUCTURES ***
- string
- number - integers
- array
  - may want to perform transformation and reduction

*** ALGORITHM ***
- take string as argument (`str`)
- remove any non-digit characters in `str`
- convert `str` string into array of digits as strings (`digits`)
- reverse this array of digits
- sum all digits in array by going through each digit and adding correct digit to a sum - start sum from default value of `0`
  - iterate through `digits` and look at each digit `digit` and index `index`
    - convert `digit` to a number version
    - find correct new digit (`newDigit` helper function)
    - increment current sum by this new digit
- check if final sum is divisible by 10

newDigit helper function:
- take 2 numbers (`digit` and `index`) as arguments
- if `index` is odd
  - double `digit` and reassign `digit` to this result
    - if `digit` >= 10
      - subtract 9 from result and reassign `digit` to this result
- return `digit`

*/

function checkLuhn(str) {
  if (str === '') return false;

  str = str.replace(/\D/g, '');
  let digits = str.split('').reverse();
  
  let total = digits.reduce((sum, digit, index) => {
    digit = parseInt(digit, 10);
    sum += newDigit(digit, index);
    return sum;
  }, 0);
  
  return total % 10 === 0;
}

function newDigit(digit, index) {
  if (index % 2 === 1) {
    digit *= 2;
    if (digit >= 10) {
      digit -= 9;
    }
  }
  
  return digit;
}

console.log(checkLuhn('0') === true) // true
console.log(checkLuhn('00') === true) // true
console.log(checkLuhn('000') === true) // true
console.log(checkLuhn('42') === true) // true
console.log(checkLuhn('141') === true) // true
console.log(checkLuhn('8763') === true) // true
console.log(checkLuhn('2323 2005 7766 3554') === true) // true
console.log(checkLuhn('2323  2-005.7766 /-35.54.') === true) // true
console.log(checkLuhn('-2323  2-005.7766 /-35.54.') === true) // true
console.log(checkLuhn('1111') === false) // true
console.log(checkLuhn('111') === false) // true
console.log(checkLuhn('11') === false) // true
console.log(checkLuhn('1') === false) // true
console.log(checkLuhn('11,11 ') === false) // true
console.log(checkLuhn('1.1,11 ') === false) // true
console.log(checkLuhn('') === false) // true



/* 
PART 2:

Write a function that can add a check digit to make the number valid per the Luhn formula and return the original number plus that digit. This should give "2323 2005 7766 3554" in response to "2323 2005 7766 355"

*** PROBLEM/REQUIREMENTS ***
Objective: given a card number, if the number is invalid per Luhn formula, add a digit to the end that will make it valid
Input: string - represents card number
Output: string - represents valid card number per Luhn formula

Rules:
- if input card number is already valid, just return the card number
- if input card number is invalid, return the card number with an extra digit at the end that makes it valid

Question:
- if there are special characters in input card number, do we just keep those in there?
- what happens if there is more than 1 digit that could potentially make the card number valid?

"2323 2005 7766 355"
5
1
3
3
6
5
7
1
0
0
2
6
2
6
2

49

"2323 2005 7766 3554"
4
1
5
6
6
3
7
5
5
0
0
4
3
4
3
4

60

*** EXAMPLES/TEST CASES ***
console.log(addCheckDigit("2323 2005 7766 3554")); // "2323 2005 7766 3554"
console.log(addCheckDigit("2323 2005 7766 355")); // "2323 2005 7766 3554"
console.log(addCheckDigit("2323 2005-7766 .355")); // "2323 2005-7766 .3554"
console.log(addCheckDigit("2323  2-005.7766 /-35.54.")); // "2323  2-005.7766 /-35.54."
console.log(addCheckDigit("-2323  2-005.7766 /-35.54.")); // "-2323  2-005.7766 /-35.54."
console.log(addCheckDigit("1")); // "18"
console.log(addCheckDigit("11")); // "117"
console.log(addCheckDigit("1111"); // "11114"
console.log(addCheckDigit("2324"); // "23242"
console.log(addCheckDigit("1.1")); // "1.17"
console.log(addCheckDigit("0")); // "0"

*** DATA STRUCTURES ***
- strings
- numbers - integers
- arrays

*** ALGORITHM ***
- take string as argument (`str`)
- check if `str` is valid using checkLuhn function, and return `str` if so
- for digits 0 to 9, append digit as string to the end of `str` - assign to `candidate`
  - use checkLuhn function to check if it is valid, and if so, return `candidate`

*/

function checkLuhn(str) {
  if (str === '') return false;

  str = str.replace(/\D/g, '');
  let digits = str.split('').reverse();
  
  let total = digits.reduce((sum, digit, index) => {
    digit = parseInt(digit, 10);
    sum += newDigit(digit, index);
    return sum;
  }, 0);
  
  return total % 10 === 0;
}

function newDigit(digit, index) {
  if (index % 2 === 1) {
    digit *= 2;
    if (digit >= 10) {
      digit -= 9;
    }
  }
  
  return digit;
}

function addCheckDigit(str) {
  if (checkLuhn(str)) return str;
  
  for (let checkDigit = 0; checkDigit <= 9; checkDigit += 1) {
    let candidate = str + String(checkDigit);
    if (checkLuhn(candidate)) return candidate;
  }
}

console.log(addCheckDigit("2323 2005 7766 3554") === "2323 2005 7766 3554");
console.log(addCheckDigit("2323 2005 7766 355") === "2323 2005 7766 3554");
console.log(addCheckDigit("2323 2005-7766 .355") === "2323 2005-7766 .3554");
console.log(addCheckDigit("2323  2-005.7766 /-35.54.") === "2323  2-005.7766 /-35.54.");
console.log(addCheckDigit("-2323  2-005.7766 /-35.54.") === "-2323  2-005.7766 /-35.54.");
console.log(addCheckDigit("1") === "18");
console.log(addCheckDigit("11") === "117");
console.log(addCheckDigit("1111") === "11114");
console.log(addCheckDigit("2324") === "23242");
console.log(addCheckDigit("1.1") === "1.17");
console.log(addCheckDigit("0") === "0");

/*
*** ALTERNATE ALGORITHM ***
- take string as argument (`str`)
- check if `str` is valid using checkLuhn function, and return `str` if so
- append digit `0` to end of `str` and check the total per Luhn algo
- subtract the rightmost digit of total from 10 to find the extra digit
- add the extra digit as string to end of `str` and return `str`

*/

function checkLuhn(str) {
  if (str === '') return false;
  
  let total = calculateLuhnTotal(str);
  
  return total % 10 === 0;
}

function calculateLuhnTotal(str) {
  str = str.replace(/\D/g, '');
  let digits = str.split('').reverse();
  
  return digits.reduce((sum, digit, index) => {
    digit = parseInt(digit, 10);
    sum += newDigit(digit, index);
    return sum;
  }, 0);
}

function newDigit(digit, index) {
  if (index % 2 === 1) {
    digit *= 2;
    if (digit >= 10) {
      digit -= 9;
    }
  }
  
  return digit;
}

function addCheckDigit(str) {
  if (checkLuhn(str)) return str;

  let total = calculateLuhnTotal(str + '0');
  
  if (total % 10 === 0) {
    str = str + '0';
  } else {
    let totalRightmostDigit = String(total).slice(-1);
    let newDigit = 10 - parseInt(totalRightmostDigit, 10);
    str = str + newDigit;
  }
    
  return str;
}

console.log(addCheckDigit("2323 2005 7766 3554") === "2323 2005 7766 3554");
console.log(addCheckDigit("2323 2005 7766 355") === "2323 2005 7766 3554");
console.log(addCheckDigit("2323 2005-7766 .355") === "2323 2005-7766 .3554");
console.log(addCheckDigit("2323  2-005.7766 /-35.54.") === "2323  2-005.7766 /-35.54.");
console.log(addCheckDigit("-2323  2-005.7766 /-35.54.") === "-2323  2-005.7766 /-35.54.");
console.log(addCheckDigit("1") === "18");
console.log(addCheckDigit("11") === "117");
console.log(addCheckDigit("1111") === "11114");
console.log(addCheckDigit("2324") === "23242");
console.log(addCheckDigit("1.1") === "1.17");
console.log(addCheckDigit("0") === "0");
