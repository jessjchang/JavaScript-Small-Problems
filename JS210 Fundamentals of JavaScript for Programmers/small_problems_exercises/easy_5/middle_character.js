function centerOf(str) {
  let length = str.length;
  let center = Math.floor(str.length / 2);

  if (length % 2 === 1) {
    return str[center];
  } else {
    return str[center - 1] + str[center];
  }
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"
