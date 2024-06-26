function numRange(num) {
  if (num > 100) {
    console.log(`${num} is greater than 100`);
  } else if (num > 50) {
    console.log(`${num} is between 51 and 100`);
  } else if (num >= 0) {
    console.log(`${num} is between 0 and 50`);
  } else {
    console.log(`${num} is less than 0`);
  }
}

// so i did this backwards but i don't think???? it matters
  // first and last conditional narrow the range the same way
// using <= instead of > DOES make the inclusive bit more obvious

numRange(100);
numRange(50);
numRange(25);
numRange(75);
numRange(125);
numRange(-25);