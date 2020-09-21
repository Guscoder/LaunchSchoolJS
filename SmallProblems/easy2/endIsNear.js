/* Write a function that returns the next to last word in the String passed to it as an argument.

Words are any sequence of non-blank characters.

You may assume that the input String will always contain at least two words.

Examples:

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // 

input: string of words
output: next tolast word in the string
rules:
1. words are any sequence of characters,not spaces or blanks
2. the input string will always have at least 2 words

Algorithm:
1. convert string to array of words
2. access and then return the second to last word of the array of strings

*/

function nextToLast(str) {
  let arr = str.split(' ');
  return arr[arr.length - 2];
}

console.log(nextToLast('last word')); // logs true
console.log(nextToLast('Launch School is great!')); //

function middleString(str) {
  let arr = str.split(' ');
  if (arr.length === 0 || arr.length % 2 === 0) {
    return 'Your sentence does not have a middle word!';
  } else {
    console.log(arr.length / 2);
    return arr[Math.floor(arr.length / 2)];
  }
}

console.log(middleString('Launch School is really great!')); //
console.log(middleString('Launch School is great!')); //
