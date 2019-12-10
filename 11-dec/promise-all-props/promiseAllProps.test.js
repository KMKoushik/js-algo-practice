import promiseAllProps from './promiseAllProps';

test('wait for fulfilled object properties ', () => {
  promiseAllProps({
    foo: Promise.resolve('foo'),
    bar: Promise.resolve('bar'),
  }).then(result => {
    expect(result).toEqual({ foo: 'foo', bar: 'bar' });
  });
});

test('Should reject if any promise is rejected ', () => {
  promiseAllProps({
    foo: Promise.resolve('foo'),
    bar: Promise.reject('error'),
  }).catch(result => {
    expect(result).toEqual('error');
  });
});
