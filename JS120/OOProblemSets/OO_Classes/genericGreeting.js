class Cat {
  constructor(name) {
    this.name = name;
  }
  static genericGreeting() {
    console.log("Hello! I'm a cat!");
  }
  personalGreeting() {
    console.log(`Hello! My name is ${name}`);
  }
}

Cat.genericGreeting();
