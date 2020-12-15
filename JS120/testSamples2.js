// Factory Function

function createVehicle(model, passengers, tires) {
  return {
    model,
    passengers,
    tires,
    startEngine() {
      this.engineOn = true;
    },
    getGas() {
      this.gas = 'full';
    },
  };
}

const TowingAbility = {
  tow() {
    console.log('towing');
  },
};

// FF with Mixin

function createCar(model, passengers, tires) {
  return Object.assign({}, createVehicle(model, passengers, tires));
}

function createTruck(model, passengers, tires) {
  return Object.assign(
    {},
    createVehicle(model, passengers, tires),
    TowingAbility
  );
}

let myCar = createCar('datsun', 4, 4);
let myTruck = createTruck('Ranger', 2, 4);
console.log(myCar);
console.log(myTruck);

// Constructor & Prototype;

function Vehicle(model, passengers, tires) {
  this.model = model;
  this.passengers = passengers;
  this.tires = tires;
}

Vehicle.prototype.startEngine = function () {
  this.engineOn = true;
};

Vehicle.prototype.getGas = function () {
  this.gas = 'full';
};

let myVehicle = new Vehicle('Sunbird', 4, 4);

console.log(Object.getPrototypeOf(myVehicle));
console.log(Vehicle.prototype.isPrototypeOf(myVehicle));
console.log(myVehicle instanceof Vehicle);
console.log(myVehicle.constructor.name);
console.log(Vehicle.prototype.constructor);

// C & P Sub-class & with Mixin

// Mixin to add
const TowingAbility = {
  tow() {
    console.log('towing');
  },
};

// Create subclass of Vehicle
function Truck(model, passengers, tires) {
  Vehicle.call(this, model, passengers, tires);
}

Truck.prototype = Object.create(Vehicle.prototype);
Truck.prototype.constructor = Truck;

// Add Mixin
Object.assign(Truck.prototype, TowingAbility);

let myTruck = new Truck('Ranger', 2, 4);

console.log(Object.getPrototypeOf(myTruck));
console.log(Truck.prototype.isPrototypeOf(myTruck));
console.log(myTruck instanceof Vehicle);
console.log(myTruck.constructor);
console.log(myTruck.constructor.name);

myTruck.tow();

for (let prop in myTruck) {
  console.log(prop);
}

// OLOO

const Vehicle = {
  startEngine() {
    this.engineOn = true;
  },
  getGas() {
    this.gasTank = 'full';
  },
  init(model, passengers, tires) {
    this.model = model;
    this.passengers = passengers;
    this.tires = tires;
    return this;
  },
};



console.log(myVehicle);
myVehicle.tow();

// ES6 Classes

class Vehicle {
  constructor(model, passengers, tires) {
    this.model = model;
    this.passengers = passengers;
    this.tires = tires;
  }
  startEngine() {
    this.engineOn = true;
  }
  getGas() {
    this.gasTank = 'full';
  }
}

// Mixin to add
const TowingAbility = {
  tow() {
    console.log('towing');
  },
};

class Truck extends Vehicle {
  constructor() {
    super();
  }
}
Object.assign(Truck.prototype, TowingAbility);

class Car extends Vehicle {
  constructor() {
    super();
  }
}
class Sedan extends Car {}

class StationWagon extends Car {}
Object.assign(StationWagon.prototype, TowingAbility);

// Static Properties/Methods in Classes

class Vehicle {
  static description = 'Land transportation';

  constructor() {
    this.model = model;
    this.passengers = passengers;
    this.tires = tires;
  }
  static describeTruck() {
    console.log('A truck is good for rugged work!');
  }
}

// Static Properties/Methods in Constructors/Prototypes

function Vehicle(model, passengers, tires) {
  this.model = model;
  this.passengers = passengers;
  this.tires = tires;
}

Vehicle.allTrucks = [];
Vehicle.transportationType = function () {
  console.log('Vehicles are a type of land transportation with wheels.');
};

// Polymorphism & Duck-typing w/inheritance

class Vehicle {
  move() {
    console.log('drive');
  }
}

class Truck extends Vehicle {
  move() {
    console.log('four wheel drive');
  }
}

// Polymorphism--different types same method call

class Motorcycle {
  move() {}
}

class Boat {
  move() {}
}

let animals = [new Fish(), new Cat(), new Sponge(), new Coral()];
animals.forEach(animal => animal.move());


// Implicit Execution context


// Add mixin using Class constructor function
const swimMixin = {
  swim() {
    return `${this.name} is swimming.`;
  }
}

class Fish {
  constructor(name) {
    this.name = name;
    Object.assign(this, swimMixin);
  }
}

// Search obj & its prototypes for a property & add value

function assignProperty(obj, property, value) {
  while (obj !== null) {
    if (obj.hasOwnProperty(property)) {
      obj[property] = value;
      break;
    }

    obj = Object.getPrototypeOf(obj);
  }
}