function allMatches(words, regEx) {

  let matches = [];

  words.forEach(function(string){
    if (regEx.test(string)) {
      matches.push(string);
    };
  });

  return matches;
};

// .filter()! here instead of forEach or loop
// filter returns an array of only the elements that pass the conditional
//  return words.filter((string) => regEx.test(string));


let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']


