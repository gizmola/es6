let values = [20, 30, 40];

let double = (n) => {
  return n*2;
}

// Using map
let doubled = values.map(double);
console.log(doubled);

// Equivalent to
let doubled2 = values.map((n) => {
  return n*2;
});
console.log(doubled2);

//Equivalent to
// Note that return is assumed now
let doubled3 = values.map((n) => n*2);
console.log(doubled3);
