/* Write a function that takes a year as input and returns the century. The return value should be a string that begins with the century number, and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.

algorithm:
1. Create comparison object to determine the century
2. any year under 100 is 1st
3. remove last two digits
    a. then add 1 to remaining number -> thisis the century
    b. Unless last digit is 0, then the century is the same as the number 


*/

function century(year) {
  let centuryNumber = Math.floor(year / 100) + 1;

  if (year % 100 === 0) {
    centuryNumber -= 1;
  }

  return String(centuryNumber) + centurySuffix(centuryNumber);
}

function centurySuffix(centuryNumber) {
  if (catchWithTh(centuryNumber % 100)) {
    return 'th';
  }

  let lastDigit = centuryNumber % 10;
  switch (lastDigit) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

function catchWithTh(lastTwo) {
  return lastTwo === 11 || lastTwo === 12 || lastTwo === 13;
}

century(2000);

// "20th"
century(2001); // "21st"
century(1965); // "20th"
century(256); // "3rd"
century(5); // "1st"
century(10103); // "102nd"
century(1052); // "11th"
century(1127); // "12th"
century(11201); // "113th"
