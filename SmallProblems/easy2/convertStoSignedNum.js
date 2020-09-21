function stringToNumber(str) {
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

  let arrayOfDigits = str.split('').map((char) => DIGITS[char]);
  let value = 0;
  arrayOfDigits.forEach((digit) => (value = 10 * value + digit));
  return value;
}

function stringToSignedInteger(str) {
  switch (str[0]) {
    case '-':
      return -stringToNumber(str.slice(1, str.length));
    case '+':
      return stringToNumber(str.slice(1, str.length));
    default:
      return stringToNumber(str);
  }
}

console.log(stringToSignedInteger('4321') === 4321); // logs true
console.log(stringToSignedInteger('-570') === -570); // logs true
console.log(stringToSignedInteger('+100') === 100); // logs true
