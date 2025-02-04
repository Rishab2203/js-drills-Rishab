const {
  defaults,
  keys,
  values,
  pairs,
  invert,
  mapObject,
} = require("./solution.js");

const testObject = {
  name: "Bruce Wayne",
  age: 36,
  location: "Gotham",
  village: undefined,
};

//////////////////////////////////////////////////

console.log(keys(testObject));

/////////////////////////////////////////////////////

console.log(values(testObject));

///////////////////////////////////////////////////////

console.log(mapObject(testObject, (val) => val + 1));

/////////////////////////////////////////////////////////

console.log(pairs(testObject));

//////////////////////////////////////////////////

console.log(invert(testObject));

/////////////////////////////////////////////////////
console.log(
  defaults(testObject, { state: "Delhi", police: true, village: "rampur" })
);
