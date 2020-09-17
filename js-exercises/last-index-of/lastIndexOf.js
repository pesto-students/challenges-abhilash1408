function lastIndexOf(...args) {
  const searchTerm = args[0];
  const searchArray = args[1];
  let index;
  for (let i = searchArray.length - 1; i > 0; i--) {
    if (searchArray[i] === searchTerm) {
      index = i;
      break;
    }
  }
  if (index === undefined) {
    index = -1;
  }
  return index;
}

export {
  lastIndexOf,
};
