
function duplicateLetters(...args) {
  const letters = {};
  const inputString = args[0];
  let duplicates = false;
  let maxDuplicates = 1;
  for (let c of inputString){
    if (letters[c] === undefined){
      letters[c] = 1;
    }
    else letters[c] ++;

    if (letters[c] > 1) duplicates = true;
    if (letters[c] > maxDuplicates){
      maxDuplicates = letters[c];
    }
  }
  if (duplicates){
    return maxDuplicates;
  }
  else return false;
}

export {
  duplicateLetters,
};
