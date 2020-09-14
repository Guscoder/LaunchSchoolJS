/* Using the forEach method, write some code to output all vowels from the strings in the arrays. Don't use a for or while loop. */

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

/* 
input: object of arrays of strings
output: all vowels from strings

algorithm:
1. create array of all values from object
2. split each string into an array of letters
3. iterate with forEach through the array of letters
4. filter out each letter that is a vowel
5. return string of vowels
*/

let vowels = 'aeiou';

Object.values(obj).forEach((arr) => {
  arr.forEach((word) => {
    word.split('').forEach((letter) => {
      if (vowels.includes(letter)) {
        console.log(char);
      }
    });
  });
});
