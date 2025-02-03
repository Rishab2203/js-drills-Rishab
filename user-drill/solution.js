const users = require("./users.js");

const getUsersByInterest = (obj, interest) => {
  let result = [];

  for (let user in obj) {
    if (obj[user].interests[0].split(",").includes(interest)) {
      result.push(user);
    }
  }

  return result;
};
// console.log(getUsersByInterest(users, " Playing Video Games"));

const getUsersByCountry = (obj, country) => {
  let result = [];

  for (let user in obj) {
    if (obj[user].nationality === country) {
      result.push(user);
    }
  }
  return result;
};

// console.log(getUsersByCountry(users, "Germany"));

const getUsersByQualification = (obj, qualification) => {
  let result = [];

  for (let user in obj) {
    if (obj[user].qualification === qualification) {
      result.push(user);
    }
  }
  return result;
};

// console.log(getUsersByQualification(users, "Masters"));

const usersByLanguage = (obj) => {
  let result = { Javascript: [], Python: [], Golang: [] };

  for (let lang in result) {
    for (let user in obj) {
      if (obj[user].desgination.includes(lang)) {
        result[lang] = [...result[lang], user];
      }
    }
  }
  return result;
};
// console.log(usersByLanguage(users));
module.exports = {
  usersByLanguage,
  getUsersByCountry,
  getUsersByInterest,
  getUsersByQualification,
};
