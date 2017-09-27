let call = () => {
  let secret = 'ES6 rocks1';
  let reveal = () => {
    console.log(secret);
  }
  reveal();
}
// Can't access secret
//console.log(secret)
// But you can still execute it to get at the data in the closure
call();
