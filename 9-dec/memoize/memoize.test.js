import memoize from './memoize';

describe('memoize', () => {
  test('should return a function', () => {
    expect(typeof memoize(jest.fn())).toBe('function');
  });

  test('can handle a single argument', () => {
    let called = 0;
    const fib = memoize((n) => {
      called += 1;
      if (n < 2) return n;
      return fib(n - 1) + fib(n - 2);
    });
    fib(10);
    expect(called).toBe(11);
  });

  test('can handle multiple arguments', () => {
    let called = 0;
    const fib = memoize((n, unused) => {
      called += 1;
      if (n < 2) return n;
      return fib(n - 1, unused) + fib(n - 2, unused);
    });
    fib(10, 'x');
    fib(10, 'y');
    expect(called).toBe(22);
  });
});
