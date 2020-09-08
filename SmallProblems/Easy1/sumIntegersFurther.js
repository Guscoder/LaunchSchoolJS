/* 
Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.
*/

/* 
input: an array of integers greater than 0
output: either sum or product of numbers in the array

Algorithm:
1. take integer input from user
2. take sum or product choice input from user
3. loop through numbers from 1 to user integer
4. Add or multiply each number to the previous total
5. output final total as sum or product
*/

function computeSum(numArray) {
  let sum = numArray.reduce((total, currentNumber) => {
    return total + currentNumber;
  }, 0);

  return sum;
}

function computeProduct(numArray) {
  let product = numArray.reduce((total, currentNumber) => {
    return total * currentNumber;
  }, 1);

  return product;
}

let readlineSync = require('readline-sync');

console.log('Please enter an array of integers');
let userNumbers = readlineSync.question().split(',');
const numberArray = userNumbers.map((num) => Number(num));
console.log(numberArray);

console.log("Enter 's' to compute the sum, 'p' to compute the product.");
let operation = readlineSync.prompt();

if (operation === 's') {
  let sum = computeSum(numberArray);
  console.log(`The sum of the integers in the array is ${sum}.`);
} else if (operation === 'p') {
  let product = computeProduct(numberArray);
  console.log(`The product of the integers in the number array is ${product}.`);
} else {
  console.log('Oops. Unknown operation.');
}
