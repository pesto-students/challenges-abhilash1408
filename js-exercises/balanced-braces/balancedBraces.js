function balancedBraces(...args) {
  const inputString = args[0];
  let bracketsArray = [];
  let valid = true;
  for (let c of inputString) {
    if (c === '{' || c === '[' || c === '(') {
      bracketsArray.push(c);
    } else if (c === '}') {
      if (bracketsArray[bracketsArray.length - 1] === '{') {
        bracketsArray.pop();
      } else {
        valid = false;
        break;
      }
    } else if (c === ')') {
      if (bracketsArray[bracketsArray.length - 1] === '(') {
        bracketsArray.pop();
      } else {
        valid = false;
        break;
      }
    } else if (c === ']') {
      if (bracketsArray[bracketsArray.length - 1] === '[') {
        bracketsArray.pop();
      } else {
        valid = false;
        break;
      }
    }
  }
  if (bracketsArray.length !== 0) {
    valid = false;
  }
  return valid;
}

export {
  balancedBraces,
};
