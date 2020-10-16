function validateInput(promises) {
  if (!promises || !Array.isArray(promises) || !promises.length) {
    return false;
  } return true;
}

async function allSettled(promises) {
  const validity = validateInput(promises);
  if (!validity) {
    return new Promise(reject => {
      reject('invalid input');
    });
  }
  const results = [];
  for (const promise of promises) {
    let result = null;
    try {
      // eslint-disable-next-line no-await-in-loop
      result = { value: await promise, status: 'fulfilled' };
    } catch (error) {
      result = { rejected: error, status: 'rejected' };
    }
    results.push(result);
  }
  return new Promise(resolve => {
    resolve(results);
  });
}
export { allSettled };
