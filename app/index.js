/**
 Function declaration

function cheer() {
  console.log("Woohoo!");
}
**/

// Anonymous function expression
var cheer = function cheer() {
  console.log("Woohoo!");
}
cheer();

setTimeout(function() {
  console.log("The British are Coming");
}, 3000);

//ES6 Arrow Function
setTimeout(() => {
  console.log("The British are Still coming");
}, 3000);

// Arrow function assignment
let cheer2 = () => {
  console.log("Go Team Go");
}

cheer2();
