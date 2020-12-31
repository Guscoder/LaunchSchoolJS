/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
// check if all sides are > 0
// check if any 2 lengths are greater than the third side
// scalene: all sides different
//isoceles: 2 sides same
// equilateral: all sides same

// eslint-disable-next-line no-unused-vars
class Triangle {
  constructor(side1, side2, side3) {
    this.sides = [side1, side2, side3];
  }
  kind() {
    let [side1, side2, side3] = this.sides;
    if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
      throw new Error("each side should be greater than 0");
    }
    if (
      side1 + side2 < side3 ||
      side1 + side3 < side2 ||
      side3 + side2 < side1
    ) {
      throw new Error(
        "any two sides combined should be equal to or greate than the third side"
      );
    }
    if (side1 === side2 && side2 === side3) {
      return "equilateral";
    } else if (side1 !== side2 && side2 !== side3 && side3 !== side1) {
      return "scalene";
    } else {
      return "isosceles";
    }
  }
}

module.exports = Triangle;
// let tri = new Triangle(0, 2, 1);
// console.log(tri);
// console.log(tri.kind());
