// OPTIONAL Write a function that takes 5 string arguments, and returns an object with 3 properties:

// first: the first argument
// last: the last argument
// middle: the middle 3 arguments as a sorted array
// After writing the function, write some code to call the function. The arguments you provide should come from an array. You should create local variables named first, last, and middle from the return value.

// Use shorthand syntax wherever you can.

function yada(first, middle1, middle2, middle3, last) {
  return {
    first,
    middle: [middle1, middle2, middle3].sort(),
    last,
  };
}

let arr = ["jerry", "elaine", "kramer", "george", "newman"];
let { first, middle, last } = yada(...arr);

console.log(first);
console.log(middle);
console.log(last);
