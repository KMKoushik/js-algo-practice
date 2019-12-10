const allPromise = (promiseList) => {
  const promiseResults = [];
  if (promiseList === undefined) {
    return Promise.resolve();
  }

  const resultPromise = new Promise((resolve, reject) => {
    promiseList.reduce((acc, currentPromise, index) => {
      return acc.then((() => {
        if (currentPromise instanceof Promise) {
          currentPromise.then(result => {
            promiseResults[index] = result;
            if (index === promiseList.length - 1) {
              resolve(promiseResults);
            }
          }).catch(err => {
            reject(err);
          });
        } else {
          promiseResults[index] = currentPromise;
          if (index === promiseList.length - 1) {
            resolve(promiseResults);
          }
        }
      }));
    }, Promise.resolve());
  });

  return resultPromise;
};

export default allPromise;
