let numArr = [[1, 'one'],[2, 'two'], [3, 'three']];
let valMap = new Map(numArr);
// Iterate through Map
for (let [key, value] of valMap.entries()) {
  console.log(`${key} points to ${value}`);
}

let string = 'aqewrjqalkjflajvnvcfdlkjaewrwrefljav';
let letters = new Map();
for (let i=0; i<string.length; i++) {
  let letter = string[i];
  if (!letters.has(letter)) {
    letters.set(letter, 1);
  } else {
    letters.set(letter, letters.get(letter) + 1);
  }
}
console.log(letters);
