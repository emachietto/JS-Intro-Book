
let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

function copyObj(parentObj, arrayOfKeys) {
  
  let newObj = Object.assign({}, parentObj);

  if (arrayOfKeys) {
    let filteredObj = {};
    arrayOfKeys.forEach(function(key) {
      filteredObj[key] = parentObj[key];
    });
    return filteredObj;
  }

  return newObj;
}


let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }



// my first attempt
function copyObj(parentObj, arrayOfKeys) {

  let newObj = Object.assign({}, parentObj);

  // i wanted this to remove non-listed properties from the copied newObj
  //  obvs doesn't work bc it doesn't iterate over non-listed keys TO delete them
  // hand-making whole new properites wasn't my first instinct as a solution
  //  basically i wanted an object version of .push();
  if (arrayOfKeys) {
    let filteredObj = arrayOfKeys.forEach(function(key) {
      if (!newObj[key]) {
        delete newObj[key];
      }
    });

    return filteredObj;  // undefined
  };


  return newObj;
}
