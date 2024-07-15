function hello(greeting, name) {
  return greeting + ' ' + name;
}

function xyzzy() {
  return { a: 1, b: 2, c: [3, 4, 5], d: {} };
}

const howdy = hello('Hi', 'Grace');
let foo = xyzzy();

// identify: variables, object property names, primitive values, objects

// variables:
  // hello, greeting, name
  // xyzzy, howdy, hello, foo

// object property names:
  // a, b, c, d
  // undefined (index of d's object???)  // apparently not
  // (do indexes count?) 0, 1, 2  // yes

// primitive values:
  // 1, 2, 3, 4, 5
  // missed all of the strings! and properties
    // ' ', 'Hi', 'Grace', string values of object properties, num values of indexes

// objects:
  // hello
  // xyzzy, it's return value {} and that's inner array and object at c and d
  // howdy and foo???? since they're aliases for functions???  // no