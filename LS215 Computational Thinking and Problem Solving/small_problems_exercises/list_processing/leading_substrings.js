function leadingSubstrings(str) {
  return str.split('').map((el, index) => str.slice(0, index + 1));
}

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
