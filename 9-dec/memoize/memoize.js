const memoize = (fn) => {
  const cache = {};
  const callBack = (...args) => {
    if (cache[args.toString()] === undefined) {
      cache[args.toString()] = fn(...args);
    }
    return cache[args.toString()];
  };

  return callBack;
};

export default memoize;
