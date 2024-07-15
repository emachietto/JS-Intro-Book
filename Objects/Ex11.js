let obj = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};

// replace value 6 with 606

obj.bar[3].xyz = 606;

console.log(obj);


// tried this first:
obj[bar][3].xyz = 6;  // forgot that keys are strings! need ['bar']
