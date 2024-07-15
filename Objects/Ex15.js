function bar(arg1, arg2) {
  let foo = 'Hello';
  const qux = {
    abc: [1, 2, 3, [4, 5, 6]],
    def: null,
    ghi: NaN,
    jkl: foo,
    mno: arg1,
    pqr: arg2,
  };

  return qux;
}

let result = bar('Victor', 'Antonina');

// variables:
  // bar, arg1, arg2, foo, qux, result

// property names:
  // the letter trios in qux (6 of them)
  // the numer indexes of both arrays (0-3) (0-2)

// primitive values:
  // 'Hello', the 6 prop names of qux
  // number values of both 'abc' arrays (1-6), their indices
  // null, NaN, 'Victor', 'Antonia'

// objects:
  // bar, qux, both arrays of 'abc'