import sortByParity from './sortByParity';

describe('Should sort by parity', () => {
  test('It should return correct value', () => {
    expect(sortByParity([3, 1, 2, 4])).toStrictEqual([4, 2, 3, 1]);
  });
});
