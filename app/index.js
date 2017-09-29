let p = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Resolved promise data'), 5000);
  //reject('Rejected promise data');
})
p.then(response => console.log(response))
.catch(error => console.log(error));

console.log('after promise consumption');
