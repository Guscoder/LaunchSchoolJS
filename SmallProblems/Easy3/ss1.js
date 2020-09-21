// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

// 2332
// 110011
// 54322345

// You'll be given 2 numbers as arguments: (num, s). Write a function which returns an array of s number of numerical palindromes that come after num. If num is a palindrome itself, it should be included in the count.

// Return "Not valid" instead if any one of the inputs is not a number or is less than 0.

// Single digit numbers will NOT be considered numerical palindromes.

// UNDERSTAND THE PROBLEM
// input: (number, number)
// return array of s number of palindromes
// what is a palindrome?

// rules:
// single digits aren't palindromes
// if an argument is not a number or < 0, return 'not valid'
// negative numbers are invalid
// include first argument
// if second argument is 0, return empty arr

// data structures:
// array

// ALGORITHM

/* 

1. Is an argument less than 0 or neg? Return 'not'valid'
2. create empty list to hold palindromes
3. starting at num, count up from num looking for palindromes
    a. SUBPROCESS -> is the number a palindrome?
    b. compare the current num to a reverse of itself
    c. if it matches, add it to the palindrome list, then go to the next number
    d. if it does not match then go to the next number
    e. stop looking for palindromes after you find palindrome s
4. output/return list of palindromes


*/

// TEST CASES
console.log(palindrome(6, 4));
// [11,22,33,44]
console.log(palindrome(75, 1));
// [77]
console.log(palindrome(101, 2));
// [101,111]
console.log(palindrome(20, 0));
// []
console.log(palindrome(0, 4));
// [11,22,33,44]

console.log(palindrome('ACCDDCCA', 3));
// "Not valid"
console.log(palindrome(773, '1551'));
// "Not valid"
console.log(palindrome(-4505, 15));
// "Not valid"
console.log(palindrome(4505, -15));
// "Not valid"
