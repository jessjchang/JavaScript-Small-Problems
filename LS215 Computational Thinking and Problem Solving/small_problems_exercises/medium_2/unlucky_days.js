/*
Write a function that takes a year as an argument and returns the number of 'Friday the 13ths' in that year. You may assume that the year is greater than 1752 (when the modern Gregorian Calendar was adopted by the United Kingdom). You may also assume that the same calendar will remain in use for the foreseeable future.

Examples:
fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2

PROBLEM:
- given a year, determine how many Friday the 13ths there have been in the given year
- Input: number - integer, representing a year
- Output: number - number of Friday the 13ths in the given year

Rules:
- provided year will always be > 1752

Additional:
- for Date objects, day of week is 0-indexed (0 represents Sunday, 5 represents Friday)

ALGORITHM:
- takes number `year` as argument
- declare variable `fridayCount` and initialize to 0
- iterate from 1 to 12, representing each month
  - if month < 10, add preceding `0` to string 
  - create a string with 'year-month-13'
  - create a Date object using this string passed in as argument
  - find the day of the week of this Date object
  - if day of week is equal to 5, increment `fridayCount` by 1
- return `fridayCount`
*/

function fridayThe13ths(year) {
  let fridayCount = 0;

  for (let month = 1; month <= 12; month += 1) {
    let stringMonth = month < 10 ? '0' + String(month) : String(month);
    let date = new Date(`${year}-${stringMonth}-13`);
    if (date.getDay() === 5) {
      fridayCount += 1;
    }
  }
  
  return fridayCount;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2
