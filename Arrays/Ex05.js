let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];


// returns array that contains only integers
// use filter
  // returns copy of array with filtered elements

function findIntegers(array) {
  let integers = array.filter(element => Number.isInteger(element));
  return integers;
};

// don't need the let and return; do it at once
function findIntegers(array) {
  return array.filter(function(element) {
    return Number.isInteger(element);
  });
}


let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]