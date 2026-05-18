// variable hoisting

console.log(a);
const a=10;
console.log(a);

// not hoisted

console.log(b);
let b=3;
console.log(b);