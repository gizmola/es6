// Generator Iterator
/* Original
function*  arrayIterator2() {
  // Enhanced for loop
  for (let arg of arguments) {
    yield arg;
  }
}
*/
// Simplified
function*  arrayIterator2() {
  yield* arguments;
}


var it2 = arrayIterator2(1, 2, 3);
console.log(it2.next().value);
console.log(it2.next().value);
console.log(it2.next().value);
