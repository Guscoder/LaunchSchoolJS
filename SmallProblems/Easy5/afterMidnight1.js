/* The time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

Write a function that takes a time using this minute-based format and returns the time of day in 24 hour format (hh:mm). Your method should work with any integer input. 


input: number of minutes before of after midnight
output: time of day in 24h format


algorithm:
1. is min less than 60?
    a. if pos num, output num as min with 00 as hour
    b. if neg num, 60-num as min, 23 as hour
2. get num of hours
    a. divide num by 60, round down
3. get num of minutes
    a. multiply num hours * 60, then subtract from num
4. display time
    a. hours = num of hours / 24 round down
    b. mutiply hours * 24
    c. subtract product from hours
    d. output is remaining hours       
*/

const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function leadingZero(number) {
  return number < 10 ? `0${number}` : String(number);
}

function formatTime(hours, minutes) {
  return `${leadingZero(hours)}:${leadingZero(minutes)}`;
}

function timeOfDay(deltaMinutes) {
  if (deltaMinutes < 0) {
    deltaMinutes = (deltaMinutes % MINUTES_PER_DAY) + MINUTES_PER_DAY;
  } else {
    deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
  }

  let hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
  let minutes = deltaMinutes % MINUTES_PER_HOUR;

  return formatTime(hours, minutes);
}

console.log(timeOfDay(0) === '00:00');
console.log(timeOfDay(-3) === '23:57');
console.log(timeOfDay(35) === '00:35');
console.log(timeOfDay(-1437) === '00:03');
console.log(timeOfDay(3000) === '02:00');
console.log(timeOfDay(800) === '13:20');
console.log(timeOfDay(-4231) === '01:29');
