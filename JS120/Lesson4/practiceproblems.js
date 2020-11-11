function createPet(animal, name) {
  return {
    animal,
    name,
    sleep: function () {
      return 'I am sleeping';
    },
    wake: function () {
      return 'I am awake';
    },
  };
}

let PetPrototype = {
  sleep: function () {
    return 'I am sleeping';
  },
  wake: function () {
    return 'I am awake';
  },
  init(animal, name) {
    this.animal = animal;
    this.name = name;
    return this;
  },
};

class Greeting {
  greet(string) {
    console.log(string);
  }
}

class Hello extends Greeting {
  hi() {
    this.greet('Hello');
  }
}

class Goodbye extends Greeting {
  bye() {
    this.greet('Goodbye');
  }
}

class WheeledVehicle {
  constructor(tirePressure, kmTravelledPerLiter, fuelCapInLiter) {
    this.tires = tirePressure;
    this.fuelEfficiency = kmTravelledPerLiter;
    this.fuelCap = fuelCapInLiter;
  }

  tirePressure(tireIdx) {
    return this.tires[tireIdx];
  }

  inflateTire(tireIdx, pressure) {
    this.tires[tireIdx] = pressure;
  }
}

Object.assign(WheeledVehicle.prototype, Moveable);

const Moveable = {
  range() {
    return this.fuelCap * this.fuelEfficiency;
  },
};

class Auto extends WheeledVehicle {
  constructor() {
    // the array represents tire pressure for four tires
    super([30, 30, 32, 32], 50, 25.0);
  }
}

class Motorcycle extends WheeledVehicle {
  constructor() {
    // array represents tire pressure for two tires
    super([20, 20], 80, 8.0);
  }
}

class Catamaran {
  constructor(propellerCount, hullCount, kmTravelledPerLiter, fuelCapInLiter) {
    // catamaran specific logic

    this.propellerCount = propellerCount;
    this.hullCount = hullCount;
  }
}

Object.assign(Catamaran.prototype, Moveable);

function Child(name, school) {
  Person.call(this, name);
  this.school = school;
}
