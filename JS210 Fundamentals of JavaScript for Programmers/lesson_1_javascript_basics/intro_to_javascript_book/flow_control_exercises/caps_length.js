function capsLength(string) {
  if (string.length > 10) {
    return string.toUpperCase();
  } else {
    return string;
  }
}

console.log(capsLength("hello world"));
console.log(capsLength("goodbye"));