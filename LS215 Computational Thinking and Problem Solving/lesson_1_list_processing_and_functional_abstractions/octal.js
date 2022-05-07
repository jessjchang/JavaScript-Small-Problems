function octalToDecimal(numberString) {
  let decimalParts = numberString.split('').map((digitChar, index) => {
    return parseInt(digitChar, 10) * Math.pow(8, numberString.length - index - 1);
  })
  
  return decimalParts.reduce((sum, value) => sum + value);
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9
