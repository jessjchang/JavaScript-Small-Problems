function wordSizes(str) {
  let result = {};
  
  if (str.length <= 0) {
    return result;
  }
  
  str.split(' ').forEach(word => {
    let length = String(cleanUpWord(word).length);

    if (result[length] === undefined) {
      result[length] = 0;
    }
    
    result[length] += 1;
  });
  
  return result;
}

function cleanUpWord(str) {
  return str.replace(/[^a-z]/ig, '');
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "5": 1, "2": 1, "3": 1 }
wordSizes('');                                            // {}
