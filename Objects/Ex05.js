let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

console.log(myObj);  // logs an empty obj which i don't like!
