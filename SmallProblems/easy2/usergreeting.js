/* 
Write a program that will ask for user's name. The program will then greet the user. If the user writes "name!" then the computer yells back to the user.


*/

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}
prompt('What is your name?');
let name = readline.question();

let lastChar = name[name.length - 1];

if (lastChar === '!') {
  let newName = name.slice(0, -1).toUpperCase();
  console.log(newName);
  console.log(`HELLO ${newName}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}
