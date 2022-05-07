function repeatedCharacters(str) {
  str = str.toLowerCase();
  
  let result = {};
  
  for (let index = 0; index < str.length; index++) {
    let char = str[index];

    if (char in result) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  }
  
  for (let key in result) {
    if (result[key] < 2) {
      delete result[key];
    }
  }
  
  return result;
  
}

repeatedCharacters('Programming');    // { r: 2, g: 2, m: 2 }
repeatedCharacters('Combination');    // { o: 2, i: 2, n: 2 }
repeatedCharacters('Pet');            // {}
repeatedCharacters('Paper');          // { p: 2 }
repeatedCharacters('Baseless');       // { s: 3, e: 2 }
