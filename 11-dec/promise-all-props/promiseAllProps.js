const promiseAllProps = (promiseObject) => {
  const resultObj = {};

  const resultPromise = new Promise((resolve, reject) => {
    Object.keys(promiseObject).reduce((acc, current, index) => {
      return acc.then(() => {
        promiseObject[current].then(data => {
          resultObj[current] = data;
          if (index === Object.keys(promiseObject).length - 1) {
            resolve(resultObj);
          }
        }).catch(err => reject(err));
      });
    }, Promise.resolve());
  });

  return resultPromise;
};

export default promiseAllProps;
