function getUncommonElements(array1, array2) {
  // find elements in array1 that are not in array2
  const result = [];
  for (const element of array1) {
    if (array2.indexOf(element) === -1) {
      result.push(element);
    }
  }
  return result;
}

function diffArray(array1, array2) {
  let outputArray = [];
  outputArray = outputArray.concat(getUncommonElements(array1, array2));
  outputArray = outputArray.concat(getUncommonElements(array2, array1));
  return outputArray;
}

export {
  diffArray,
};
