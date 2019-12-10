
import allPromise from './allPromise';

describe('allPromises', () => {
  test('The function should return a Promise', () => {
    expect(allPromise() instanceof Promise).toBe(true);
  });

  test('Promise call should return an array of values from promises', () => {
    const p1 = new Promise((res) => res(1));
    const p2 = 2;
    const p3 = Promise.resolve(3);
    expect(allPromise([p1, p2, p3])).resolves.toEqual([1, 2, 3]);
    expect(allPromise([p1, p3, p2])).resolves.toEqual([1, 3, 2]);
  });

  test('Promise call should return an array of values from promises', () => {
    const p1 = new Promise((res) => res(1));
    const p3 = Promise.reject('Failed');
    const p2 = 2;

    return expect(allPromise([p1, p2, p3])).rejects.toEqual('Failed');
  });
});
