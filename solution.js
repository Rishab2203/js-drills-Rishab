const getEmails = (arr) => {
  if (arr === undefined) {
    return "No input provided.";
  }
  if (!Array.isArray(arr)) {
    return "Invalid Argument.Please provide an array.";
  }

  const emails = arr.map((person) => person.email);
  if (emails.length === 0) {
    return "NO Emails Found";
  }
  return emails;
};

const getHobbies = (arr, age) => {
  if (!Array.isArray(arr) || isNaN(age)) {
    return "Invalid input provided";
  }

  let persons = arr.filter((person) => person.age === age);

  if (persons.length === 0) {
    return `No person of ${age} found`;
  }

  persons = persons.map((person) => person.hobbies);

  return persons;
};

const getStudents = (arr, country) => {
  if (!Array.isArray(arr) || typeof country !== "string") {
    return "Provide valid arguments.";
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
  if (!Array.isArray(arr) && isNaN(index)) {
    return "Please provide an valid array";
  }

  let person = arr[index];

  if (person === undefined) {
    return `No person found at ${index} index`;
  }
  return [person.name, person.city];
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
  if (!Array.isArray(arr) || isNaN(age)) {
    return "Invalid argument provided";
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
