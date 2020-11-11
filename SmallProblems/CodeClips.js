// check if string/array holds multiple of the same digits/letters

// The allUnique function uses a seen object to determine whether a digit already exists in the number. If the function finds that a digit appears more than once while iterating over the digits, then the number is not a featured number.

function allUnique(number) {
  let digits = String(number).split('');
  let seen = {};

  for (let idx = 0; idx < digits.length; idx += 1) {
    if (seen[digits[idx]]) {
      return false;
    }

    seen[digits[idx]] = true;
  }

  return true;
}

// Sort through an array by value

function bubbleSort(arr) {
  while (true) {
    let swapping = false;

    for (let index = 1; index < arr.length; index++) {
      if (arr[index - 1] <= arr[index]) continue;

      [arr[index - 1], arr[index]] = [arr[index], arr[index - 1]]; //destructuring assignment
      swapping = true;
    }
    if (!swapping) break;
  }
}

// Add/multiply range of numbers
function computeSum(targetNum) {
  let total = 0;

  for (let num = 1; num <= targetNum; num += 1) {
    total += num;
  }

  return total;
}

function computeProduct(targetNum) {
  let total = 1;

  for (let num = 1; num <= targetNum; num += 1) {
    total *= num;
  }

  return total;
}

// Loop through string to do something with each letter
function asciiValue(string) {
  let sum = 0;

  for (let idx = 0; idx < string.length; idx += 1) {
    sum += string.charCodeAt(idx);
  }

  return sum;
}

// Convert String Digit to Number Digit
function stringToInteger(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  };
  let arrayOfDigits = string.split('').map((char) => DIGITS[char]);
  let value = 0;
  arrayOfDigits.forEach((digit) => (value = 10 * value + digit));

  return value;
}

function stringToSignedInteger(string) {
  switch (string[0]) {
    case '-':
      return -stringToInteger(string.slice(1, string.length));
    case '+':
      return stringToInteger(string.slice(1, string.length));
    default:
      return stringToInteger(string);
  }
}

// Convert a number to a string

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(number) {
  let result = '';

  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);

    result = DIGITS[remainder] + result;
  } while (number > 0);

  return result;
}

function signedIntegerToString(number) {
  switch (Math.sign(number)) {
    case -1:
      return `-${integerToString(-number)}`;
    case +1:
      return `+${integerToString(number)}`;
    default:
      return integerToString(number);
  }
}

// Fibonacci Crap

function findFibonacciIndexByLength(length) {
  let first = 1;
  let second = 1;
  let index = 2;
  let fibonacci;

  do {
    fibonacci = first + second;
    index += 1;
    first = second;
    second = fibonacci;
  } while (String(fibonacci).length < length);

  return index;
}
/* The function starts off with the initialization of the Fibonacci sequence. The first and second numbers, as defined, are both assigned the value of 1 while the value of index is 2.

The solution then uses a do...while loop to increment the value of fibonacci while its length is less than the value of the argument passed. At every iteration the solution does the following:

Computes the value for fibonacci by adding up the first and second values.
Increments index by 1. It returns the value if it meets the length requirement of fibonacci.
Sets the value of first to the value of second, and the value of second to the value of fibonacci. If the criteria for stopping the loop isn't met at the end of this iteration, it uses the two numbers for the computation of fibonacci in the next iteration. */

// Generate random number between two numbers

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let age = randomBetween(20, 120);

// Is it a letter? Is it a number? Remove nonalpha numeric chars

//REGEX version:
function isRealPalindrome(string) {
  string = string.toLowerCase().replace(/[^a-z0-9]/g, '');
  return isPalindrome(string);
}

//Non regex version:
function isRealPalindrome(string) {
  string = removeNonLetterNumbers(string.toLowerCase());
  return isPalindrome(string);
}

function removeNonLetterNumbers(string) {
  let result = '';

  for (let idx = 0; idx < string.length; idx += 1) {
    if (isLetter(string[idx]) || isNumber(string[idx])) {
      result += string[idx];
    }
  }

  return result;
}

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isNumber(char) {
  return char >= '0' && char <= '9';
}

