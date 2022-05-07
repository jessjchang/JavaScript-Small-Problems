// PROBLEM 1
let today = new Date();


// PROBLEM 2
let today = new Date();
console.log(`Today's day is ${today.getDay()}`);


// PROBLEM 3
let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let today = new Date();
console.log(`Today's day is ${daysOfWeek[today.getDay()]}`);


// PROBLEM 4
let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let today = new Date();
console.log(`Today's date is ${daysOfWeek[today.getDay()]}, the ${today.getDate()}th.`);


// PROBLEM 5
function dateSuffix(date) {
  let dateString = String(date);

  let lastDigit;
  if (dateString.length === 1) {
    lastDigit = dateString;
  } else if (dateString[0] !== '1') {
    lastDigit = dateString[1];
  }

  let suffix = 'th';
  if (lastDigit === '1') {
    suffix = 'st';
  } else if (lastDigit === '2') {
    suffix = 'nd';
  } else if (lastDigit === '3') {
    suffix = 'rd';
  }

  return dateString + suffix;
}

let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let today = new Date();
console.log(`Today's date is ${daysOfWeek[today.getDay()]}, the ${dateSuffix(today.getDate())}.`);


// PROBLEM 6
function dateSuffix(date) {
  let dateString = String(date);

  let lastDigit;
  if (dateString.length === 1) {
    lastDigit = dateString;
  } else if (dateString[0] !== '1') {
    lastDigit = dateString[1];
  }

  let suffix = 'th';
  if (lastDigit === '1') {
    suffix = 'st';
  } else if (lastDigit === '2') {
    suffix = 'nd';
  } else if (lastDigit === '3') {
    suffix = 'rd';
  }

  return dateString + suffix;
}

let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let today = new Date();
console.log(`Today's date is ${daysOfWeek[today.getDay()]}, ${today.getMonth()} ${dateSuffix(today.getDate())}.`);


// PROBLEM 7
function dateSuffix(date) {
  let dateString = String(date);

  let lastDigit;
  if (dateString.length === 1) {
    lastDigit = dateString;
  } else if (dateString[0] !== '1') {
    lastDigit = dateString[1];
  }

  let suffix = 'th';
  if (lastDigit === '1') {
    suffix = 'st';
  } else if (lastDigit === '2') {
    suffix = 'nd';
  } else if (lastDigit === '3') {
    suffix = 'rd';
  }

  return dateString + suffix;
}

let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let today = new Date();
console.log(`Today's date is ${daysOfWeek[today.getDay()]}, ${months[today.getMonth()]} ${dateSuffix(today.getDate())}.`);


// PROBLEM 8
function dateSuffix(date) {
  let dateString = String(date);

  let lastDigit;
  if (dateString.length === 1) {
    lastDigit = dateString;
  } else if (dateString[0] !== '1') {
    lastDigit = dateString[1];
  }

  let suffix = 'th';
  if (lastDigit === '1') {
    suffix = 'st';
  } else if (lastDigit === '2') {
    suffix = 'nd';
  } else if (lastDigit === '3') {
    suffix = 'rd';
  }

  return dateString + suffix;
}

function formattedMonth(date) {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  return months[date.getMonth()];
}

function formattedDay(date) {
  let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return daysOfWeek[date.getDay()];
}

function formattedDate(date) {
  let month = formattedMonth(date);
  let day = formattedDay(date);
  let dateWithSuffix = dateSuffix(date.getDate())

  console.log(`Today's date is ${day}, ${month} ${dateWithSuffix}.`);
}

let today = new Date();
formattedDate(today);


// PROBLEM 9
let today = new Date();
console.log(today.getFullYear()); // 2021
console.log(today.getYear()); // 121


// PROBLEM 10
let today = new Date();
console.log(today.getTime());


// PROBLEM 11
function dateSuffix(date) {
  let dateString = String(date);

  let lastDigit;
  if (dateString.length === 1) {
    lastDigit = dateString;
  } else if (dateString[0] !== '1') {
    lastDigit = dateString[1];
  }

  let suffix = 'th';
  if (lastDigit === '1') {
    suffix = 'st';
  } else if (lastDigit === '2') {
    suffix = 'nd';
  } else if (lastDigit === '3') {
    suffix = 'rd';
  }

  return dateString + suffix;
}

function formattedMonth(date) {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  return months[date.getMonth()];
}

function formattedDay(date) {
  let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return daysOfWeek[date.getDay()];
}

function formattedDate(date) {
  let month = formattedMonth(date);
  let day = formattedDay(date);
  let dateWithSuffix = dateSuffix(date.getDate())

  console.log(`Today's date is ${day}, ${month} ${dateWithSuffix}.`);
}

let today = new Date();
let tomorrow = new Date(today.getTime());

tomorrow.setDate(today.getDate() + 1);
formattedDate(tomorrow);


// PROBLEM 12
let today = new Date();
let nextWeek = new Date(today.getTime());

console.log(today === nextWeek); // false


// PROBLEM 13
let today = new Date();
let nextWeek = new Date(today.getTime());

console.log(today.toDateString() === nextWeek.toDateString()); // true
nextWeek.setDate(today.getDate() + 7);
console.log(today.toDateString() === nextWeek.toDateString()); // false


// PROBLEM 14
function formatTime(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();

  return `${formatWithZero(hours)}:${formatWithZero(minutes)}`;
}

function formatWithZero(num) {
  let numString = String(num);

  if (numString.length < 2) {
    return '0' + numString;
  } else {
    return numString;
  }
}

let today = new Date();
console.log(formatTime(today));
