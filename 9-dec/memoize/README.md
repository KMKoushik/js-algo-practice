Create a function that caches another function
Example:

```js
function expensiveOperation() {
  console.log('expensiveOperation function is called!');
  return 22;
}

const memoized = memoize(expensiveOperation); // <- memoize function
console.log(memoized());
console.log(memoized());
```
the console should show:
```
expensiveOperation function is called!
22
22
```

See 'memoize' tests for further info of the requirement
