const limitFunctionCallCount = (cb, n) => {
  let calls = 0;
  return (...args) => {
    if (calls < n) {
      calls += 1;
      return cb(...args);
    }
    return null;
  };
};

export {
  limitFunctionCallCount,
};
