let a = [20, 30, 40];
let b = [10, ...a, 50];
console.log(b);
{
  let a = ['Bob', 'Carol', 'Frank'];
  let b = ['Mark', 'Sam', 'William', ...a];
  console.log(b);
}

function collect(...a) {
  console.log(a);
}

collect(1, 2, 3, 4, 5);
collect(3, 6, 9, 77);
