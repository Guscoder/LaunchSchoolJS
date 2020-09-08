/* eslint-disable max-len */
// Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

// Note: 1 square meter == 10.7639 square feet

// input: user enters height in meters, user enters width in meters
//output: total area of the room in meters AND in feet

const readline = require('readline-sync');

const METER_CONVERSION = 10.7639;

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt('Enter width of room in meters');
let width = readline.question();
width = parseInt(width, 10);

prompt('Enter length of room in meters');
let length = readline.question();
length = parseInt(length, 10);

console.log(length);

let areaInMeters = width * length;

let areaInFeet = areaInMeters * METER_CONVERSION;

console.log(
  `Your room measurements are ${areaInMeters} square meters or ${areaInFeet} square feet`
);
