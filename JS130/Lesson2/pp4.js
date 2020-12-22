/* eslint-disable max-len */
function makeMultipleLister(num) {
  return function () {
    let num2 = Math.floor(100 / num);
    for (let index = 1; index <= num2; index++) {
      console.log(num * index);
    }
  };
}

// function makeMultipleLister(number) {
//   return () => {
//     for (let multiple = number; multiple < 100; multiple += number) {
//       console.log(multiple);
//     }
//   };
// }

// let lister = makeMultipleLister(17);
// lister();

// Write a program that uses two functions, add and subtract, to manipulate a running total. When you invoke either function with a number, it should add or subtract that number from the running total and log the new total to the console. It should work like this:

let total = 0;

function add(num) {
  total += num;
  console.log(total);
}

function subtract(num) {
  total -= num;
  console.log(total);
}

add(1); // 1
add(42); // 43
subtract(39); // 4
add(6); // 10

// Write a function named later that takes two arguments: a function and an argument for that function. The return value should be a new function that calls the input function with the provided argument, like this:

function later(func, arg) {
  return () => {
    func(arg);
  };
}

const logger = (message) => console.log(message);
let logWarning = later(logger, "The system is shutting down!");
logWarning(); // The system is shutting down!

// Write a function named later2 that takes two arguments: a function and an argument for that function. The return value should be a new function that also takes an argument. The new function should call the input function with the argument provided to later2 and the argument provided to the returned function. For example:

function later2(func, argument) {
  return (arg2) => {
    func(argument, arg2);
  };
}

const notify = function (message, when) {
  console.log(`${message} in ${when} minutes!`);
};

let shutdownWarning = later2(notify, "The system is shutting down");
shutdownWarning(30); // The system is shutting down in 30 minutes!

// The built-in Function.prototype.bind method performs partial function application by allowing you to specify some of the function's arguments when you invoke bind. It also permanently binds the new function to a specific execution context with its first argument. That binding is, in a sense, also an example of partial function application. Here, the "argument" we're applying to the function is the function's execution context.

// Write a function that emulates the context binding aspect of bind. That is, your version of bind should merely call the function with the desired context; it doesn't need to pass any arguments to the function. Here's how you can use your function:

("use strict");

function bind(context, func) {
  return () => func.call(context);
}

let obj = {};
let boundFunc = bind(obj, function () {
  this.foo = "bar";
});

boundFunc();
console.log(obj); // { foo: 'bar' }
