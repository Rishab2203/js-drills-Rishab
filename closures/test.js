const {
  cacheFunction,
  limitFunctionCallCount,
  counterFactory,
} = require("./solution.js");

//////////////////////////////////////////////////////////////////////
console.log(counterFactory().increment());

/////////////////////////////////////////////////////////////////////
const func = limitFunctionCallCount(() => "HI", 3);
for (let i = 0; i < 5; i++) {
  console.log(func());
}

/////////////////////////////////////////////////////////////////////

let sum = cacheFunction((a, b) => {
  return a + b;
});

console.log(sum(5, 6));

console.log(sum(5, 6));

console.log(sum(5, 6));

console.log(sum(5, 6));
