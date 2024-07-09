let array = [3, 5, 7];

// passing a second param to reduce itself was hard to conceptualize
// kept putting initial value with the cbf parameters
  // diff names would help, probs?

function sumOfSquares(arr) {
  return arr.reduce(function(accumulator, currentValue) {
    return accumulator + (currentValue * currentValue);
  }, 0);
};

console.log(sumOfSquares(array)); // => 83
