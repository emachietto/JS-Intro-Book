// given list of numbers:
  // find and display largest numeric value
//


// assuming the 'list of numbers' is an array, though!
function findLargestNum(numbers) {
  let largest = numbers[0];

  // also don't like this bc the first iteration is pointless
  // but couldn't figure out a manual loop
  numbers.forEach(function(num) {
    if (num > largest) {
      largest = num;
    };
  });

  return largest;
};

// if list is not an array?
//  could this even be possible with only one paramter?
//  numbers.toArray()?


let list1 = [1, 6, 3, 2];   // 6
let list2 = [-1, -6, -3, -2];   // -1
let list3 = [2, 2];   // 2

console.log(findLargestNum(list1));
console.log(findLargestNum(list2));
console.log(findLargestNum(list3));


// lmao OKAY they just wanted Math.max()
// which does indeed solve the 'not an array' issue
// and is, you know, much easier lol
// (also suggested .sort as a convoluted solution but i didn't even consider that)