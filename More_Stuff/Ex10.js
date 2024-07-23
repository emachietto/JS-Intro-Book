
let x = '5';
x = x + 1;    // x = '51'

let y = '5';
y++


// what does line 6 return, and why?

// returns the number 5
  // y will be coerced to number 5 because ++ needs a number value
  // the return value of the ++ incrementer is the value BEFORE the incrementation
// hence the difference between ++(--) and +=(-=)