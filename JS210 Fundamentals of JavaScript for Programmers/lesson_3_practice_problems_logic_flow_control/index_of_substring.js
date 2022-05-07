function indexOf(firstString, secondString) {
  let firstStringLength = firstString.length;
  let secondStringLength = secondString.length;

  for (let firstIndex = 0; firstIndex <= firstStringLength - secondStringLength; firstIndex++) {
    let secondIndex = 0;
    let matchingCharCount = 0;
    let firstIndexCheck = firstIndex;

    while (secondIndex < secondStringLength) {
      if (firstString[firstIndexCheck] === secondString[secondIndex]) {
        matchingCharCount += 1;
      }

      firstIndexCheck += 1;
      secondIndex += 1;
    }

    if (matchingCharCount === secondStringLength) {
      return firstIndex;
    }
  }

  return -1;
}

function lastIndexOf(firstString, secondString) {
  let firstStringLength = firstString.length;
  let secondStringLength = secondString.length;

  for (let firstIndex = firstStringLength - secondStringLength; firstIndex >= 0; firstIndex--) {
    let secondIndex = 0;
    let matchingCharCount = 0;
    let firstIndexCheck = firstIndex;

    while (secondIndex < secondStringLength) {
      if (firstString[firstIndexCheck] === secondString[secondIndex]) {
        matchingCharCount += 1;
      }

      firstIndexCheck += 1;
      secondIndex += 1;
    }

    if (matchingCharCount === secondStringLength) {
      return firstIndex;
    }
  }

  return -1;
}

indexOf('Some strings', 's');                      // 5
indexOf('Blue Whale', 'Whale');                    // 5
indexOf('Blue Whale', 'Blute');                    // -1
indexOf('Blue Whale', 'leB');                      // -1

lastIndexOf('Some strings', 's');                  // 11
lastIndexOf('Blue Whale, Killer Whale', 'Whale');  // 19
lastIndexOf('Blue Whale, Killer Whale', 'all');    // -1


// Further Exploration

function indexOf(firstString, secondString) {
  let limit = firstString.length - secondString.length;

  for (let indexFirst = 0; indexFirst <= limit; indexFirst += 1) {
    let matchCount = 0;

    for (let indexSecond = 0; indexSecond < secondString.length; indexSecond += 1) {
      if (firstString[indexFirst + indexSecond] === secondString[indexSecond]) {
        matchCount += 1;
      } else {
        break;
      }
    }

    if (matchCount === secondString.length) {
      return indexFirst;
    }
  }

  return -1;
}

function lastIndexOf(firstString, secondString) {
  firstString = firstString.split('').reverse().join('');
  secondString = secondString.split('').reverse().join('');

  let index = indexOf(firstString, secondString);

  if (index === -1) {
    return index;
  } else {
    return firstString.length - secondString.length - index;
  }
}

indexOf('Some strings', 's');                      // 5
indexOf('Blue Whale', 'Whale');                    // 5
indexOf('Blue Whale', 'Blute');                    // -1
indexOf('Blue Whale', 'leB');                      // -1

lastIndexOf('Some strings', 's');                  // 11
lastIndexOf('Blue Whale, Killer Whale', 'Whale');  // 19
lastIndexOf('Blue Whale, Killer Whale', 'all');    // -1
