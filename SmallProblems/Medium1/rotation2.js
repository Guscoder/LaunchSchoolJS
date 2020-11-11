/* Write a function that rotates the last count digits of a number. To perform the rotation, move the first of the digits that you want to rotate to the end and shift the remaining digits to the left. 

input: number
output: number with digist swapped

algo:
1. convert number to string to array
2. remove digit from array
3. add digit to end of array
4. rejoin digits
5. convert to num

*/

const rotateRightmostDigits = (digits, num) => {
  let numArray = String(digits).split('');
  let endDigit = numArray.splice(numArray.length - num, 1);
  numArray.push(endDigit[0]);
  return numArray;
};

/* Alt solution from LS

function rotateRightmostDigits(number, count) {
  let numberString = String(number);
  let firstPart = numberString.slice(0, numberString.length - count);
  let secondPart = numberString.slice(numberString.length - count);
  let resultString = firstPart + rotateString(secondPart);

  return Number(resultString);
}

function rotateString(string) {
  return string.slice(1) + string[0];
}
*/

rotateRightmostDigits(735291, 1); // 735291
rotateRightmostDigits(735291, 2); // 735219
rotateRightmostDigits(735291, 3); // 735912
rotateRightmostDigits(735291, 4); // 732915
rotateRightmostDigits(735291, 5); // 752913
rotateRightmostDigits(735291, 6); // 352917
