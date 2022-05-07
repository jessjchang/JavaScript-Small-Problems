function evenOrOdd(number) {
  if (!Number.isInteger(number)) {
    console.log('The argument must be an integer.');
    return;
  }

  if (number % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

evenOrOdd(4);
evenOrOdd(5);
evenOrOdd('4');