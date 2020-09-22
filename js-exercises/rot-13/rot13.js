function getLettersMap() {
  const lettersMap = new Map();
  const Alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let i = 0; i < Alphabets.length; i += 1) {
    let shiftIndex = i;
    if (shiftIndex > 12) {
      shiftIndex -= 13;
    } else shiftIndex += 13;
    lettersMap.set(Alphabets[i], Alphabets[shiftIndex]);
  }
  return lettersMap;
}

function rot13(args) {
  let outputString = '';
  const lettersMap = getLettersMap();
  for (const character of args) {
    if (!lettersMap.has(character)) {
      outputString += character;
    } else {
      outputString += lettersMap.get(character);
    }
  }
  return outputString;
}

export {
  rot13,
};
