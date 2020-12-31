// Write a program that uses the Sieve of Eratosthenes to find all the primes from 2 up to a given number.

// The Sieve of Eratosthenes is a simple, ancient algorithm for finding all prime numbers up to any given limit. It does so by iteratively marking as composite (i.e. not prime) the multiples of each prime, starting with the multiples of 2. It does not use any division or remainder operation.

// Create your range, starting at two and continuing up to and including the given limit. (i.e. [2, limit]).

// The algorithm consists of repeating the following over and over:

// take the next available unmarked number in your list (it is prime)
// mark all the multiples of that number (they are not prime)
// repeat until you have processed each number in your range.
// When the algorithm terminates, all the numbers in the list that have not been marked are prime.

// make list/array of numbers from 2 to limit
// loop from 2 to limit
//   -loop and multiply num times 2,3,4 etc...
//  -stop loop when product is greater than limit num
//  -check if each product is in array
//      -if yes, remove that number from array
//  return array of remaining prime numbers

function primes(limit) {
  let numList = [...Array(limit - 1).keys()].map((x) => x + 2);
  let primeList = [...numList];
  numList.forEach((num) => {
    for (let index = 2; index < numList.length - 1; index++) {
      let productNum = num * index;
      if (primeList.includes(productNum)) {
        let indexNum = primeList.indexOf(productNum);
        primeList.splice(indexNum, 1);
      }
    }
  });
  return primeList;
}
module.exports = primes;
