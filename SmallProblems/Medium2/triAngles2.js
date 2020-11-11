/* eslint-disable max-len */
/* A triangle is classified as follows:

Right: One angle is a right angle (exactly 90 degrees).
Acute: All three angles are less than 90 degrees.
Obtuse: One angle is greater than 90 degrees.
To be a valid triangle, the sum of the angles must be exactly 180 degrees, and every angle must be greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the three angles of a triangle as arguments, and returns one of the following four strings representing the triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'.

You may assume that all angles have integer values, so you do not have to worry about floating point errors. You may also assume that the arguments are in degrees.

input: 3 numbers
output: string - type of triangle or invalid

rules:
1. all angles are integers
2. args are in degrees

Algo:
1.Check if valid triangle:
    -sum of 3 angles is 180 AND
    -all angles are greater than 0
    -if valid, determine what type of triangle it is
    -if not, return string invalid
2. Determine type of triangle
    -is one angle = 90? -> right
    -are all 3 agles less than 90? -> acute
    -is 1 angle greater than 90? -> obtuse
 */

function isValidTriangle(angle1, angle2, angle3) {
  return (
    angle1 + angle2 + angle3 === 180 && angle1 > 0 && angle2 > 0 && angle3 > 0
  );
}

function triangleType(angle1, angle2, angle3) {
  if (angle1 > 90 || angle2 > 90 || angle3 > 90) {
    return 'right';
  } else if (angle1 < 90 && angle2 < 90 && angle3 < 90) {
    return 'acute';
  } else {
    return 'obtuse';
  }
}

function triangle(angle1, angle2, angle3) {
  if (!isValidTriangle(angle1, angle2, angle3)) {
    return 'invalid';
  } else {
    return triangleType(angle1, angle2, angle3);
  }
}

triangle(60, 70, 50); // "acute"
triangle(30, 90, 60); // "right"
triangle(120, 50, 10); // "obtuse"
triangle(0, 90, 90); // "invalid"
triangle(50, 50, 50); // "invalid"
