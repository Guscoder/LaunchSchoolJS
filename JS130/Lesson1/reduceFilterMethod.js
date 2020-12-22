function reduce(arr, callback, initialValue) {
  let accumulator = initialValue;
  let index = 0;

  if (accumulator === undefined) {
    accumulator = arr[0];
    index = 1;
  }

  while (index < arr.length) {
    accumulator = callback(accumulator, arr[index]);
    index += 1;
  }

  return accumulator;
}

function filter(array, callback) {
  return array.reduce((filteredItems, value) => {
    if (callback(value)) {
      filteredItems.push(value);
    }
    return filteredItems;
  }, []);
}
// As you can see, this is very similar to the filter function in our solution to problem 1. The chief difference is that we now use Array.prototype.reduce to iterate over the array elements, and use an array as the accumulator (filteredItems) and the final return value.
