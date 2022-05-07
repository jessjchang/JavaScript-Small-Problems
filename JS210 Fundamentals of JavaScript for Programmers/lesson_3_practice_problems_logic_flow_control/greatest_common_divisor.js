// Loop

function gcd(num1, num2) {
  let smallerNum = num1 <= num2 ? num1 : num2;

  while (smallerNum >= 1) {
    if (num1 % smallerNum === 0 && num2 % smallerNum === 0) {
      return smallerNum;
    }

    smallerNum -= 1;
  }
}

gcd(12, 4);   // 4
gcd(15, 10);  // 5
gcd(9, 2);    // 1

// Euclid's algorithm

function gcd(num1, num2) {
  while (num1 > 0 && num2 > 0) {
    let smallerNum = num1 <= num2 ? num1 : num2;
    let biggerNum = num1 > num2 ? num1 : num2;

    num1 = biggerNum % smallerNum;
    num2 = smallerNum;
  }

  return num1 || num2;
}

gcd(12, 4);   // 4
gcd(15, 10);  // 5
gcd(9, 2);    // 1

// Recursive solution

function gcd(num1, num2) {
  if (num2 === 0) {
    return num1;
  } else {
    return gcd(num2, num1 % num2);
  }
}

gcd(12, 4);   // 4
gcd(15, 10);  // 5
gcd(9, 2);    // 1


// Further Exploration
function gcdTwoNums(num1, num2) {
  var temp;

  while (num2 !== 0) {
    temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }

  return num1;
}

function gcd(arr) {
  let gcd = arr.pop();

  while (arr.length > 0) {
    gcd = gcdTwoNums(gcd, arr.pop());
  }

  return gcd;
}

gcd([12, 4, 8]); // 4
