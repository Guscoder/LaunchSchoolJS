/* Given a string of words separated by spaces, write a function that swaps the first and last letters of every word.

You may assume that every word contains at least one letter, and that the string will always contain at least one word. You may also assume that each string contains nothing but words and spaces, and that there are no leading, trailing, or repeated spaces.

input: string of words separated by spaces
output: string of words with teh first and last letter of each word swapped


algorithm:
1. change string to array of words
2. for each word, get first and last letter
3. make first = last and last = first letter
4. return array and make array a string again

*/

function swap(string) {
  if (string.length === 1) return string;
  let wordArray = string.split(' ');

  let newWordArray = wordArray.map((word) => {
    let firstLetter = word[0];
    let lastLetter = word[word.length - 1];

    return lastLetter + word.substr(1, word.length - 2) + firstLetter;
  });
  return newWordArray.join(' ');
}

swap('Oh what a wonderful day it is'); // "hO thaw a londerfuw yad ti si"
swap('Abcde'); // "ebcdA"
swap('a');
