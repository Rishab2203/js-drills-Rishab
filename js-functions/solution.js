function each(elements, cb) {
  for (let index = 0; index < elements.length; index++) {
    let element = elements[index];
    cb(element, index);
  }
}

function map(elements, cb) {
  let output = [];
  for (let index = 0; index < elements.length; index++) {
    let element = elements[index];
    output.push(cb(element, index, elements));
  }
  return output;
}

function reduce(elements, cb, startingValue) {
  if (elements.length === 1 && startingValue === undefined) {
    return elements[0];
  }

  for (let index = 0; index < elements.length; index++) {
    if (startingValue === undefined) {
      index = 1;
      startingValue = elements[0];
    }
    let element = elements[index];

    startingValue = cb(startingValue, element);
  }
  return startingValue;
}

function find(elements, cb) {
  for (let index = 0; index < elements.length; index++) {
    let element = elements[index];
    if (cb(element)) {
      return element;
    }
  }
  return undefined;
}

function filter(elements, cb) {
  let output = [];
  for (let index = 0; index < elements.length; index++) {
    let element = elements[index];
    if (cb(element, index, elements)) {
      output.push(element);
    }
  }
  return output;
}

function flatten(elements) {
  let output = [];
  for (let index = 0; index < elements.length; index++) {
    let element = elements[index];
    if (Array.isArray(element)) {
      output.push(...flatten(element));
    } else {
      output.push(element);
    }
  }
  return output;
}

module.exports = { each, filter, flatten, map, reduce, find };
