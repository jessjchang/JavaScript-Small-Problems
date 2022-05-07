function isXor(firstCondition, secondCondition) {
  if (firstCondition && !secondCondition) {
    return true;
  } else if (!firstCondition && secondCondition) {
    return true;
  } else {
    return false;
  }
}

isXor(false, true);     // true
isXor(true, false);     // true
isXor(false, false);    // false
isXor(true, true);      // false


isXor(false, 3);        // true
isXor('a', undefined);  // true
isXor(null, '');        // false
isXor('2', 23);         // false
