let call = () => {
  let secret = 'ES6 rocks1';
  let reveal = () => {
    console.log(secret);
  }
  return reveal;
}

// Return a function that includes a closure
let unveil = call();
unveil();
