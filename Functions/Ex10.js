// 1: multiply (global), left, right (local)
// 2: product (local), left, right (local)
// 3: product (local)
// 6: getNumber (global), prompt (local)
// 7: parseFloat (global), question (global), prompt (local)
// 10: left (global), getNumber (global)
// 11: right (global), getNumber (global)
// 12: console (global), multiply (global), left, right (global)

//clearer:

// global: multiply, getNumber, parseFloat, question, right, left, console
// local: left, right (lines 1-2) product, prompt