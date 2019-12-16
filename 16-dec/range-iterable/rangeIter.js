const rangeIter = (start, end) => {
  if (start === undefined || end === undefined) {
    throw new TypeError('undefined is not a number');
  }
  if (isNaN(start) || isNaN(end)) {
    const errVariable = isNaN(start) ? start : end;
    throw new TypeError(`${errVariable} is not a number`);
  }

  const iter = {
    [Symbol.iterator]() {
      this.current = start - 1;
      this.end = end;
      return this;
    },
    next() {
      this.current += 1;
      if (this.current > this.end) {
        return { done: true };
      }
      return { done: false, value: this.current };
    },
  };

  return iter;
};

export default rangeIter;
