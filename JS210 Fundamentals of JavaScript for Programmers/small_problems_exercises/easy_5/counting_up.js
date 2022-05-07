function sequence(int) {
  let result = [];
  let startingNum = 1;
  
  do {
    result.push(startingNum);
    startingNum += 1;
  } while (startingNum <= int);
  
  return result;
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]
