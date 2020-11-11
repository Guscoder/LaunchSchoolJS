/* eslint-disable max-lines-per-function */
/*  Write a function that takes a sentence string as an argument, and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.
 
input: string
output: string with numbers converted to digits

algo:
1. convert string to array
2. create var with num array 0-9 in words
3. map through array
    -check element with num array
    -if match, return index num to array
 4. return new array, join into string

*/

const wordToDigit = (sentence) => {
  const numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  return sentence
    .split(' ')
    .map((word) => {
      if (word[word.length - 1] === '.') {
        word = word.slice(0, -1);
        return numbers.includes(word)
          ? numbers.indexOf(word) + '.'
          : word + '.';
      } else {
        return numbers.includes(word) ? numbers.indexOf(word) : word;
      }
    })
    .join(' ');
};

/* 
REGEX SOLUTION

const NUM_WORDS = {
  zero:  0,
  one:   1,
  two:   2,
  three: 3,
  four:  4,
  five:  5,
  six:   6,
  seven: 7,
  eight: 8,
  nine:  9,
};

function wordToDigit(sentence) {
  Object.keys(NUM_WORDS).forEach(word => {
    let regex = new RegExp('\\b' + word + '\\b', 'g');
    sentence = sentence.replace(regex, NUM_WORDS[word]);
  });

  return sentence;
}

The solution uses a NUM_WORDS object as a lookup table for converting each numeric word to its digit counterpart. The solution iterates over the keys of the NUM_WORDS object and iteratively replaces all instances of each numeric word in the sentence argument. During each iteration, the solution creates a RegExp object and assigns it to the regex variable. The solution passes this regex as an argument to the String.prototype.replace method, reassigning the value of the sentence via the statement:


*/
