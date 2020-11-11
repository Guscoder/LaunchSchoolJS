/* 
A good recursive function has three primary qualities:

It calls itself at least once.
It has an ending condition — e.g., if (num === 1), in the sum function above.
The results of each recursion are used in each step — e.g., num + sum(num - 1) uses sum(num - 1).
Write a recursive function that computes the nth Fibonacci number, where nth is an argument passed to the function.
*/

const fibonacci = (num) => {
  if (num <= 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
};

fibonacci(1); // 1
fibonacci(2); // 1
fibonacci(3); // 2
fibonacci(4); // 3
fibonacci(5); // 5
fibonacci(12); // 144
fibonacci(20); // 6765
