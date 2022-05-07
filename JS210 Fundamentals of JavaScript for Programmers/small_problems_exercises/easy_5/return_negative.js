function negative(num) {
  if (num >= 0) {
    return num * -1;
  } else {
    return num;
  }
}

negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0

// Further Exploration
function negative(num) {
  return num < 0 ? num : num * -1;
}
