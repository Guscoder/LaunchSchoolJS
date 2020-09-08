/* eslint-disable max-len */

/* Write a function that takes two strings as arguments, determines the longer of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths. */

/* 
Algorithm
1. Get length of each string
2. compare the length of each string to find the longer one
3. concat the strings in order short + long + short
4. return concatenated string
 */

function shortLongShort(str1, str2) {
  return str1.length > str2.length
    ? console.log(`${str2}${str1}${str2}`)
    : console.log(`${str1}${str2}${str1}`);
}

shortLongShort('abc', 'defgh'); // "abcdefghabc"
shortLongShort('abcde', 'fgh'); // "fghabcdefgh"
shortLongShort('', 'xyz'); // "xyz"
