/*  Write a program that prompts the user for two positive integers, and then prints the results of the following operations on those two numbers: addition, subtraction, product, quotient, remainder, and power. Do not worry about validating the input.*/
const readlineSync = require('readline-sync');

function multiply(num1, num2) {
  return num * num2;
}

function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function remainder(num1, num2) {
  return num1 % num2;
}

function power(num1, num2) {
  return num1 ** num2;
}

prompt('Enter your first number:');
let firstNum = readline.question();

prompt('Enter your second number:');
let secondNum = readline.question();

console.log(`${firstNum} + ${secondNum} = ${add(`${firstNum}, ${secondNum}`)}`);
console.log(
  `${firstNum} - ${secondNum} = ${subtract(`${firstNum}, ${secondNum}`)}`
);
console.log(
  `${firstNum} * ${secondNum} = ${multiply(`${firstNum}, ${secondNum}`)}`
);
console.log(
  `${firstNum} / ${secondNum} = ${divide(`${firstNum}, ${secondNum}`)}`
);
console.log(
  `${firstNum} % ${secondNum} = ${remainder(`${firstNum}, ${secondNum}`)}`
);
console.log(
  `${firstNum} ** ${secondNum} = ${power(`${firstNum}, ${secondNum}`)}`
);
