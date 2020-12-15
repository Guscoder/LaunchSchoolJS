function objectsEqual(a, b) {
  if (a === b) {
    return true;
  }

  return keysMatch(a, b) && valuesMatch(a, b);
}

function keysMatch(a, b) {
  let aKeys = Object.getOwnPropertyNames(a).sort();
  let bKeys = Object.getOwnPropertyNames(b).sort();

  if (aKeys.length !== bKeys.length) {
    return false;
  }

  return aKeys.every((key, index) => {
    return key === bKeys[index];
  });
}

function valuesMatch(a, b) {
  let aKeys = Object.getOwnPropertyNames(a).sort();

  return aKeys.every((key) => a[key] === b[key]);
}
console.log(objectsEqual({ a: 'foo' }, { a: 'foo' })); // true
console.log(objectsEqual({ a: 'foo', b: 'bar' }, { a: 'foo' })); // false
console.log(objectsEqual({}, {})); // true
console.log(objectsEqual({ a: 'foo', b: undefined }, { a: 'foo', c: 1 })); // false
