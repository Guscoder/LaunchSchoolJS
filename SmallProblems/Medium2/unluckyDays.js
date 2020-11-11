/* Some people believe that Fridays that fall on the 13th day of the month are considered to be unlucky days. Write a function that takes a year as an argument, and returns the number of Friday the 13ths in that year. You may assume that the year is greater than 1752, which is when the United Kingdom adopted the modern Gregorian Calendar. You may also assume that the same calendar will remain in use for the foreseeable future.

Algo:
Iterate over all the months of the given year.
For each month, get the day that falls on the 13th.
Count the 13ths that fall on a Friday.
Return the count.

 */

function getDay(month, year) {
  let options = { weekday: 'long' };
  let whatDay = new Date(`${month} 13 ${year}`);
  return new Intl.DateTimeFormat('en-US', options).format(whatDay);
}

function fridayThe13ths(year) {
  let fridayCount = 0;
  for (let month = 0; month <= 11; month++) {
    if (getDay(month, year) === 'friday') {
      fridayCount += 1;
    }
  }
  return fridayCount;
}

fridayThe13ths(1986); // 1
fridayThe13ths(2015); // 3
fridayThe13ths(2017); // 2
