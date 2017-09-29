let obj = {
  a: 'one',
  b: 'two',
  c: 'three'
}

// Current method
let keys = Object.keys(obj);
console.log(keys);

//ES8 access to values
let values = Object.values(obj);
console.log(values);

let entries = Object.entries(obj);
console.log(entries);

// extended for loop example

for (let entry of entries) {
  console.log(`key: ${entry[0]}, value: ${entry[1]}`);
}
