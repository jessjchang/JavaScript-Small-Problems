const array1 = ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
const array2 = [];

for (let i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]);
}

for (let i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
  }
}

console.log(array2);
// ["Moe", "Larry", "Curly", "Shemp", "Harpo", "Chico", "Groucho", "Zeppo"]

// Further Exploration
// #1
const array1 = [[1, 2], [3, 4]];
const array2 = [];

for (let i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]);
}

for (let i = 0; i < array1.length; i += 1) {
  array1[i][0] = 'hello';
}

console.log(array2); // [[ 'hello', 2 ], [ 'hello', 4 ]]


// #2
const array1 = ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
const array2 = array1;

for (let i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
  }
}

console.log(array2);
// ['Moe', 'Larry', 'CURLY', 'Shemp', 'Harpo', 'CHICO', 'Groucho', 'Zeppo']
