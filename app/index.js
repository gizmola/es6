let a = new Map();
let key_1 = "string key";
let key_2 = { a: 'key' };
let key_3 = function() {};
a.set(key_1, 'return value for a string key');
a.set(key_2, 'return value for an object key');
a.set(key_3, 'return value for a function key');
console.log(a);
