function foo(bar) {
  console.log(bar());
}

// logging the return value of function bar
// right now, bar() is undefined
  // the value of the bar argument needs to be a function
  // calls to foo must be passed a function
//


foo(() => 'Welcome');    // Should print 'Welcome'
foo(() => 3.1415);    // Should print 3.1415
foo(() => [1, 2, 3]);    // Should print [1, 2, 3]


// this confused me bc i think about it in the wrong direction
  // like how can you just MAKE something a function by adding () to the end
  // but it's bc by the time you write foo, you KNOW it's going to be a function
    // would help to name the param 'FUNCTION' instead of BAR :/