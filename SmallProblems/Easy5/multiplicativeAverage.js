/*  Write a function that takes an array of integers as input, multiplies all of the integers together, divides the result by the number of entries in the array, and returns the result as a string with the value rounded to three decimal places.*/

/* 
input: array of integers
output: a string of the final value rounded to 3 decimal places
rules: 
1. 

algorithm:
1. multiply each number in the array by each other number
2. take total product
3. divide total product by the number of numbers in array
4. change result of the division into string with 3 decimals


*/

const multiplicativeAverage = (arr) => {
  let product = arr.reduce((a, b) => {
    return a * b;
  });
  product /= arr.length;
  return product.toFixed(3);
};

multiplicativeAverage([3, 5]); // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]); // "28361.667"
