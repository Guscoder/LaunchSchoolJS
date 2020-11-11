/*Write a function that computes the difference between the square of the sum of the first count positive integers and the sum of the squares of the first count positive integers.  */

/* 

input: one integer
output: integer--difference between sum of squares and square of sum

rules:
1. arg is a positive integer

algo:
1. Create an array of the numbers from 1 to argument
2. Get the square of the sum
    -add all integers together
    -get square of that sum
    -save in variable
3. Get the sum of each number squared
    -iterate through array
    -change each number to its square 
    -add all teh squared nums together
    -save in variable
4. Output teh difference begtween 2 and 3

*/
function squareOfSums(arr) {
  let sum = arr.reduce((acc, val) => {
    return acc + val;
  });
  return sum * sum;
}

function sumOfSquares(arr) {
  return arr
    .map((num) => {
      return num * num;
    })
    .reduce((a, b) => {
      return a + b;
    });
}

function sumSquareDifference(int) {
  let numberRange = [...Array(int + 1).keys()];
  return Math.abs(squareOfSums(numberRange) - sumOfSquares(numberRange));
}

/* 
LS Solution:


function sumSquareDifference(count) {
  let sum = 0;
  let sumOfSquares = 0;
  for (let number = 1; number <= count; number++) {
    sum += number;
    sumOfSquares += Math.pow(number, 2);
  }
  return Math.pow(sum, 2) - sumOfSquares;
}

*/
sumSquareDifference(3); // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10); // 2640
sumSquareDifference(1); // 0
sumSquareDifference(100); // 25164150
