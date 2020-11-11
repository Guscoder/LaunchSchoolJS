/* 
Write a function that takes an array of arrays representing a 3x3 matrix, and returns the transpose of the matrix. You should implement the function on your own, without using any external libraries.

Take care not to modify the original matrix — your function must produce a new matrix and leave the input matrix array unchanged.

My Summary:
Take an array with 3 sub-arrays and make it so the numbers in the first array become the numbers in the first column, second array, second column, etc...

input: nested array
output: nested array (same number of arrays as input)

rules:
1. do not mutate original matrix/array

algo:
-make copy of original array
-make new array
-with a for loop create new subarrays (same number as array length)
-iterate through the array to access each subarray
-iterate through each subarray's elements
    -add each element to correct location in new matrix
-return new matrix
*/

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

function transpose(matrix) {
  // create new array to output transposed elements
  let transposedMatrix = [];
  // using a for loop to use the array's length to determine how many subarrays to add to the new array
  for (let index = 0; index < matrix.length; index++) {
    // add a new subarray to the array for each one present in the original matrix, to hold rearranged elements
    transposedMatrix.push([]);
  }
  // use forEach method to iterate through the top array to access each subarray (we are not changing the subarrays so forEach works well to simply access each element and its index #)
  matrix.forEach((subArray, subArrayIndex) => {
    // iterate through each subarray to access each element
    subArray.forEach((element, elementIndex) => {
      // use index values of each element/subarray to assign new locations to elements in new array
      transposedMatrix[elementIndex][subArrayIndex] = element;
    });
  });

  return transposedMatrix;
}

let newMatrix = transpose(matrix);

console.log(newMatrix); // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix); // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
