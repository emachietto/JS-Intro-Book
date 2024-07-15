let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

// add qux property with value of 3
myObj.qux = 3;


// do these produce the same output?
//  it's an issue of ownProperties

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});
// this logs only qux

for (let key in myObj) {
  console.log(key);
}
// this logs qux, foo, bar
// we can make this log only qux by .hasOwnProperty, but can we make Object.keys return inherited props?