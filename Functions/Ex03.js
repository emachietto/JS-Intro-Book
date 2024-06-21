
let rlSync = require('readline-sync');

let multiply = (num1, num2) => num1 * num2;

// // let num1 = rlSync.question('Enter the first number: ');
// // let num2 = rlSync.question('Enter the second number: ');
//   // these return strings! which will be coerced, but open for errors

// let num1 = Number(rlSync.question('Enter the first number: '));
// let num2 = Number(rlSync.question('Enter the second number: '));

// console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`);


// function to get a single number
// wanna practice arrow functions
let getNumber = prompt => Number(rlSync.question(prompt));

let num1 = getNumber('Enter the first number: ');
let num2 = getNumber('Enter the second number: ');

console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`);