const Armor = {
  wearArmor() {
    // function code
  },
  removeArmor() {
    // function code
  },
};

const Spells = {
  castSpell(spell) {
    // function code
  },
};

class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.strength = this.rollDice();
    this.intelligence = this.rollDice();
  }
  rollDice() {
    // get random value between 2-12 inclusive or higher depending on character
    return Math.floor(Math.random() * 11) + 2;
  }
  heal(addHealthNumber) {
    // function code
  }
  hurt(subtractHealthNumber) {
    // function code
  }
}

class Warrior extends Character {
  constructor(name) {
    super(name);
    this.strength += 2;
  }
}
Object.assign(Warrior.prototype, Armor);

class Paladin extends Character {
  constructor(name) {
    super(name);
  }
}

Object.assign(Paladin.prototype, Armor);

class Magician extends Character {
  constructor(name) {
    super(name);
    this.intelligence += 2;
  }
}
Object.assign(Magician.prototype, Spells);

class Bard extends Magician {
  constructor(name) {
    super(name);
  }
  createPotion() {
    // Function code
  }
}
Object.assign(Bard.prototype, Spells);

From Code #2
Dog.prototype = Object.create(Animal.prototype);

{}
{ speak: [Function: speak] }
{ bark: [Function] }
bark
speak
[ 'bark' ]

from Code #1
Dog.prototype = Animal.prototype;

{ speak: [Function: speak] }
{ speak: [Function: speak] }
{ speak: [Function: speak], bark: [Function] }
speak
bark
[ 'speak', 'bark' ]