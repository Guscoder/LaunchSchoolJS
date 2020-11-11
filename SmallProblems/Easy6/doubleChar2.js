/* Write a function that takes a string, doubles every consonant character in the string, and returns the result as a new string. The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

*/

const doubleConsonants = (str) => {
  let repeatStr = '';
  const CONSONANTS = [
    'b',
    'c',
    'd',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l',
    'm',
    'n',
    'p',
    'q',
    'r',
    's',
    't',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  for (let index = 0; index < str.length; index++) {
    if (CONSONANTS.includes(str[index].toLowerCase())) {
      repeatStr += str[index].repeat(2);
    } else {
      repeatStr += str[index];
    }
  }
  console.log(repeatStr);
};

doubleConsonants('String'); // "SSttrrinngg"
doubleConsonants('Hello-World!'); // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th'); // "JJullyy 4tthh"
doubleConsonants(''); // ""
