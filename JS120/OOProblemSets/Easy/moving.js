class Person {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return 'strolls';
  }
}

class Cat {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return 'saunters';
  }
}

class Cheetah {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return 'runs';
  }
}

const walking = {
  walk() {
    console.log(`${this.name} ${this.gait()} forward.`);
  },
};

Object.assign(Cheetah.prototype, walking);
Object.assign(Person.prototype, walking);
Object.assign(Cat.prototype, walking);

let mike = new Person('Mike');
console.log(mike.walk());
// "Mike strolls forward"

let kitty = new Cat('Kitty');
console.log(kitty.walk());
// "Kitty saunters forward"

let flash = new Cheetah('Flash');
console.log(flash.walk());
// "Flash runs forward"
