/* eslint-disable max-len */

// Q1 Write three different ways to remove all of the elements from the following array:

let numbers = [1, 2, 3, 4];

numbers.splice(0);

numbers = [];

numbers.length = 0;

while (numbers.length) {
  numbers.pop();
}
console.log(numbers);

// Q2 What will the following code output?

console.log([1, 2, 3] + [4, 5]);

// 1,2,34,5--the + first converts the arrays to strings, and then concatenates the strings,

// Q3 What will the following code output?

let str1 = 'hello there';
let str2 = str1;
str2 = 'goodbye!';
console.log(str1);

// It will output 'Hello there' because strings are immutable and cant be changed. JS passes them by value not by reference. It passes a copy of the value/string. Line 27 passes str a new string which just happens to be a copy of str1. Line 28 then asisgns str2 an entirely new string.

// Q4 What will the following code output?

let arr1 = [{ first: 'value1' }, { second: 'value2' }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

// slice performs a shallow copy not a deep copy, so both arra variables point to the same object, therefore when we replace the value in arr2 it shows up in arr1 also because they are both pointed at (referencing) the same array in memory

// Q5 The following function unnecessarily uses two return statements to return boolean values. How can you eliminate the unnecessary duplication?

function isColorValid(color) {
  if (color === 'blue' || color === 'green') {
    return true;
  } else {
    return false;
  }
}

function isColorValid(color) {
  color === 'blue' || color === 'green' ? true : false;
}

function isColorValid(color) {
  return color === 'blue' || color === 'green';
}

const isColorValid = (color) => color === 'blue' || color === 'green';

const isColorValid = (color) => ['blue', 'green'].includes(color);
