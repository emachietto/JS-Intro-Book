function evenOrOdd(num) {
  if (typeof num !== 'number') {
    console.log('Input is not a number');
    return;
  }
  // solution uses Number.isInteger()

  if (num % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
};

evenOrOdd(2);
evenOrOdd(3);
evenOrOdd('3');
evenOrOdd(Math.PI);
  // ex said 'assume integer input' but why risk it tbh