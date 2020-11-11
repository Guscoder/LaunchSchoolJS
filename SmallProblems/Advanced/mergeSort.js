/* eslint-disable max-lines-per-function */
/* Write a function that takes two sorted arrays as arguments, and returns a new array that contains all the elements from both input arrays in sorted order.

You may not provide any solution that requires you to sort the result array. You must build the result array one element at a time in the proper order.

Your solution should not mutate the input arrays. 

Algo:
1. Take first number of first array
2. Compare it to each element of second array
    -which is lower? -> add to result array
3. take second element of first array
    -compare to each element of second array
    -which is lower? -add to results
*/

function merge(arr1, arr2) {
  let arr1copy = arr1.slice();
  let arr2copy = arr2.slice();
  let results = [];

  while (arr1copy.length > 0 && arr2copy.length > 0) {
    results.push(copy1[0] <= copy2[0] ? copy1.shift() : copy2.shift());
  }

  console.log(result.concat(copy1.length === 0 ? copy2 : copy1));
}

merge([1, 5, 9], [2, 6, 8]); // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]); // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]); // [1, 4, 5]
merge([1, 4, 5], []); // [1, 4, 5]
