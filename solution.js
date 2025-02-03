const getEmails = (arr) => {
  if (arr === undefined) {
    return "No input provided.";
  }
  if (!Array.isArray(arr)) {
    console.log("Invalid Argument.Please provide an array.");
    return [];
  }
  if (arr.length === 0) {
    console.log("Empty array provided.");
    return [];
  }

  const emails = arr.map((person) => person.email);
  if (emails.length === 0) {
    return "NO Emails Found";
  }
  return emails;
};

const getHobbies = (arr, age) => {
  if (arr === undefined && age === undefined) {
    return "No Input Provided";
  }
  if (!Array.isArray(arr) && typeof age === "Number") {
    return "Please provide an valid array";
  }
  if (Array.isArray(arr) && typeof age !== "Number") {
    return "Please provide an valid age";
  }
  let persons = arr.filter((person) => person.age === age);

  persons = persons.map((person) => person.hobbies);

  return persons;
};

const getStudents = (arr, country) => {
  if (arr === undefined && country === undefined) {
    return "No Input Provided";
  }
  if (!Array.isArray(arr) && typeof country === "String") {
    return "Please provide an valid array";
  }
  if (Array.isArray(arr) && typeof country !== "String") {
    return "Please provide an valid country";
  }
  let students = arr.filter(
    (person) => person.isStudent && person.country == country
  );

  students = students.map((student) => student.name);
  if (students.length === 0) {
    return `No Student is from ${country}`;
  }
  return students;
};

const getNameAndCity = (arr, index) => {
  if (arr === undefined && age === undefined) {
    return "No Input Provided";
  }
  if (!Array.isArray(arr) && typeof index === "Number") {
    return "Please provide an valid array";
  }

  let person = arr[index];

  if (person === undefined) {
    return `No person found at ${index} index`;
  }
  console.log(person.name, person.city);
};

const getAges = (arr) => {
  if (arr === undefined) {
    return "No input provided.";
  }
  for (let i = 0; i < arr.length; i++) {
    let person = arr[i];
    let age = person.age;
    console.log(age);
  }
};

const getfirstHobby = (arr) => {
  if (arr === undefined) {
    return "No input provided.";
  }
  const firstHobby = arr.map((person) => ({
    [person.name]: person.hobbies[0],
  }));
  return firstHobby;
};

const getNameAndEmailByAge = (arr, age) => {
  if (arr === undefined && age === undefined) {
    return "No Input Provided";
  }
  if (!Array.isArray(arr) && typeof age === "Number") {
    return "Please provide an valid array";
  }
  if (Array.isArray(arr) && typeof age !== "Number") {
    return "Please provide an valid age";
  }
  let persons = arr.filter((person) => person.age === age);

  if (persons.length === 0) {
    return `No person of age ${age} found.`;
  }

  persons = persons.map((person) => {
    let name = person.name;
    let output = {};
    output[name] = person.email;
    return output;
  });
  return persons;
};

const getcityAndCountry = (arr) => {
  if (arr === undefined) {
    return "No input provided.";
  }
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    let person = arr[i];

    output.push({
      [person.name]: { city: person.city, country: person.country },
    });
  }
  return output;
};

export {
  getEmails,
  getHobbies,
  getAges,
  getNameAndCity,
  getfirstHobby,
  getNameAndEmailByAge,
  getcityAndCountry,
  getStudents,
};
