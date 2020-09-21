/* A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.

Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number; return double numbers as-is.

algorithm:
1. check if the number is a double double
  a. Does it have an even number of digits? -> if not it is not a double
  b. If even number -> compare first half of number to second half
  c. Split number in half
  d. loop through first half and compare with second half digits
  e. If it is a double, output the original number
2. If num is not a double, multiply by 2 and output the total
*/

function twice(num) {
  const numLength = String(num).length;
  if (numLength % 2 !== 0) {
    return num * 2;
  } else {
    let firstHalf = String(num).substr(0, numLength / 2);
    let secondHalf = String(num).substr(numLength / 2);
    return firstHalf === secondHalf ? num : num * 2;
  }
}

twice(134134);
