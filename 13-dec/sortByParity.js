const sortByParity = array => {
  const sortFn = a => (a % 2 === 0 ? -1 : 1);
  return array.sort(sortFn);
};

export default sortByParity;
