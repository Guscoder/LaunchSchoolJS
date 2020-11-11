/* eslint-disable max-lines-per-function */
/* 
Write a function that implements a miniature stack-and-register-based programming language that has the following commands (also called operations or tokens):

n : Place a value, n, in the register. Do not modify the stack.
PUSH : Push the register value onto the stack. Leave the value in the register.
ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
DIV : Pop a value from the stack and divide it into the register value, storing the integer result in the register.
MOD : Pop a value from the stack and divide it into the register value, storing the integer remainder of the division in the register.
POP : Remove the topmost item from the stack and place it in the register.
PRINT : Print the register value.
All operations are integer operations (which is only important with DIV and MOD).

Programs will be supplied to your language function via a string argument. Your function may assume that all arguments are valid programs — i.e., they will not do anything like trying to pop a non-existent value from the stack, and they won't contain any unknown tokens.

Initialize the stack and register to the values [] and 0, respectively.


algo:
1. create empty array as stack
2. create register = 0
3. convert string argu to array
4. iterate through array to determine actions based on each item's value
    -check if number, if yes add to register
    -if string, match to command and carry out task of command

*/

const minilang = (commandString) => {
  let stack = [];
  let register = 0;
  commandString.split(' ').forEach((command) => {
    if (Number(command) == command) {
      register = Number(command);
    } else {
      switch (command) {
        case 'PUSH':
          stack.push(register);
          break;
        case 'ADD':
          register += stack.pop();
          break;
        case 'SUB':
          register -= stack.pop();
          break;
        case 'MULT':
          register *= stack.pop();
          break;
        case 'DIV':
          register = Math.floor(register / stack.pop());
          break;
        case 'MOD':
          register = Math.floor(register % stack.pop());
          break;
        case 'POP':
          register = stack.pop();
          break;
        case 'PRINT':
          console.log(register);
          break;
        default:
          break;
      }
    }
  });
};
