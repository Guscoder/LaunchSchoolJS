/* eslint-disable max-lines-per-function */
/* Write a function that takes a string, and returns an object containing the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither
You may assume that the string will always contain at least one character.

input: string
output: object w/% of each type of letter

Algo:
1. Create a for loop to lop trhough teh string
2. Create a regex to macth  caps or lowers
3. Check if each element of the string matches or not
    -if a match, add to appropriate counter
    -if no match, add to other counter
4. Create object to output final percents
    -find length of string
    -compute % for each value
    -assign% value to object
5. Return object


 */

const letterPercentages = (string) => {
  const lowercase = /[a-z]/g;
  const uppercase = /[A-Z]/g;
  let strLength = string.length;
  let upperCount = 0;
  let lowerCount = 0;
  let otherCount = 0;

  for (let index = 0; index < string.length; index++) {
    if (string[index].match(lowercase)) {
      lowerCount += 1;
    } else if (string[index].match(uppercase)) {
      upperCount += 1;
    } else {
      otherCount += 1;
    }
  }
  const casePercents = {
    lowercase: ((lowerCount / strLength) * 100).toFixed(2),
    uppercase: ((upperCount / strLength) * 100).toFixed(2),
    neither: ((otherCount / strLength) * 100).toFixed(2),
  };

  return casePercents;
};

/* 
function letterPercentages(string) {
  let count = string.length;
  return {
    lowercase: (((string.match(/[a-z]/g) || []).length / count) * 100).toFixed(
      2
    ),
    uppercase: (((string.match(/[A-Z]/g) || []).length / count) * 100).toFixed(
      2
    ),
    neither: (((string.match(/[^a-z]/gi) || []).length / count) * 100).toFixed(
      2
    )
  };
}
*/

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
