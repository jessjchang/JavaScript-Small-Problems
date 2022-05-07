function staggeredCase(str) {
  let toUpperCase = true;
  let correctChar;

  return str.split('').map(char => {
    if (/[a-z]/i.test(char)) {
      correctChar = toUpperCase ? char.toUpperCase() : char.toLowerCase();
      toUpperCase = !toUpperCase;
      return correctChar;
    } else {
      return char;
    }
  }).join('');
}

staggeredCase('I Love Launch School!');        // "I lOvE lAuNcH sChOoL!"
staggeredCase('ALL CAPS');                     // "AlL cApS"
staggeredCase('ignore 77 the 444 numbers');    // "IgNoRe 77 ThE 444 nUmBeRs"
