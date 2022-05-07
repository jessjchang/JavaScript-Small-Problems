function sum(num) {
  let digits = String(num).split('').map(el => Number(el));
  return digits.reduce((total, el) => total + el);
}

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45
