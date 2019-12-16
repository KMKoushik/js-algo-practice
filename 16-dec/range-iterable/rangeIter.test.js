import rangeIter from './rangeIter';

describe('rangeIter', () => {
  it('if end value is greater than start value it produces values', () => {
    const iterable = rangeIter(-4, -1);
    expect([...iterable]).toEqual([-4, -3, -2, -1]);
  });
  it('if start value is greater than end value it does not produce values', () => {
    const iterable = rangeIter(3, -1);
    expect([...iterable]).toEqual([]);
  });
  it('if start value is equal to end value it produces one value', () => {
    const iterable = rangeIter(-2, -2);
    expect([...iterable]).toEqual([-2]);
  });

  describe('converting instance to array', () => {
    it('returns the same as converting [Symbol.iterator]() iterator to array', () => {
      const rangeIterable = rangeIter(2, 5);
      const iterator = rangeIter(2, 5)[Symbol.iterator]();
      expect([...iterator]).toEqual([...rangeIterable]);
    });
  });

  describe('bad arguments', () => {
    it('throws an exception when it is not passed any parameter', () => {
      expect(() => rangeIter()).toThrowError(TypeError, /undefined is not a number/);
    });

    it('throws an exception when it is not passed second parameter', () => {
      expect(() => rangeIter(2)).toThrowError(TypeError, /undefined is not a number/);
    });

    it('throws an exception when is not passed number as second parameter', () => {
      expect(() => rangeIter(2, 'a')).toThrowError(TypeError, /a is not a number/);
    });
  });
});
