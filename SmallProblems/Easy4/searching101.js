// Write a program that solicits six numbers from the user, then logs a message that describes whether or not the sixth number appears amongst the first five numbers.

function prompt(message) {
  console.log(`=> ${message}`);
}

const readline = require('readline-sync');

let numbers = [];

prompt("What's the first number?");
numbers.push(Number(readline.question()));

prompt("What's the second number?");
numbers.push(Number(readline.question()));

prompt("What's the third number?");
numbers.push(Number(readline.question()));

prompt("What's the fourth number?");
numbers.push(Number(readline.question()));

prompt("What's the fifth number?");
numbers.push(Number(readline.question()));

prompt("What's the last number?");
let lastNumber = Number(readline.question());

let numberString = numbers.join(',');

function numAppear(numArray, lastNum) {
  return numArray.includes(lastNum)
    ? console.log(`The number ${lastNum} appears in ${numberString}.`)
    : console.log(`The number ${lastNum} does not appear in ${numberString}.`);
}

numAppear(numbers, lastNumber);
