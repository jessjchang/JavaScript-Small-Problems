function isBalanced(str) {
  let parenCount = 0

  for (let index = 0; index < str.length; index += 1) {
    if (str[index] === '(') {
      parenCount += 1;
    } else if (str[index] === ')') {
      parenCount -= 1;
    }
    
    if (parenCount < 0) {
      return false;
    }
  }
  
  if (parenCount === 0) {
    return true;
  } else {
    return false;
  }
}

isBalanced('What (is) this?');        // true
isBalanced('What is) this?');         // false
isBalanced('What (is this?');         // false
isBalanced('((What) (is this))?');    // true
isBalanced('((What)) (is this))?');   // false
isBalanced('Hey!');                   // true
isBalanced(')Hey!(');                 // false
isBalanced('What ((is))) up(');       // false
