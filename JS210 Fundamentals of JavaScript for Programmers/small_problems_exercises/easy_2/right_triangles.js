function triangle(n) {
  for (let spaces = n - 1; spaces >= 0; spaces--) {
    console.log(makeRow(spaces, n));
  }
}

function makeRow(spaces, n) {
  let result = '';
  
  for (let addedSpace = 0; addedSpace < spaces; addedSpace++) {
    result += ' ';
  }
  
  for (let addedStar = 0; addedStar < n - spaces; addedStar++) {
    result += '*';
  }
  
  return result;
}

triangle(5);

triangle(9);
