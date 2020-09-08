// eslint-disable-next-line max-len

// Log all odd numbers from 1 to 99, inclusive, to the console. Log all numbers on separate lines.

for (let number = 1; number < 100; number += 2) {
  console.log(number);
}

// alternative method

function logOdd(num) {
  for (let x = 0; x < num; x++) {
    if (x % 2 === 1) {
      console.log(x);
    }
  }
}

logOdd();
