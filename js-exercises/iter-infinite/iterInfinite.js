function* count(start, step = 1) {
  let nextIndex = start;
  while (true) {
    yield nextIndex;
    nextIndex += step;
  }
}

function* cycle(iterable, n = 0) {
  if (n <= 0) {
    throw new Error('Invalid number entered');
  }
  const saved = [];
  for (const el of iterable) {
    saved.push(el);
  }
  let iterationCount = 0;
  while (true) {
    // iterationCount < n - 1
    for (const el of saved) {
      if (iterationCount === n) return el;
      yield el;
      iterationCount += 1;
    }
  }
}

function* repeat(value, n = 0) {
  let iterationCount = 0;
  while (true) {
    if (iterationCount === n) return value;
    yield value;
    iterationCount += 1;
  }
}

export {
  count,
  cycle,
  repeat,
};
