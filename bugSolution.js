function foo(a, b) {
  if (Object.is(a, b)) {
    return true;
  }
  return false;
}

console.log(foo(NaN, NaN)); // true
console.log(foo(0, -0)); // false

function fooStrict(a, b) {
  if (a === b) {
    return true;
  }
  return false;
}
console.log(fooStrict(NaN, NaN)); // false
console.log(fooStrict(0, -0)); //true 