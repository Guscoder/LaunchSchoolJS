/* 
Using the multiply() function from the "Multiplying Two Numbers" problem, write a function that computes the square of its argument (the square is the result of multiplying a number by itself).
 

*/

const multiply = (num1, num2) => num1 * num2;

function square(num) {
  return multiply(num, num);
}

function powerN(num, n) {
  let sum = 1;
  for (let x = 1; x <= n; x++) {
    sum = multiply(sum, num);
  }
  console.log(sum);
}
