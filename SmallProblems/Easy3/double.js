/* Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character. */

// identify chars that are more than 1 in a row besides each other

function crunch(text) {
  let index = 0;
  let crunchText = '';

  while (index <= text.length - 1) {
    if (text[index] !== text[index + 1]) {
      crunchText += text[index];
    }
    index += 1;
  }
  return crunchText;
}

function crunch(str) {
  var filtered = str.replace(/[^\w\s]|(.)\1/gi);
  return filtered;
}

crunch('ddaaiillyy ddoouubbllee'); // "daily double"
crunch('4444abcabccba'); // "4abcabcba"
crunch('ggggggggggggggg'); // "g"
crunch('a'); // "a"
crunch(''); // ""
