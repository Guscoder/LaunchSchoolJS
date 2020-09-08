/* 
Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.
*/

/* 
input: an integer greater than 0
output: either sum or product of numbers between 1 and integer entered

Algorithm:
1. take integer input from user
2. take sum or product choice input from user
3. loop through numbers from 1 to user integer
4. Add or multiply each number to the previous total
5. output final total as sum or product
*/

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt('Please enter an integer greater than 0: ');
let integerChoice = Number(readline.question());

prompt("Enter 's' to compute the sum or 'p' to compute the product.");
let calcChoice = readline.question();

let total = 1;

for (let i = 2; i <= integerChoice; i++) {
  if (calcChoice === 's') {
    total += i;
  } else if (calcChoice === 'p') {
    total *= i;
  }
}

console.log(total);
