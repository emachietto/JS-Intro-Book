function foo(bar) {
  console.log(bar, bar, bar);
}

let bar = foo;
// the call to bar on line 9 needs to call the function foo

foo("hello"); // should print "hello hello hello"
bar("hi");    // should print "hi hi hi"