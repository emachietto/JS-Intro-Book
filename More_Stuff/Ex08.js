// write a function that returns true is value is NaN, false otherwise
// do not use Number.isNaN() or Object.is()


// cheated on this by reading MDN which gave you this expression
// NaN does not equal NaN, the only value to not strictly equal itself
function isNaN(val) {

  if (val !== val) {
    return true;
  } else {
    return false;
  }

  // make this much cleaner by explicit return: 'return val !== val'
};



// first attempt
function isNaN(val) {

  // exclude all other values besides number
  if (typeof val !== 'number') {
    return false;
  }

  // wanted to get rid of actual numbers, but this does nothing for floats or non-integers :/
  if (Number.isInteger(val) === true) {
    return false;
  }

  // and then couldn't figure out how to narrow it down further

};


console.log(isNaN(5));
console.log(isNaN(NaN));
console.log(isNaN('a string'));
