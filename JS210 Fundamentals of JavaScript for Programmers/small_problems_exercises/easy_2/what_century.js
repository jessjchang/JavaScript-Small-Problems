function century(year) {
  let century = findCentury(year);
  
  let suffix = findSuffix(century);
  
  return String(century) + suffix;
}

function findCentury(year) {
  if (year % 100 === 0) {
    return year / 100;
  } else {
    return Math.floor(year / 100) + 1;
  }
}
  
function findSuffix(century) {
  let centuryString = String(century)
  let secondLastDigit = centuryString[centuryString.length - 2];
  let lastDigit = centuryString[centuryString.length - 1];
  let lastTwoDigits = secondLastDigit + lastDigit;

  if (lastTwoDigits === '11' || lastTwoDigits === '12' || lastTwoDigits === '13') {
    return 'th';
  } else if (lastDigit === '1') {
    return 'st';
  } else if (lastDigit === '2') {
    return 'nd';
  } else if (lastDigit === '3') {
    return 'rd';
  } else {
    return 'th';
  }
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"