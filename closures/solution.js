function counterFactory() {
  let count = 0;
  return {
    increment: () => {
      return count + 1;
    },
    decrement: () => {
      return count - 1;
    },
  };
}

function limitFunctionCallCount(cb, n) {
  return () => {
    if (n > 0) {
      n--;
      return cb();
    }

    return "Call limit exceeded";
  };
}

function cacheFunction(cb) {
  let cache = {};

  return function (...args) {
    let key = args;
    if (cache[args]) {
      return cache[args];
    } else {
      let result = cb(...args);
      cache[key] = result;
      console.log(cache);
      return result;
    }
  };
}

module.exports = { cacheFunction, limitFunctionCallCount, counterFactory };
