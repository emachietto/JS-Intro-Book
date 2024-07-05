// reimplement using recursion

function factorial(num) {

  let result = 1;

  for (let counter = num; counter > 0; counter-- ) {
    result *= counter;
  }

  return result;
}

// best try, clearly wrong
function factorial(num) {
  // factorial of 1 is always 1 => how to use this
  // num * (num - 1) is repeating logic

  let result = 0;

  while (num > 0) {
    result = result + (num * num - 1);
    num--;

    factorial(num);
 };

 return result;

}


function factorial(num) {
  if (number === 1) {
    return 1;
  }

  return number * factorial(num -1);
}

console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320