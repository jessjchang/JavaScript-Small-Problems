function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let divisor = 2; divisor < num; divisor++) {
    if (num % divisor === 0) {
      return false;
    }
  }

  return true;
}

isPrime(1);   // false
isPrime(2);   // true
isPrime(3);   // true
isPrime(43);  // true
isPrime(55);  // false
isPrime(0);   // false
