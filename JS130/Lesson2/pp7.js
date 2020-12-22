function foo(bar, qux, baz) {
  return {
    bar: bar,
    qux: qux,
    baz: baz,
  };
}

let baz = foo.baz;

function foo([one, , three]) {
  return [three, 5, one];
}
// change to:
function foo(arr) {
  return [arr[2], 5, arr[0]];
}

let array = [1, 2, 3];
let result = foo(array);
let [bar, qux, baz] = result;
//change to:
let bar = results[0];
let qux = results[1];
let baz = results[2];

function product(arr) {
  return arr[0] * arr[1] * arr[2];
}

let array = [2, 3, 5];
let result = product(...array);
//change to:
let result = product(array);

function product(...numbers) {
  return numbers.reduce((total, number) => total * number);
}

let result = product(2, 3, 4, 5);
//change to:
function product() {
  let args = Array.from(arguments);
  return args.reduce((total, number) => total * number);
}

// OPTIONAL Assume that you have some code that looks like this:

function qux() {
  let animalType = "cat";
  let age = 9;
  let colors = ["black", "white"];
  // missing code
  return {
    type: animalType,
    age,
    colors,
  };
}

let { type, age, colors } = qux();
console.log(type); // cat
console.log(age); // 9
console.log(colors); // [ 'black', 'white' ]

// OPTIONAL Write a function that takes 5 string arguments, and returns an object with 3 properties:

// first: the first argument
// last: the last argument
// middle: the middle 3 arguments as a sorted array
// After writing the function, write some code to call the function. The arguments you provide should come from an array. You should create local variables named first, last, and middle from the return value.

// Use shorthand syntax wherever you can.

function yada(first, ...args, last){
return {
    first,
    middle: ...args
    last,
}
}

let {first, middle, last} = yada(['jerry', 'elaine', 'kramer', 'george', 'newman']);
