let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];


function doesContain(element, obj) {
  console.log(obj.includes(element));
};

doesContain(3, numbers1);
doesContain(3, numbers2);
doesContain(3, numbers3);