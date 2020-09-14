/* Write a function that determines and returns the ASCII string value of a string passed in as an argument. The ASCII string value is the sum of the ASCII values of every character in the string. (You may use String.prototype.charCodeAt() to determine the ASCII value of a character.)


Algorithm:
1. input string
2. change to array
3. iterate through each letter
    -create var sum
    -add each char value to sum
    -return total of sum
*/

function asciiValue(str) {
  let charValueArray = [];

  for (let i = 0; i < str.length; i++) {
    charValueArray.push(str.charCodeAt(i));
  }
  //   console.log(charValueArray);

  let sum = charValueArray.reduce((acc, value) => {
    return acc + value;
  }, 0);

  console.log(sum);
}

// alternative

// function asciiValue(string) {
//     let sum = 0;

//     for (let idx = 0; idx < string.length; idx += 1) {
//       sum += string.charCodeAt(idx);
//     }

//     return sum;
//   }

asciiValue('Four score'); // 984
asciiValue('Launch School'); // 1251
asciiValue('a'); // 97
asciiValue(''); // 0
