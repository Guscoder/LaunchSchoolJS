/* eslint-disable max-len */
/* Write a function that takes a string, doubles every character in the string, and returns the result as a new string. */

const repeater = (str) => {
  let repeatStr = '';
  for (let index = 0; index < str.length; index++) {
    repeatStr += str[index].repeat(2);
  }
  return repeatStr;
};

repeater('Hello'); // "HHeelllloo"
repeater('Good job!'); // "GGoooodd  jjoobb!!"
repeater(''); // ""

/* 

Also possible solution:

function repeater(string) {
  return string.split("").map(char => char + char).join("");
}
 */
