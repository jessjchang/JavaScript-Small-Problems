/*
The Fibonacci series is a sequence of numbers in which each number is the sum of the previous two numbers. The first two Fibonacci numbers are 1 and 1. The third number is 1 + 1 = 2, the fourth is 1 + 2 = 3, the fifth is 2 + 3 = 5, and so on. In mathematical terms, this can be represented as:

F(1) = 1
F(2) = 1
F(n) = F(n - 1) + F(n - 2) where n > 2

This simple sequence can easily be computed using a recursive function. A recursive function is one in which the function calls itself. For example, the following function is a recursive function that computes the sum of all integers between 1 and n:

function sum(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + sum(n - 1);
  }
}

A good recursive function has three primary qualities:

It calls itself at least once.
It has an ending condition — e.g., if (n === 1), in the sum function above.
The results of each recursion are used in each step — e.g., n + sum(n - 1) uses sum(n - 1).

Write a recursive function that computes the nth Fibonacci number, where nth is an argument passed to the function.

NOTE: This exercise verges on the Advanced level of exercises, so do not be discouraged if you are not able to solve it on your own; recursion is tricky, and even experienced developers can have difficulty dealing with it.

Examples:

fibonacci(1);       // 1
fibonacci(2);       // 1
fibonacci(3);       // 2
fibonacci(4);       // 3
fibonacci(5);       // 5
fibonacci(6);       // 8
fibonacci(7);       // 13
fibonacci(12);      // 144
fibonacci(20);      // 6765

PROBLEM:
- given a number `n`, find the nth Fibonacci number
- Input: number - integer
- Output: number - integer - Fibonacci number

Rules:
- Fibonacci number: sum of previous two numbers
- first and second Fibonacci numbers are 1 and 1
- third Fibonacci number is 1 + 1 = 2
- fourth Fibonacci number is 1 + 2 = 3
- fifth Fibonacci number is 2 + 3 = 5

F(1) = 1
F(2) = 1
F(3) = 2
F(4) = 3
F(5) = 5
F(6) = 8
F(7) = 13
F(n) = F(n - 1) + F(n - 2) where n > 2

- write a recursive function

ALGORITHM:
- takes number `n` as argument
- if `n` is <= 2 (i.e. 1 or 2), return 1
- otherwise, return the sum of function with (n - 1) and (n - 2) passed in as arguments

*/

function fibonacci(n) {
  if (n <= 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(6));       // 8
console.log(fibonacci(7));       // 13
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765