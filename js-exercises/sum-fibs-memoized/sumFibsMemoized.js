function sumFibs(num) {
  let sum = 0;
  let f1 = 1;
  let f2 = 1;
  let f3 = 0
  while (f1 <= num){
    if (f1 % 2 !== 0){
      sum += f1;
    }
    f3 = f1 + f2;
    f1 = f2;
    f2 = f3;
  }
  return sum;
}


function cacheFunction(cb) {
  const cache = {};
  return function (arg){
    if ( !cache[arg] ) {
      const cbResult = cb(arg);
      if ( cbResult === undefined ){
        cache[arg] = 'undefined';
      }
      else {
        cache[arg] = cbResult;
      }
      return cbResult;
    }
    else {
      return cache[arg];
    }
  };
}

export { sumFibs, cacheFunction };
