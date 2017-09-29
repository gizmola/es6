let p = new Promise((resolve, reject) => {
  //resolve('Resolved promise data');
  reject('Rejected promise data');
})
p.then(response => console.log(response))
.catch(error => console.log(error));
