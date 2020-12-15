class Pet {
  constructor(species, name) {
    this.species = species;
    this.name = name;
  }
  info() {
    return `a ${this.animal} named ${this.name}`;
  }
}
class Owner {
  constructor(name) {
    this.name = name;
    this.petsOwned = [];
  }
  addPet(pet) {
    this.petsOwned.push(pet);
  }
  numberOfPets() {
    console.log(this.petsOwned.length);
  }
  printPets() {
    this.petsOwned.forEach((pet) => console.log(pet.info()));
  }
}
class Shelter {
  constructor() {
    this.owners = {};
    this.availablePets = {};
  }
  adopt(owner, pet) {
    owner.addPet(pet);
    this.owners[owner.name] = owner;
  }
  printAdoptions() {
    for (let name in this.owners) {
      console.log(`${name} has adopted the following pets:`);
      this.owners[name].printPets();
      console.log('');
    }
  }
}

let butterscotch = new Pet('cat', 'Butterscotch');
let pudding = new Pet('cat', 'Pudding');
let darwin = new Pet('bearded dragon', 'Darwin');
let kennedy = new Pet('dog', 'Kennedy');
let sweetie = new Pet('parakeet', 'Sweetie Pie');
let molly = new Pet('dog', 'Molly');
let chester = new Pet('fish', 'Chester');

let phanson = new Owner('P Hanson');
let bholmes = new Owner('B Holmes');

let shelter = new Shelter();
shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);
shelter.printAdoptions();
console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);

// The Animal Shelter has the following unadopted pets:
// a dog named Asta
// a dog named Laddie
// a cat named Fluffy
// a cat named Kat
// a cat named Ben
// a parakeet named Chatterbox
// a parakeet named Bluebell
//    ...

// P Hanson has 3 adopted pets.
// B Holmes has 4 adopted pets.
// The Animal shelter has 7 unadopted pets.
