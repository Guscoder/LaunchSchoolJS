function map(arr, callback) {
  // let transformedArray = [];
  // for (let index = 0; index < arr.length; index++) {
  //   const value = arr[index];
  //   transformedArray.push(callback(value));
  // }
  // return transformedArray;

  return arr.reduce((mappedArray, value) => {
    mappedArray.push(callback(value));
    return mappedArray;
  }, []);
}
function map(array, callback) {
  return array.reduce((transformedItems, value) => {
    transformedItems.push(callback(value));
    return transformedItems;
  }, []);
}
