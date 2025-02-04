function keys(obj) {
  let keys = [];
  for (let key in obj) {
    keys = [...keys, key];
  }
  return keys;
}

function values(obj) {
  let values = [];
  for (let key in obj) {
    let value = obj[key];
    values = [...values, value];
  }
  return values;
}

function mapObject(obj, cb) {
  for (let key in obj) {
    obj[key] = cb(obj[key]);
  }
  return obj;
}

function pairs(obj) {
  let list = [];
  for (let key in obj) {
    let value = obj[key];
    list.push([key, value]);
  }
  return list;
}

/* STRETCH PROBLEMS */

function invert(obj) {
  let invertObj = {};
  for (let key in obj) {
    let value = obj[key];
    invertObj[value] = key;
  }
  return invertObj;
}

function defaults(obj, defaultProps) {
  for (let key in defaultProps) {
    if (!obj[key]) {
      obj[key] = defaultProps[key];
    }
  }
  return obj;
}

module.exports = { defaults, keys, values, pairs, invert, mapObject };
