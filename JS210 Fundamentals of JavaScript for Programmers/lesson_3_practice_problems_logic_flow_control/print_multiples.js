function logMultiples(number) {
  for (let currentNum = 100; currentNum >= 0; currentNum--) {
    if (currentNum % number === 0 && currentNum % 2 === 1) {
      console.log(currentNum);
    }
  }
}

logMultiples(17);

logMultiples(21);

// Further Exploration

function logMultiples(number) {
  let currentNum = Math.floor(100 / number) * number;

  while (currentNum >= number) {
    if (currentNum % 2 === 1) {
      console.log(currentNum);
    }

    currentNum -= number;
  }
}

logMultiples(17);

logMultiples(21);