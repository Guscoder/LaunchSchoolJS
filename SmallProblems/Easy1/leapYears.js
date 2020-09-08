/* eslint-disable max-len */
// eslint-disable-next-line max-len

/* In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4, unless the year is also divisible by 100. If the year is evenly divisible by 100, then it is not a leap year, unless the year is also evenly divisible by 400.

Assume this rule is valid for any year greater than year 0. Write a function that takes any year greater than 0 as input, and returns true if the year is a leap year, or false if it is not a leap year. */

/* 
Input: a year greater than 0
Output: True/False
 Algorithm:
 1. Is year evenly divisible by 4?
    -also divisible by 100? NOT a leap year return fals
    -also divisible by 100 & 400? return true

*/

function isLeapYear(year) {
  while (year > 1752) {
    if (year % 400 === 0) {
      return true;
    } else if (year % 100 === 0) {
      return false;
    } else {
      return year % 4 === 0;
    }
  }

  return year % 4 === 0;
}

// alternative

function findLeapYear(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}
