// write code to output square root of 37

// probably asking something simple like:

let squareRoot = Math.sqrt(37);
console.log(squareRoot);

// but i wanna do something useful like:

function squareRoot(num) {
  return Math.sqrt(num);
};

// or, more simply:

let squareRoot = num => Math.sqrt(num);

console.log(squareRoot(37));
console.log(squareRoot(284));