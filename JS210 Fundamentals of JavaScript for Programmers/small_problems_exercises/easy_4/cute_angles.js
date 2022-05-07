const DEGREE_TO_MINUTES = 60;
const MINUTES_TO_SECONDS = 60;

function dms(angle) {
  let degrees = Math.floor(angle);
  let degreeRemainder = angle % 1;

  let minutes = degreeRemainder * DEGREE_TO_MINUTES;
  let minuteRemainder = minutes % 1;
  minutes = Math.floor(minutes);

  let seconds = Math.floor(minuteRemainder * MINUTES_TO_SECONDS);
  
  degrees = String(degrees);
  minutes = padZero(minutes);
  seconds = padZero(seconds);
  
  return `${degrees}˚${minutes}'${seconds}"`;
}

function padZero(num) {
  if (String(num).length === 1) {
    return '0' + String(num);
  } else {
    return String(num);
  }
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"

// Further Exploration
const DEGREE = '\xB0';
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_DEGREE = MINUTES_PER_DEGREE * SECONDS_PER_MINUTE;

function dms(degreesFloat) {
  degreesFloat %= 360;

  if (degreesFloat < 0) {
    degreesFloat += 360;
  }
  
  const degreesInt = Math.floor(degreesFloat);
  const minutes = Math.floor((degreesFloat - degreesInt) * MINUTES_PER_DEGREE);
  const seconds = Math.floor(
    (degreesFloat - degreesInt - (minutes / MINUTES_PER_DEGREE)) *
    SECONDS_PER_DEGREE
  );

  return `${String(degreesInt) + DEGREE + padZeroes(minutes)}'${padZeroes(seconds)}"`;
}

function padZeroes(number) {
  const numString = String(number);
  return numString.length < 2 ? (`0${numString}`) : numString;
}

dms(-1);   // 359°00'00"
dms(400);  // 40°00'00"
dms(-40);  // 320°00'00"
dms(-420); // 300°00'00"
