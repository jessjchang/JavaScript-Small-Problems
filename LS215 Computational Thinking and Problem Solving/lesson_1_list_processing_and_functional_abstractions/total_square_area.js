function totalArea(arr) {
  let areas = arr.map(subarr => subarr[0] * subarr[1]);
  return areas.reduce((total, area) => total + area);
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles));    // 141


function totalSquareArea(arr) {
  let squares = arr.filter(subarr => subarr[0] === subarr[1]);
  return totalArea(squares);
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalSquareArea(rectangles));    // 121