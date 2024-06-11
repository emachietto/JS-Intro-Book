//get individual digits of 4936

let num = 4936;

let ones = num % 10;  // 6
num = (num - ones) / 10;  // 493

let tens = num % 10;  // 3
num = (num - tens) / 10;  // 49

let hundreds = num % 10;  // 9
num = (num - hundreds) / 10;  // 4
//i prefer the consistency of reassigning num each time

let thousands = num;



// must be a way to loop this

function getDigits(num) {

  let placeValues = [];
  
  while (num > 9) {
    let placeValue = num % 10;
    placeValues.push(placeValue);
    num = (num - placeValue) / 10;
  } 

  if (num < 10) {
    placeValues.push(num);
  }

  console.log(placeValues);
}

getDigits(4936);
getDigits(29463846);