function removeFalsyValues(array) {
  const filteredArray = [];
  for (const element of array) {
    if (element) {
      filteredArray.push(element);
    }
  }
  return filteredArray;
}

export {
  removeFalsyValues,
};
