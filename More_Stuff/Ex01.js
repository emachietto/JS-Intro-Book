let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

// what does this log to the console? why?

// it logs [1, 4, 3]
// the assignment of array2 on line 2 is to a pointer, not a value
// the reassignment of index 1 on line 3 does not reference a new array
  // the pointer is the same although the value is changed
// logging array2 will log the new array value, since the pointer is unchanged