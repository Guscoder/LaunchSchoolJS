function newStack() {
  let stack = [];

  return {
    push(val) {
      stack.push(val);
    },
    pop() {
      stack.pop();
    },
    printStack() {
      stack.forEach((item) => console.log(item));
    },
  };
}

let list = newStack();

list.push("me");
list.push("you");
console.log(list.printStack());
