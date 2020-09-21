/* Create a simple madlib program that prompts for a noun, a verb, an adverb, and an adjective, and injects them into a story that you create. 


Enter a noun: dog
Enter a verb: walk
Enter an adjective: blue
Enter an adverb: quickly

// console output
Do you walk your blue dog quickly? That's hilarious!
The blue dog walks quickly over the lazy dog.
The dog quickly walks up blue Joe's turtle.
*/

function prompt(message) {
  console.log(`=> ${message}`);
}

const readline = require('readline-sync');

prompt('Enter a noun:');
let noun = readline.question();

prompt('Enter a verb:');
let verb = readline.question();

prompt('Enter a adjective:');
let adjective = readline.question();

prompt('Enter a adverb:');
let adverb = readline.question();

console.log(
  `Where do you like to ${verb} your ${noun}? Are you serious? Is your ${noun} ${adjective}? Then I think you better ${adverb} run to the store!`
);
