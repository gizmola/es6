//Structuring assignment
let z = [4, 5, 6];
let [four, five] = z;
console.log(four, five);

let animals = ["Simba", "Zazu", "Ed"];
let [lion, bird] = animals;
console.log(lion, bird);

// Structuring assignment on object
let king = { name: 'Mufasa', wife: 'Sarabi', kids: 1};
let {name, kids} = king;
console.log(name, kids);

let son = {sonName: 'Simba', parents: 2};
let sonName, parents;
// This won't work, due to block scope
// Will get Unexpected token error

//Workaround like so: wrap in parens
({ sonName, parents } = son);
console.log(sonName, parents);
