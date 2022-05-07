function chooseRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let age = chooseRandom(20, 200);
console.log(`Teddy is ${age} years old!`);

// Further Exploration
function chooseRandom(min, max) {
  [min, max] = min < max ? [min, max] : [max, min];
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let age = chooseRandom(200, 20);
console.log(`Teddy is ${age} years old!`);
