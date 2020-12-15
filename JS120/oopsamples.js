// Factory Function

function createRebelShip(model, passengers, engines, shieldPower) {
  return {
    model,
    passengers,
    engines,
    shieldPower,
    weapons: {},
    cargo: [],

    startEngine() {
      this.engineOn = true;
    },
    addCargo(cargo) {
      this.cargo.push(cargo);
    },
    addProtonTorpedos() {
      this.weapons.protonTorpedos
        ? (this.weapons.protonTorpedos += 1)
        : (this.weapons.protonTorpedos = 1);
    },
    engageHyperdrive() {
      this.hyperdrive = on;
    },
  };
}

let myShip = createRebelShip('Awing', 1, 2, 100);

console.log(myShip);

// Constructor & Prototype

function RebelShip(model, passengers, engines, shieldPower) {
  this.model = model;
  this.passengers = passengers;
  this.engines = engines;
  this.shieldPower = shieldPower;
  this.cargo = [];
}

RebelShip.prototype.startEngine = function () {
  this.engineOn = true;
};
RebelShip.prototype.addCargo = function (cargo) {
  this.cargo.push(cargo);
};

let myShip = new RebelShip('Awing', 1, 2, 100);

console.log(Object.getPrototypeOf(myShip));

console.log(myShip instanceof RebelShip);

// Alternate Constructor & Prototype

function RebelShip(model, passengers, engines, shieldPower) {
  Object.setPrototypeOf(this, RebelShip.myPrototype);
  this.model = model;
  this.passengers = passengers;
  this.engines = engines;
  this.shieldPower = shieldPower;
}

RebelShip.myProtoype = {
  startEngine() {
    this.engineOn = true;
  },
  addCargo(cargo) {
    this.cargo.push(cargo);
  },
  addProtonTorpedos() {
    this.weapons.protonTorpedos += 1;
  },
  engageHyperdrive() {
    this.hyperdrive = on;
  },
};

// OLOO Object Linking Other Object

let RebelShipPrototype = {
  startEngine() {
    this.engineOn = true;
  },
  addCargo(cargo) {
    this.cargo.push(cargo);
  },
  addProtonTorpedos() {
    this.weapons.protonTorpedos += 1;
  },
  engageHyperdrive() {
    this.hyperdrive = on;
  },

  init(model, passengers, engines, shieldPower) {
    this.model = model;
    this.passengers = passengers;
    this.engines = engines;
    this.shieldPower = shieldPower;
    this.cargo = [];

    return this;
  },
};

let myShip = Object.create(RebelShipPrototype).init('aWing', 1, 2, 100);

console.log(Object.getPrototypeOf(myShip));

console.log(Object.keys(myShip));

myShip.startEngine();

myShip.addCargo('plants');

console.log(myShip);

// ES6 Classes

class RebelShip {
  constructor(model, passengers, engines, shieldPower) {
    this.model = model;
    this.passengers = passengers;
    this.engines = engines;
    this.shieldPower = shieldPower;
    this.weapons = { protonTorpedos: 1 };
    this.cargo = [];
  }
  startEngine() {
    this.engineOn = true;
  }
  addCargo(cargo) {
    this.cargo.push(cargo);
  }
  addProtonTorpedos() {
    this.weapons.protonTorpedos += 1;
  }
  engageHyperdrive() {
    this.hyperdrive = on;
  }
}

class Awing extends RebelShip {
  superShields() {
    this.shieldPower += 50;
  }
}

// Function.call & Function.apply example

function logNum() {
  console.log(this.num);
}

let obj = {
  num: 42,
};

logNum.call(obj); // logs 42

// Function.bind example

function addIt(num1) {
  return this.num + num1;
}

let myObj = {
  num: 22,
};

let addMe = addIt.bind(myObj);

addMe(56); // => 78

// Constructor function to use with or without "new": scope-safe constructors
function User(first, last) {
  if (!(this instanceof User)) {
    return new User(first, last);
  }

  this.name = first + ' ' + last;
}

let name = 'Jane Doe';
let user1 = new User('John', 'Doe');
let user2 = User('John', 'Doe');

console.log(name); // => Jane Doe
console.log(user1.name); // => John Doe
console.log(user2.name); // => John Doe

// create my own instanceOf function:

function isInstanceOf(obj, constructorFunction) {
  while (obj) {
    obj = Object.getPrototypeOf(obj);
    if (obj === constructorFunction.prototype) return true;
  }

  return false;
}

// Ancestor prototypes function

Object.prototype.ancestors = function ancestors() {
  let ancestor = Object.getPrototypeOf(this);

  if (Object.prototype.hasOwnProperty.call(ancestor, 'name')) {
    return [ancestor.name].concat(ancestor.ancestors());
  }

  return ['Object.prototype'];
};



function go(klass, arg) {
  let obj = new klass(arg);
  return obj.foo + obj.bar() + klass.qux();
}

// fill in this code
class klass{
  constructor(arg){
    this.foo = arg;
  }
  static qux(){
    returns 3;
  }
  bar(){
    returns 2;
  }
}


console.log(go(something, 5)); // 10 (note: same as 5 + 3 + 2)
console.log(go(something, 3)); // 8  (note: same as 3 + 3 + 2)