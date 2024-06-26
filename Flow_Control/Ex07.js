function allCaps(str) {
  if (str.length < 10) {
    return str;
  } else {
    return str.toUpperCase()
  }
}

// make a terniary
function allCaps(str) {
  return ((str.length < 10) ? str : str.toUpperCase());
}

console.log(allCaps('hello world'));
console.log(allCaps('goodbye'));