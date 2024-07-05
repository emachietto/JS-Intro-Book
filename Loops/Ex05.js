function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// let tries = 0;
// let result = randomNumberBetween(1, 6);
// tries += 1;

// while (result <= 2) {
//   result = randomNumberBetween(1, 6);
//   tries += 1;
// }

// console.log('It took ' + String(tries) + ' tries to get a number greater than 2');


let tries = 0;
let result; // couldn't figure this out
            // would throw error saying result on 26 not defined
            // didn't think how to define it without calling it twice
            // but you can declare global variables without a value!

do {
  result = randomNumberBetween(1, 6);
  tries += 1;
} while (result <= 2);

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');