function wordSizes(str) {
  let result = {};
  
  if (str.length <= 0) {
    return result;
  }
  
  str.split(' ').forEach(word => {
    let length = String(word.length);

    if (result[length] === undefined) {
      result[length] = 0;
    }
    
    result[length] += 1;
  });
  
  return result;
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}
