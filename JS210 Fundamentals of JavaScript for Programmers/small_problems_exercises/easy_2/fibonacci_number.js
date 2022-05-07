function findFibonacciIndexByLength(length) {
  let index = 2n;
  let num1 = 1n;
  let num2 = 1n;
  
  while (String(num1).length < length) {
    let sum = num1 + num2;
    num2 = num1;
    num1 = sum;
    index += 1n
  }
  
  return index;
}

findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
findFibonacciIndexByLength(10000n) === 47847n;

// The last example may take a minute or so to run.