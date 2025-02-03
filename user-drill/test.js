const users = require("./users.js");
const {
  usersByLanguage,
  getUsersByCountry,
  getUsersByInterest,
  getUsersByQualification,
} = require("./solution.js");

console.log(getUsersByInterest(users, " Playing Video Games"));
console.log(getUsersByCountry(users, "Germany"));
console.log(getUsersByQualification(users, "Masters"));
console.log(usersByLanguage(users));
