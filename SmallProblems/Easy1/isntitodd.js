/* eslint-disable max-len */

// Write a function that takes one integer argument, which may be positive, negative, or zero. This method returns true if the number's absolute value is odd. You may assume that the argument is a valid integer value.

// Problem
// Input: one integer
// Output: Boolean (true if the number's absolute value is odd, else false)
// Rules:
// 1. argument is a valid integer
// 2. integer may be positve, negative or 0

// Data Structure:
// Number

// Algorithm
// 1. Find absolute value of argument number
// 2. Check if the number is odd
// 3. If number is odd, return true, otherwise return false

// Examples: console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

function isOdd(num) {
  while (num !== 0) {
    let absValue = Math.abs(num);
    return absValue % 2 === 1;
  }
  return false;
}

// Alt Solution
// function isOdd(number) {
//     return Math.abs(number) % 2 === 1;
//   }
