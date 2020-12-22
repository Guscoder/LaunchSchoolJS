function foo(condition) {
  let bar;

  console.log(bar);

  let qux = 0.5772;

  if (condition) {
    qux = 3.1415;
    console.log(qux);
  } else {
    bar = 24;

    let xyzzy = function () {
      let qux = 2.7183;
      console.log(qux);
    };

    console.log(qux);
    console.log(xyzzy());
  }

  qux = 42;
  console.log(qux);
}

foo(true);
foo(false);

// function Pet(name, image) {
//     this.name = name;
//     this.image =  image;
//   }

//   var Image;
//   var catImage;
//   var pudding;

//   Pet.prototype.walk = function() {
//     console.log(`${this.name} is walking.`);
//   };

//   Image = class {
//     constructor(file) {
//       this.file = file;
//     }
//   };

//   catImage = new Image("cat.png");
//   pudding = new Pet("Pudding", catImage);

function Pet(name, image) {
  this.name = name;
  this.i;
  mage = image;
}
var Image;
var catImage;
var pudding;

Pet.prototype.walk = function () {
  console.log(`${this.name} is walking.`);
};

Image = class {
  constructor(file) {
    this.file = file;
  }
};

catImage = new Image("cat.png");
pudding = new Pet("Pudding", catImage);
