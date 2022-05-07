function allMatches(arr, regex) {
  let matches = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (regex.test(arr[index])) {
      matches.push(arr[index]);
    }
  }

  return matches;
}

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']