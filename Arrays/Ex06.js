let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

// determine lengths of elements  => map
// return only odd values  => filter

function oddLengths(arr) {
  let lengths = arr.map(element => element.length);
  return lengths.filter(num => num % 2 === 1);
}


console.log(oddLengths(arr)); // => [1, 5, 3]