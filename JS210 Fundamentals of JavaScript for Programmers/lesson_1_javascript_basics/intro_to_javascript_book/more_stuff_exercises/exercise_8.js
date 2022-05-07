function isNotANumber(value) {
  return value !== value;
}

console.log(isNotANumber(NaN));
console.log(isNotANumber(5));