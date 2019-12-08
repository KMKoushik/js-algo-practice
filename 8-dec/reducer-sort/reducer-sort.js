const sortByRepetition = (array) => {
  const repetitionMap = array.reduce((acc, current) => {
    if (acc[current] === undefined) {
      acc[current] = 0;
    }
    acc[current] += 1;
    return acc;
  }, {});

  const repetitionComparetor = (a, b) => {
    if (repetitionMap[b] === repetitionMap[a]) {
      return b.length - a.length;
    }
    return repetitionMap[b] - repetitionMap[a];
  };

  return Object.keys(repetitionMap).sort(repetitionComparetor);
};

export default sortByRepetition;
