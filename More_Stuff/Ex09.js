// 0 and -0 are distinct values in JS
// BUT they are strictly equal
// Object.is() will differentiate them

// write a fuction that returns true if the arg is -0, false if 0 or other num

function isNegZero(val) {

  // dividing things by -0 or -Infinity???
    // dividing 0/-0 by 0/-0 returns NaN??? apparently??
  // two negatives = pos; one of each = neg

  // narrow it down to either 0 or -0
  if (val > 0 || val < 0) {
    return false;
  }

  // this STILL presents the strict equality issue though
  if (val / -Infinity === -0) {
    return false;
  }

};


// yeah so almost! instead of dividing by Infinity and checking against a zero value, divide by 0 and check Infinity
// did NOT intuit hardcoding the '1' (or other) number into the expression
  // and then didn't think of it coming from the passed val already being 0 or -0
    // like i get that it works with other numbers, but it seemed too broad at the start
    // (hence my logic on line 13-16)
//

function isNegZero(val) {
  return (1 / val === -Infinity);
};

console.log(isNegZero(5));
console.log(isNegZero(-1));
console.log(isNegZero(0));
console.log(isNegZero(-0));