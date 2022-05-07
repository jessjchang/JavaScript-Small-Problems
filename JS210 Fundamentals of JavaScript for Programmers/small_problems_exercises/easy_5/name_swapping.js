function swapName(str) {
  return str.split(' ').reverse().join(', ');
}

swapName('Joe Roberts');    // "Roberts, Joe"

// Further Exploration
function swapName(str) {
  let names = str.split(' ')
  let firstName = names.slice(0, -1).join(' ');
  let lastName = names[names.length - 1];
  
  return lastName + ', ' + firstName;
}

console.log(swapName('Joe Roberts') === "Roberts, Joe");    // "Roberts, Joe"
console.log(swapName('Joe John Roberts') === "Roberts, Joe John");    // "Roberts, Joe John"
