/* eslint-disable max-statements */
/* eslint-disable no-trailing-spaces */
/* eslint-disable max-len */
/* eslint-disable consistent-return */
/* eslint-disable max-lines-per-function */
// Given examples of a meetup dates, each containing a month, day, year, and descriptor calculate the date of the actual meetup. For example, if given "The first Monday of January 2017", the correct meetup date is 2017/1/2.

/* 
1. input: month, day, year, description
2. output: new date object

algorithm:
1. create variables for month, day, year, and description
2. subtract 1 from month (bc January is 0)
3. check if descriptor is 'teenth"
    -convert day to # 
    -loop through new Dates 13-19
        -check if each date equals the day
        -return date that matches day # 
    -return new Date with year, month, date
4. check if descriptor starts with 1, 2, 3, 4, 5
    -get first digit
    -convert day to # 
    -loop through all Dates of month
    -put each date that is the same Day into array
    -get correct date out of array array[digit]
    -return new Date with year, month, date
5. check if descriptor is "last" 
    -convert day to # 
    -loop through all Dates of month
    -put each date that is the same Day into array
    -get correct date out of array array[digit]
    -return new Date with year, month, date

*/

function meetupDay(year, month, day, description) {
  let theMonth = month;
  let theYear = year;
  let theDescription = description;
  let theDay = convertDay(day);
  let theDate;

  if (theDescription === "teenth") {
    theDate = getTeenth(theYear, theMonth, theDay);
    return new Date(theYear, theMonth, theDate);
  }

  //   4. check if descriptor starts with 1, 2, 3, 4, 5
  //     -get first digit
  //     -convert day to #
  //     -loop through all Dates of month
  //     -put each date that is the same Day into array
  //     -get correct date out of array array[digit]
  //     -return new Date with year, month, date

  if (theDescription === "last") {
    let days = getDays(theYear, theMonth, theDay);
    return days[days.length - 1];
  }

  if (Number.isInteger(parseInt(theDescription[0]))) {
    let num = parseInt(theDescription[0]);
    let days = getDays(theYear, theMonth, theDay);
    if (num === 5 && days.length === 5) {
      return days[num - 1];
    } else if (num < 5) {
      return days[num - 1];
    } else {
      throw new Error("not 5 days");
    }
  }
}

function getDays(year, month, day) {
  let d = new Date(year, month);
  let days = [];

  d.setDate(1);

  // Get the first "day" in the month
  while (d.getDay() !== day) {
    d.setDate(d.getDate() + 1);
  }

  // Get all the other Mondays in the month
  while (d.getMonth() === month) {
    days.push(new Date(d.getTime()));
    d.setDate(d.getDate() + 7);
  }

  return days;
}

function convertDay(day) {
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return weekDays.indexOf(day);
}

function getTeenth(year, month, day) {
  let theDate;
  for (let index = 13; index <= 19; index++) {
    let aDate = new Date(year, month, index);
    if (aDate.getDay() === day) {
      theDate = index;
      break;
    }
  }
  return theDate;
}

module.exports = meetupDay;
