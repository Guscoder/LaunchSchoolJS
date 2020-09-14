let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(multiply(myNumbers, 3)); // => [3, 12, 9, 21, 6, 18]

function multiply(numbersArray, integer) {
  return numbersArray.forEach((num) => num * integer);
}


// PP 8
let flintstones = ['Fred', 'Barney', 'Wilma', 'Betty', 'Pebbles', 'Bambam'];

function createObject(arr) {
  let flintObj = {};

  for (let i = 0; i < arr.length; i++) {
    flintObj[flintstones[i]] = i;
  }
  console.log flintObj
}

// alternative

// let flintstonesObj = {};

// flintstones.forEach((name, index) => {
//   flintstonesObj[name] = index;
// });



// PP 9

// Add up all of the ages from the Munster family object:

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let sum = Object.values(ages).reduce((acc, val) => {return acc + val}, 0);

console.log(sum)

// PP 10 

// Pick out the minimum age from our current Munster family object:

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let sortedArr = Object.values(ages).sort(function(a,b){return a - b;})

console.log(sortedArr[0]);

/// alternative

let agesArr = Object.values(ages);
Math.min(...agesArr);

// PP 11

// Create an object that expresses the frequency with which each letter occurs in this string:

let statement = "The Flintstones Rock";

// filter out spaces
let charsInStatement = statement.split('').filter(char => char !== ' ');
let result = {};

// get number of chars
charsInStatement.forEach(char=>{
  result[char] = result[char] || 0;
  result[char] += 1;
})