// Letter swapping

function swap(string) {
  return string
    .split(' ')
    .map((word) => {
      word = word.split('');
      [word[0], word[word.length - 1]] = [word[word.length - 1], word[0]];
      return word.join('');
    })
    .join(' ');
}

// LS version

function swap(words) {
  let wordsArray = words.split(' ');

  for (let idx = 0; idx < wordsArray.length; idx += 1) {
    wordsArray[idx] = swapFirstLastCharacters(wordsArray[idx]);
  }

  return wordsArray.join(' ');
}

function swapFirstLastCharacters(word) {
  if (word.length === 1) {
    return word;
  }

  return word[word.length - 1] + word.slice(1, -1) + word[0];
}

// get all substrings of string

function getSubstrings(string) {
  let substrings = [];
  for (let startIndex = 0; startIndex < string.length; startIndex += 1) {
    let substring = string.substring(startIndex);
    let itemSubstrings = [];
    for (let length = 1; length <= substring.length; length += 1) {
      itemSubstrings.push(substring.slice(0, length));
    }
    substrings = substrings.concat(itemSubstrings);
  }
  return substrings;
}

// ALSO

function getSubstrings(string) {
  let stringArray = [];
  for (let startIndex = 0; startIndex < string.length; startIndex++) {
    for (let endIndex = startIndex + 1; endIndex <= string.length; endIndex++) {
      stringArray.push(string.slice(startIndex, endIndex));
    }
  }
  return stringArray;
}

// Combine 2 arrays with no dupicate numbers

function copyNonDupsTo(resultArray, array) {
  array.forEach((value) => {
    if (!resultArray.includes(value)) {
      resultArray.push(value);
    }
  });
}

function union(array1, array2) {
  let newArray = [];
  copyNonDupsTo(newArray, array1);
  copyNonDupsTo(newArray, array2);
  console.log(newArray);
}

// Count number of each item in an array

function countOccurrences(arr) {
  let countObj = {};

  vehicles.forEach((item) => {
    if (countObj[item]) {
      countObj[item] += 1;
    } else {
      countObj[item] = 1;
    }
  });

  logOccurrences(countObj);
}

function logOccurrences(obj) {
  for (let item in obj) {
    console.log(`${item} => ${obj[item]}`);
  }
}

// search string and return items in order as items in array(menu)

const menu = [
  'Burger',
  'Fries',
  'Chicken',
  'Pizza',
  'Sandwich',
  'Onionrings',
  'Milkshake',
  'Coke',
];
const capitalize = (word) => word.slice(0, 1).toUpperCase() + word.slice(1);
const comparator = (a, b) => menu.indexOf(a) - menu.indexOf(b);

function getOrder(input) {
  return input
    .match(new RegExp(menu.join('|'), 'ig'))
    .map(capitalize)
    .sort(comparator)
    .join(' ');
}

// Find or count specific word in a long piece of text

function searchWord(word, text) {
  let ucWord = word.toUpperCase();
  let ucWordsInText = text.toUpperCase().split(' ');
  let count = 0;

  for (let index = 0; index < ucWordsInText.length; index += 1) {
    if (ucWordsInText[index] === ucWord) {
      count += 1;
    }
  }

  return count;
}

// find and replace words

function searchWord(word, text) {
  let regex = new RegExp(word, 'gi');
  return text.replace(regex, `**${word.toUpperCase()}**`);
}

// Replace actual number with english word for the number

let NUMBER_WORDS = [
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
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
];

function wordSort(num1, num2) {
  if (NUMBER_WORDS[num1] > NUMBER_WORDS[num2]) {
    return 1;
  } else if (NUMBER_WORDS[num1] < NUMBER_WORDS[num2]) {
    return -1;
  } else {
    return 0;
  }
}

function alphabeticNumberSort(array) {
  return array.sort(wordSort);
}
