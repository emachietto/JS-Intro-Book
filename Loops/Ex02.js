// computes and returns the factorial of a number
// The factorial is the product of all integers between 1 and n
// this sucked for me bc the math IS intimidating

function factorial(num) {
  let result = 1;

  for (let i = num; i > 0; i-- ) {  // you can name this var something helpful
    result = result * i;  // remember *= syntax
  }

  return result;
}


console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320