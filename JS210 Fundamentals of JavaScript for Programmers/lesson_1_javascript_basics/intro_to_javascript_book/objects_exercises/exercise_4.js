let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let objKeys = Object.keys(obj);
let uppercaseKeys = objKeys.map((key) => key.toUpperCase());

console.log(obj);
console.log(uppercaseKeys);