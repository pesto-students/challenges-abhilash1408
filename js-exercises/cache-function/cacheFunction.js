function cacheFunction(cb) {
  const cache = {};
  return (...args) => {
    // console.log(cache);
    if (cache[args]) {
      return cache[args];
    }
    const result = cb(args);
    if (result === undefined) {
      cache[args] = 'executed';
    } else {
      cache[args] = result;
    }
    return result;
  };
}

export {
  cacheFunction,
};
