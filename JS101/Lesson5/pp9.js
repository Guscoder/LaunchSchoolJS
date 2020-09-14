/* Given the following data structure, return a new array with the same structure, but with the subarrays ordered -- alphabetically or numerically as appropriate -- in ascending order.

 */

let arr = [
  ['b', 'c', 'a'],
  [2, 1, 3],
  ['blue', 'black', 'green'],
];

/* 
algorithm:
1. iterate through array
2. for each subarray, order contents
3. return new array wth sorted subarrays
*/

arr.map((subArr) => {
  if (typeof subArr[0] === 'string') {
    // we have an array of strings
    return subArr.slice().sort(); // use slice bc sort is destructive, we dont want to mutate original array
  } else {
    // we have an array of numbers
    return subArr.slice().sort((a, b) => a - b); // use callback to sort numbers otherwise it uses UTF-16 char code to sort
  }
});
