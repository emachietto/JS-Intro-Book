// create object that behaves as an array

let myArray = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3  // didn't have this
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}

// what is the point of this
// especially if we can't guarantee iteration order?
// having a length property also makes the length 4???