/* eslint-disable max-len */

// Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip, and then log both the tip and the total amount of the bill to the console. You can ignore input validation and assume that the user will enter numbers.

// input:
// 1. bill amount (dollars)
// 2. tip rate (percent)
// output:
// 1. tip amount total
// 2. total of bill including tip
// rules:
// 1. ignore validation
// 2. assume user will enter numbers
/*

Algorithm:
1. take input
2. convert tip amount to percent in decimal form
3. get tip amount by multiplying bill * tip percent
4. add tip amount to bill amount for total bill
5. display to user the tip amount and final total bill amount
*/

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function convertTip(tipPercent) {
  return tipPercent * 0.01;
}

function totalBill(tipAmount, billAmount) {
  return tipAmount + billAmount;
}

function displayBill(totalTip, totalBill) {
  console.log(`The tip is $${totalTip}\n The total is $${totalBill}`);
}

function tipCalculator() {
  prompt('What is the bill?');
  let myBill = readline.question();

  prompt('What is the tip percentage?');
  let percent = readline.question();

  let myTip = convertTip(percent);

  let finalBill = totalBill(myTip, myBill);

  displayBill(myTip, finalBill);
}

tipCalculator();
