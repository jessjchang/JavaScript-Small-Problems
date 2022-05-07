function halvsies(arr) {
  let firstHalf = arr.slice(0, Math.ceil(arr.length / 2));
  let secondHalf = arr.slice(Math.ceil(arr.length / 2));
  
  return [firstHalf, secondHalf];
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]
