import {
  getEmails,
  getHobbies,
  getAges,
  getNameAndCity,
  getfirstHobby,
  getNameAndEmailByAge,
  getcityAndCountry,
  getStudents,
} from "./solution.js";

import arrayOfObjects from "./persons.js";

/////////////////////////////////////////////////////////////////
console.log(getEmails(arrayOfObjects));

//no agrument passed
console.log(getEmails());

//Invalid array passed

console.log(getEmails("test"));

///////////////////////////////////////////////////////////////

console.log(getHobbies(arrayOfObjects, 30));

// no argument passed
console.log(getHobbies());

//anyone argument passed
console.log(getHobbies(arrayOfObjects));
console.log(getHobbies("", 34));

//person of age not found
console.log(getHobbies(arrayOfObjects, 90));

////////////////////////////////////////////////////////////
console.log(getStudents(arrayOfObjects, "Australia"));

// NO student found
console.log(getStudents(arrayOfObjects, "Turkey"));

//Invalid input

console.log(getStudents("array", "Turkey"));

////////////////////////////////////////////////////////////

console.log(getNameAndCity(arrayOfObjects, 3));

// Invvalid index
console.log(getNameAndCity(arrayOfObjects, 50));

///////////////////////////////////////////
getAges(arrayOfObjects);

//////////////////////////////////////////
console.log(getfirstHobby(arrayOfObjects));

//////////////////////////////////////////////
console.log(getNameAndEmailByAge(arrayOfObjects, 25));

////person of provided age not present in data
console.log(getNameAndEmailByAge(arrayOfObjects, 56));

/////////////////////////////////////////
console.log(getcityAndCountry(arrayOfObjects));
