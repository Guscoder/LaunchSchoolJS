/* Write a function that takes a string as an argument, and returns that string with every lowercase letter changed to uppercase and every uppercase letter changed to lowercase. Leave all other characters unchanged. */

const swapCase = (string) => {
  return string
    .split('')
    .map((char) => {
      return char === char.toUpperCase()
        ? char.toLowerCase()
        : char.toUpperCase();
    })
    .join('');
};

swapCase('CamelCase'); // "cAMELcASE"
swapCase('Tonight on XYZ-TV'); // "tONIGHT ON xyz-tv"
