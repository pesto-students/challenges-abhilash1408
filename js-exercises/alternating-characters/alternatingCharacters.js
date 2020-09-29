function checkAlternateString(string) {
  let count = 0;
  for (let i = 1; i < string.length; i += 1) {
    if (string[i - 1] === string[i]) {
      count += 1;
    }
  }
  return count;
}

function alternatingCharacters(arr) {
  const output = [];
  arr.forEach((string) => {
    output.push(checkAlternateString(string));
  });
  return output;
}

export { alternatingCharacters };
