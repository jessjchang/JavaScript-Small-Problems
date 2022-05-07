/*
You have a bank of switches before you, numbered from 1 to n. Every switch is connected to exactly one light that is initially off. You walk down the row of switches and toggle every one of them. You walk back to the beginning of the row and start another pass. On this second pass, you toggle switches 2, 4, 6, and so on. On the third pass, you go back to the beginning again, this time toggling switches 3, 6, 9, and so on. You continue to repeat this process until you have gone through n repetitions.

Write a program that takes one argument—the total number of switches—and returns an array of the lights that are on after n repetitions.

Examples:

function lightsOn(switches) {
  // ...
}

lightsOn(5);        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]


PROBLEM:
- Objective: Given a number of switches (`n`), go through the switches `n` times toggling according to certain pattern, and return an array of switches that are still on after going through `n` times

- Input: number - number of switches
- Output/Return: array of numbers - switches that are still on

Rules/Requirements:
- switches are numbered 1 to n
- every switch is initially off
- on first round:
  - toggle 1, 2, 3, ...n -> on
- on second round:
  - toggle 2, 4, 6, ... n (multiple of 2 less than or equal to n) -> off
- on third round:
  - toggle 3, 6, 9... n (multiple of 3 less than or equal to n) -> on
- continue alternating until you've gone through n repetitions
- inclusive - go through n times (including n)

Examples:
lightsOn(5);        // [1, 4]
lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
lightsOn(1);        // [1]
lightsOn(2);        // [1]
lightsOn(3);        // [1]
lightsOn(4);        // [1, 4]

1, 2, 3, 4 -> on
2, 4 -> off 1, 3 -> on
2, 3, 4 -> off 1-> on
2, 3 -> off 1, 4 -> on

Data Structures:
- numbers - integers
- array
- object
- booleans

Algorithm:
- given a number of switches `n`
- start off with a store of all my switches that are initially "off" - object
- repeat from 1 to `n` times
  - on each iteration, toggle the correct switches to the opposite of their previous state
- return an array with only the swtiches whose state is "on"

lightsOn(5);        // [1, 4]
{}
1, 2, 3, 4, 5
switches = {1: false, 2: false, 3: false, 4: false, 5: false}

multiplier = 3
numTimes = 1
multiplier = 1
switches = {1: true, 2: false, 3: false, 4: false, 5: false}
numTimes = 2
multiplier = 2
switches = {1: true, 2: true, 3: false, 4: false, 5: false}
numTimes = 3
switches = {1: true, 2: true, 3: true, 4: false, 5: false}
numTimes = 4
switches = {1: true, 2: true, 3: true, 4: true, 5: false}

- take 1 argument, a number of switches `n`
- `createInitialSwitches` helper function to create object with all switch numbers as keys from 1 to `n` and whose initial state is "off"
  - initialize `switches` to the returned object 
- repeat from 1 to `n` times - `multiplier`
  - on each iteration, toggle the correct switches to the opposite of their previous state - `toggleSwitches` helper function
  
- set an empty array to store my `onSwitches`
- iterate from 1 to `n` - currentSwitch
  - on each iteration, check if value at switch `currentSwitch` in `switches` is true
    - if so, append the currentSwitch number to my `onSwitches` array
- return `onSwitches` array at end


`createInitialSwitches` helper function:
- take number `n` as argument
- create an empty object to store the result
- iterate from 1 to `n`
  - on each iteration, add the current number as key to object and set its value as `false`
- return object

`toggleSwitches` helper function:
- take number of switches `n`, number `multiplier`, and object `switches` as arguments
- initialize `numTimes` to 1
- repeat while `multiplier * numTimes` <= `n`
  - initialize `currentSwitch` to `multiplier` * `numTimes`
  - toggle whatever key is `multiplier` in `switches` to the opposite value it had before
    - if `multiplier` key in `switches` was `false` toggle to `true`, and vice versa
  - increment `numTimes` by 1
 
*/


function lightsOn(n) {
  let switches = createInitialSwitches(n);
  
  for (let multiplier = 1; multiplier <= n; multiplier += 1) {
    toggleSwitches(n, multiplier, switches);
  }
  
  let onSwitches = [];
  for (let currentSwitch = 1; currentSwitch <= n; currentSwitch += 1) {
    if (switches[currentSwitch]) {
      onSwitches.push(Number(currentSwitch));
    }
  }
  
  return onSwitches;
}

function createInitialSwitches(n) {
  let result = {};
  
  for (let switchNum = 1; switchNum <= n; switchNum += 1) {
    result[switchNum] = false;
  }
  
  return result;
}

function toggleSwitches(n, multiplier, switches) {
  let numTimes = 1;
  
  while (multiplier * numTimes <= n) {
    let currentSwitch = multiplier * numTimes;
    switches[currentSwitch] = !switches[currentSwitch];
    numTimes += 1;
  }
}

// toggleSwitches(5, 5, ({ '1': true, '2': false, '3': false, '4': true, '5': true }));

// console.log(createInitialSwitches(5));

console.log(lightsOn(5));        // [1, 4]
console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
console.log(lightsOn(1));        // [1]
console.log(lightsOn(2));        // [1]
console.log(lightsOn(3));        // [1]
console.log(lightsOn(4));        // [1, 4]
