const sumEvenArgs = (...args) => {
  let evenSum = 0;
  for (const element of args) {
    if (element % 2 === 0) {
      evenSum += element;
    }
  }
  return evenSum;
};

export { sumEvenArgs };
