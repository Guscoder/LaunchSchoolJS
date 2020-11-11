/* Write a function that takes two array arguments, each containing a list of numbers, and returns a new array containing the products of all combinations of number pairs that exist between the two arrays. The returned array should be sorted in ascending numerical order.

You may assume that neither argument will be an empty array. 

input: 2 arrays each with a list of numbers
output: new array 
 a. contains products of all combinations of numbers from the two arrays
 b. array is sorted in ascending order

 algorithm:
 1. loop through arr1
 2. mutiply each element by each element in arr2
 3. put product of numbers into new array
 4. sort array by number value
 5. return new array
*/

const multiplyAllPairs = (arr1, arr2) => {
  let sortedPairs = [];
  arr1.forEach((num) => {
    arr2.forEach((num2) => {
      return sortedPairs.push(num * num2);
    });
  });
  return sortedPairs.sort((a, b) => a - b);
};

multiplyAllPairs([2, 4], [4, 3, 1, 2]); // [2, 4, 4, 6, 8, 8, 12, 16]
