let rlSync = require('readline-sync');


function getName(prompt) {
  let name = rlSync.question(prompt);
  return name;
}

// separate invocations, so run function twice to get names
let firstName = getName("What's your first name?\n");
let lastName = getName("What's your last name?\n");

let greeting = `Hello, ${firstName} ${lastName}.`;
console.log(greeting);