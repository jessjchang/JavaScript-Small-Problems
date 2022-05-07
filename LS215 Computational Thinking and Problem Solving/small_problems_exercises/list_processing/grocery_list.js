function buyFruit(arr) {
  return arr.reduce((result, subarr) => {
    let expanded = expandArray(subarr);
    return result.concat(expanded); 
  }, []);
}

function expandArray(arr) {
  let result = [];

  for (let time = 0; time < arr[1]; time += 1) {
    result.push(arr[0]);
  }
  
  return result;
}

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
