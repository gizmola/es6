const addFactory = x => y => y + x;

const add50 = addFactory(50);
console.log(add50(100));
const add30 = addFactory(30);
console.log(add30(75));
