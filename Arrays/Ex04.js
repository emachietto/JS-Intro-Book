let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];


// use .map() to add 'even' or 'odd' to new array

let newArray = myArray.map(function(element) {
  if (element % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  };
});

// cluttered af---ternary?
// should this be two lines?
let newArray = myArray.map(element => (element % 2 === 0) ? 'even' : 'odd');

console.log(newArray);