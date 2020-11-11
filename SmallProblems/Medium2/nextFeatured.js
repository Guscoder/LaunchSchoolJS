/*  A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occuring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument, and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

NOTE: The largest possible featured number is 9876543201.*/

/* 

input: integer
output: integer (featured number)

rules:
1. Featured number:
    -Odd number
    --divisble by 7
    -no repeating digits
2. If number is over 987654321, return error statement-no more featred numbers

algo:
0. Check if num arg is greater than 987654321
1. Create a var to hold the featured num
2. Iterate up from the given integer arg
    -Check if index num meets conditions:
        a. odd?
        b. divisble by 7 w/no remainder
        c. no repeating digits
    -if meets all criteria, save in feature var
3. Output feature var
*/

function repeatingDigits(num) {
  let numArray = String(num).split('');
  let repeats = false;
  for (let index = 0; index <= numArray.length; index++) {
    let digitCheck = numArray.filter((elem) => {
      return numArray[index] === elem;
    });
    if (digitCheck.length > 1) {
      repeats = true;
      break;
    }
  }
  return repeats;
}

function featured(num) {
  if (num > 987654321) return 'There are no more featured numbers!';
  let featuredNumber;
  let counter = num + 1;
  while (true) {
    if (counter % 2 === 1 && counter % 7 === 0 && !repeatingDigits(counter)) {
      featuredNumber = counter;
      break;
    }
    counter++;
  }
  return featuredNumber;
}

featured(12); // 21
featured(20); // 21
featured(21); // 35
featured(997); // 1029
featured(1029); // 1043
featured(999999); // 1023547
featured(999999987); // 1023456987
featured(9876543200); // 9876543201
featured(9876543201); // "There is no possible number that fulfills those requirements."

/* 

function featured(number) {
  const MAX_FEATURED = 9876543201;
  let featuredNum = toOddMultipleOf7(number);

  do {
    if (allUnique(featuredNum)) {
      return featuredNum;
    }

    featuredNum += 14;
  } while (featuredNum < MAX_FEATURED);

  return 'There is no possible number that fulfills those requirements.';
}

function toOddMultipleOf7(number) {
  do {
    number += 1;
  } while (number % 2 === 0 || number % 7 !== 0);

  return number;
}

function allUnique(number) {
  let digits = String(number).split('');
  let seen = {};

  for (let idx = 0; idx < digits.length; idx += 1) {
    if (seen[digits[idx]]) {
      return false;
    }

    seen[digits[idx]] = true;
  }

  return true;
}


*/
