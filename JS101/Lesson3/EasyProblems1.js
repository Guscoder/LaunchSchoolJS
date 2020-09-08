// Q1 Will the code below raise an error?

let numbers = [1, 2, 3];
numbers[6] = 5;

// No, slots 3-5 will be empty

// Bonus
let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4]; // what will this line return?

// This will return undefined, but it has no value at all (not even undefined)

//Q2 How can you determine whether a given string ends with an exclamation mark (!)?

let str1 = 'Come over here!'; // true
let str2 = "What's up, Doc?"; // false

// str.endsWith(!)

// Q3 Determine whether the following object of people and their age contains an entry for 'Spot':

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

ages.hasOwnProperty('Spot');

// Q4 Using the following string, create a new string that contains all lowercase letters except for the first character, which should be capitalized. (See the example output.)

let munstersDescription = 'the Munsters are CREEPY and Spooky.';
// => The munsters are creepy and spooky.

let firstChar = munstersDescription.substring(0, 1);
munstersDescription =
  firstChar.toUpperCase() + munstersDescription.toLowerCase().substring(1);

console.log(munstersDescription);

// Q5 What will the following code output?

console.log(false == '0'); // true--0 is coerced into a falsy value
console.log(false === '0'); // false

// Q6

let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };

// Add entries for Marilyn and Spot to the object:

let additionalAges = { Marilyn: 22, Spot: 237 };

Object.assign(ages, additionalAges);

console.log(ages);

// Q7 Determine whether the name Dino appears in the strings below -- check each string separately):

let str1 =
  'Few things in life are as important as house training your pet dinosaur.';
let str2 = 'Fred and Wilma have a pet dinosaur named Dino.';

str1.includes('Dino');
str2.includes('Dino');

// Q8 How can we add the family pet, "Dino", to the following array?

let flintstones = ['Fred', 'Barney', 'Wilma', 'Betty', 'Bambam', 'Pebbles'];

flintstones.push('Dino');

// Q9 In the previous problem, our first answer added 'Dino' to the array like this:
flintstones.push('Dino', 'Hoppy');

// Q10 Return a new version of this sentence that ends just before the word house. Don't worry about spaces or punctuation: remove everything starting from the beginning of house to the end of the sentence.

let advice =
  'Few things in life are as important as house training your pet dinosaur.';
// Expected return value:
// => 'Few things in life are as important as '

let start = advice.indexOf('house');
advice = advice.slice(0, start);
console.log(advice);
