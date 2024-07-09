
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(arr) {
  return arr.reduce(function(accumulator, currentValue) {
    if (currentValue.length % 2 === 1) {
      accumulator.push(currentValue.length);
    };

    return accumulator;
  }, []);
}

// my mistake keeps being lack of explicit return value for cbf
//   i want the whole thing to return when i return reduce
//   but reduce returns the RETURN VALUE of the cbf
//     in this case, i omitted line 10 and was ???? at 'cannot read properties of 'push'
