function concat(...args) {
  let result = [];
  
  for (let index = 0; index < args.length; index++) {
    if (Array.isArray(args[index])) {
      for (let index2 = 0; index2 < args[index].length; index2++) {
        result.push(args[index][index2]);
      }
    } else {
      result.push(args[index]);
    }
  }
  
  return result;
}

concat([1, 2, 3], [4, 5, 6], [7, 8, 9]);    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
concat([1, 2], 'a', ['one', 'two']);        // [1, 2, "a", "one", "two"]
concat([1, 2], ['three'], 4);               // [1, 2, "three", 4]
