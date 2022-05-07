let rlSync = require("readline-sync");

const METERS_TO_FEET = 10.7639;

console.log('Enter the length of the room in meters:');
let lengthMeters = rlSync.prompt();
lengthMeters = parseInt(lengthMeters, 10);

console.log('Enter the width of the room in meters:');
let widthMeters = rlSync.prompt();
widthMeters = parseInt(widthMeters, 10);

let areaMeters = lengthMeters * widthMeters;
let areaFeet = areaMeters * METERS_TO_FEET;

console.log(`The area of the room is ${areaMeters.toFixed(2)} square meters (${areaFeet.toFixed(2)} square feet).`);

// Further Exploration

let rlSync = require("readline-sync");

const METERS_TO_FEET = 10.7639;

console.log("Would you like to enter in meters or feet?");
let inputType = rlSync.prompt();

console.log(`Enter the length of the room in ${inputType}:`);
let length = rlSync.prompt();
length = parseInt(length, 10);

console.log(`Enter the width of the room in ${inputType}:`);
let width = rlSync.prompt();
width = parseInt(width, 10);

let area1 = length * width;

let alternateType;
let area2;

if (inputType === 'meters') {
  alternateType = 'feet';
  area2 = area1 * METERS_TO_FEET;
} else {
  alternateType = 'meters';
  area2 = area1 / METERS_TO_FEET;
}

console.log(`The area of the room is ${area1.toFixed(2)} square ${inputType} (${area2.toFixed(2)} square ${alternateType}).`);
