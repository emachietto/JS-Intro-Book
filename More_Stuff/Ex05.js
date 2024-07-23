function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

// what does this do?

// splits the string into an array of words
// reverses the order of those words/elements
// runs map() on the array
  // makes an array of the lengths of the words
// returns the results of map: the new array of lengths