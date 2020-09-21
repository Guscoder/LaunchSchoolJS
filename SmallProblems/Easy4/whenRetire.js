/* Build a program that logs when the user will retire and how many more years the user has to work until retirement. */

function prompt(message) {
  console.log(`=> ${message}`);
}

const readline = require('readline-sync');

prompt('What is your age?');
let age = Number(readline.question());

prompt('At what age would you like to retire?');
let retireAge = Number(readline.question());

let year = new Date().getFullYear();

let yearsLeft = retireAge - age;

let retireYear = year + yearsLeft;

console.log(
  `It's ${year}. You will retire in ${retireYear}. You only have ${yearsLeft} of work to go!`
);
