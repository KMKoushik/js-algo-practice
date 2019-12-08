import sortByRepetition from './reducer-sort';

describe('Should return array by descending order of repetition', () => {
  test('Should give correct output', () => {
    expect(sortByRepetition(['apple', 'orange', 'apple', 'apple', 'banana', 'orange'])).toStrictEqual(['apple', 'orange', 'banana']);
    expect(sortByRepetition(['apple', 'orange', 'apple', 'banana', 'orange'])).toStrictEqual(['orange', 'apple', 'banana']);
  });
});
