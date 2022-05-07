const MILLISECONDS_PER_MINUTE = 60 * 1000;

function timeOfDay(deltaMinutes) {
  let midnight = new Date('1/1/2021 00:00');
  let afterMidnight = new Date(midnight.getTime() + deltaMinutes * MILLISECONDS_PER_MINUTE);
  let hours = padWithZeroes(afterMidnight.getHours(), 2);
  let minutes = padWithZeroes(afterMidnight.getMinutes(), 2);
  
  return `${hours}:${minutes}`;
}
  
function padWithZeroes(number, length) {
  let numberString = String(number);

  while (numberString.length < length) {
    numberString = `0${numberString}`;
  }

  return numberString;
}

timeOfDay(0);          // "00:00"
timeOfDay(-3);         // "23:57"
timeOfDay(35);         // "00:35"
timeOfDay(-1437);      // "00:03"
timeOfDay(3000);       // "02:00"
timeOfDay(800);        // "13:20"
timeOfDay(-4231);      // "01:29"
