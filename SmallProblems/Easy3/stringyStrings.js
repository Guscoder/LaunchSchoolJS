/*Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. The length of the string should match the given integer.  */

function stringy(int) {
  let newStr = '';
  for (let x = 1; x <= int; x++) {
    if (x % 2 !== 0) {
      newStr += '1';
    } else {
      newStr += '0';
    }
  }
  return newStr;
}

stringy(6); // "101010"
stringy(9); // "101010101"
stringy(4); // "1010"
stringy(7); // "1010101"
