let age = Number(require('readline-sync').question('How old are you?\n'));
// wanted to do it w/out a var for fun/practice

// function calculateFutureAge(age) {
//   console.log(`You are ${age} years old.`);
//   console.log(`In 10 years, you will be ${age + 10} years old.`);
//   console.log(`In 20 years, you will be ${age + 20} years old.`);
//   console.log(`In 30 years, you will be ${age + 30} years old.`);
//   console.log(`In 40 years, you will be ${age + 40} years. old`);
// };

function calculateFutureAge(age, num) {
  console.log(`You are ${age} years old.`);

  for (let num = 10; num <= 40; num += 10) {
    console.log(`In ${num} years, you will be ${age + num} years old.`);
  }
};

calculateFutureAge(age);