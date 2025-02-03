const inventory = require("./cars.js");

function getCarById(arr, Id) {
  let cars = arr.filter((car) => {
    return car.id === Id;
  });
  let car = cars[0];

  return `Car ${car.id} is a ${car.car_year} ${car.car_make} ${car.car_model}.`;
}

function lastCar(arr) {
  let car = arr[arr.length - 1];

  return `Last car is a ${car.car_make} ${car.car_model}`;
}

function sortedCarModels(arr) {
  let models = arr.map((car) => {
    return car.car_model;
  });

  return models.sort();
}

function carYears(arr) {
  let years = arr.map((car) => {
    return car.car_year;
  });

  return years;
}

function olderCars(arr, year) {
  let cars = arr.filter((car) => {
    return car.car_year < year;
  });

  return { cars: cars, number: cars.length };
}

function audiAndBMW(arr) {
  let cars = arr.filter((car) => {
    return car.car_make === "Audi" || car.car_make === "BMW";
  });

  return cars;
}
console.log(JSON.stringify(audiAndBMW(inventory)));

module.exports = {
  audiAndBMW,
  olderCars,
  carYears,
  sortedCarModels,
  getCarById,
  lastCar,
};
