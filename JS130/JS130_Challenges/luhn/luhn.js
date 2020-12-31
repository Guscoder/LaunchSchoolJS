/* eslint-disable max-lines-per-function */
/* eslint-disable no-trailing-spaces */
/* eslint-disable max-len */
/* 
var numberPattern = /\d+/g;

'something102asdfkj1948948'.match( numberPattern )

The task is to check if a given string is valid.

Validating a Number Strings of length 1 or less are not valid. Spaces are allowed in the input, but they should be stripped before checking. All other non-digit characters are disallowed.

Luhn validation:

1. DOuble every second digit starting form the right
2. If doubling the number results in a number greater than 9 then subtract 9 from the product.
3. Sum all the digits
4. If the sum is divisible by 10 the number is valid


Algortithm:

1. Strip arg number of all chars or spaces, use only digits
2. iterate trhough number string and return every second number starting from the right
3. DOuble each digit
    -if sum is greater than 9, subtract 9 and return that sum
4. Add all digits together
5. divide by 10
    -if no remainder: valid
    - if remainder: invalid

*/

class Luhn {
  constructor(numString) {
    this.numberString = numString;
  }
  valid() {
    if (this.numberString.length < 2) return false;

    const numberStringNoSpaces = /[^\s]+/; // remove spaces

    const stringContents = /^\d+$/; // test for only digits

    let onlyDigits = this.numberString.replace(/\s/g, "").split("");
    if (!stringContents.test(onlyDigits) === false) return false;

    let doubledDigitsArray;

    if (onlyDigits.length % 2 === 0) {
      doubledDigitsArray = onlyDigits.map((digit, index) => {
        if (index % 2 === 0) {
          let doubledNum = Number(digit) * 2;
          return doubledNum > 9 ? doubledNum - 9 : doubledNum;
        } else {
          return Number(digit);
        }
      });
    } else {
      doubledDigitsArray = onlyDigits.map((digit, index) => {
        if (index % 2 === 1) {
          let doubledNum = Number(digit) * 2;
          return doubledNum > 9 ? doubledNum - 9 : doubledNum;
        } else {
          return Number(digit);
        }
      });
    }
    console.log(doubledDigitsArray);
    let finalSum = doubledDigitsArray.reduce((acc, val) => acc + val);
    console.log(finalSum);
    return finalSum % 10 === 0;
  }
}

module.exports = Luhn;
