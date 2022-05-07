function repeater(str) {
  let result = '';
  
  for (let index = 0; index < str.length; index++) {
    result += str[index] + str[index];
  }
  
  return result;
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""
