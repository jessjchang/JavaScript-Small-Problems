function reverse(inputForReversal) {
  if (Array.isArray(inputForReversal)) {
    return reverseArray(inputForReversal);
  } else {
    return reverseString(inputForReversal);
  }
}

function reverseArray(inputForReversal) {
  const reversed = [];
  const length = inputForReversal.length;

  for (let i = 0; i < length; i += 1) {
    reversed[length - 1 - i] = inputForReversal[i];
  }

  return reversed;
}

function reverseString(inputForReversal) {
  const stringArray = inputForReversal.split('');
  return reverseArray(stringArray).join('');
}

reverse('Hello');           // "olleH"
reverse('a');               // "a"
reverse([1, 2, 3, 4]);      // [4, 3, 2, 1]
reverse([]);                // []

const array = [1, 2, 3];
reverse(array);             // [3, 2, 1]
array;                      // [1, 2, 3]
