// your implementation

const map = (object, cb) => {
  const output = {};
  Object.keys(object).forEach((key) => {
    const [newKey, newValue] = cb(key, object[key]);
    output[newKey] = newValue;
  });
  return output;
};

const filter = (object, cb) => {
  const output = {};
  Object.keys(object).forEach((key) => {
    const check = cb([key, object[key]]);
    if (check) {
      output[key] = object[key];
    }
  });
  return output;
};

const invert = (object) => {
  const output = {};
  Object.keys(object).forEach((key) => {
    output[object[key]] = key;
  });
  return output;
};

const merge = (...args) => {
  const output = {};
  args.forEach((object) => {
    Object.keys(object).forEach((key) => {
      output[key] = object[key];
    });
  });
  return output;
};

const all = (object, cb) => {
  const output = Object.keys(object).every((key) => cb(key, object[key]));
  return output;
};

const some = (object, cb) => {
  const output = Object.keys(object).some((key) => cb(key, object[key]));
  return output;
};

export {
  map,
  filter,
  invert,
  merge,
  all,
  some,
};
