/*
In the previous exercise, we developed a recursive solution for computing the nth Fibonacci number. In a language that is not optimized for recursion, some (but not all) recursive functions can be extremely slow and may require massive quantities of memory and/or stack space. If you tested for bigger nth numbers, you might have noticed that getting the 50th fibonacci number already takes a significant amount of time.

Fortunately, every recursive function can be rewritten as a non-recursive (or procedural) function.

Rewrite your recursive fibonacci function so that it computes its results without using recursion.

Examples:

fibonacci(20);       // 6765
fibonacci(50);       // 12586269025
fibonacci(75);       // 2111485077978050

Note that JavaScript can accurately compute integers up to 16 digits long; this means that fibbonacci(78) is the largest Fibbonacci number that you can accurately compute with simple operations in JavaScript.


ALGORITHM:
- take a number `n` as an argument
- if n is <= 2, return 1
- initialize `num1` to 1
- initialize `num2` to 1
- for n - 2 times
  - add num1 and num2 and set as `sum`
  - reassign `num1` to `num2`
  - reassign `num2` to `sum`
- return `num2`

*/

function fibonacci(n) {
  if (n <= 2) {
    return 1;
  }
  
  let num1 = 1;
  let num2 = 1;
  
  for (let numTimes = 0; numTimes < n - 2; numTimes += 1) {
    let sum = num1 + num2;
    num1 = num2;
    num2 = sum;
  }
  
  return num2;
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050
