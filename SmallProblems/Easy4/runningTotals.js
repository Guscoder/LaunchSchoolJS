/* Write a function that takes an array of numbers, and returns an array with the same number of elements, with each element's value being the running total from the original array. 


algorithm:
1. create new array
2. add first number to array
3. add current value + next num to array
4. return array
*/

function runningTotal(arr) {
  const totalArr = [];
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    totalArr.push((sum += arr[index]));
  }
  return totalArr;
}
runningTotal([2, 5, 13]);
