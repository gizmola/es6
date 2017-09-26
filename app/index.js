const addToCart = (item, number) => {
  return Number.isFinite(number);
}

console.log(addToCart('shirt', Infinity));

console.log(addToCart('shirt', Math.pow(2, 54)));
