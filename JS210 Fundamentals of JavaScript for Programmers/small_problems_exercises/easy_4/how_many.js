function countOccurrences(arr) {
  let counts = findCounts(arr);

  for (let count in counts) {
    console.log(`${count} => ${counts[count]}`);
  }
}
       
function findCounts(arr) {
  let counts = {};
  
  for (let index = 0; index < arr.length; index++) {
    let word = arr[index];
    
    if (!counts[word]) {
      counts[word] = 0;
    }
    
    counts[word] += 1;
  }
    
  return counts;
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
