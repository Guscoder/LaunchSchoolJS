class Truck {
  constructor() {
    Object.assign(this, tow);
  }
}

class Car {}

const tow = {
  tow() {
    return 'I can tow a trailer!';
  },
};

let truck = new Truck();
truck.tow();
