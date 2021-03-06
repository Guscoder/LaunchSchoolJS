class Rectangle {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }
  getLength() {
    return this.length;
  }
  getWidth() {
    return this.width;
  }
  getArea() {
    return this.length * this.width;
  }
}

let rect = new Rectangle(4, 5);

console.log(rect.getWidth()); // 4
console.log(rect.getLength()); // 5
console.log(rect.getArea()); // 20

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
}

let square = new Square(5);
console.log(`area of square = ${square.getArea()}`); // area of square = 25
