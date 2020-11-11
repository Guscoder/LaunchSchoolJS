/* A triangle is classified as follows:

Equilateral: All three sides are of equal length.
Isosceles: Two sides are of equal length, while the third is different.
Scalene: All three sides are of different lengths.
To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the lengths of the three sides of a triangle as arguments, and returns one of the following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.


input: 3 numbers
output: string - tpe of triangle or invalid

Algo:

1. Define each type of triangle
2. Define what makes a valid triangle
3. Put numbers into array, sort by value low to high
4. Is it a valid triangle?
    -if yes, figure out what kind
    -if no, return invalid
5. What kind of triangle is it?
    -all 3 side equal? return equilateral
    -only 2 sides equal? return isosceles
    -all 3 sides different? return scalene
*/
function triangle(side1, side2, side3) {
  let perimeter = side1 + side2 + side3;
  let longest = Math.max(side1, side2, side3);
  let shortest = Math.min(side1, side2, side3);
  let middle = perimeter - longest - shortest;

  if (isValid(shortest, middle, longest)) {
    return getTriangleType(side1, side2, side3);
  } else {
    return 'invalid';
  }
}

function isValid(shortest, middle, longest) {
  return shortest > 0 && shortest + middle > longest;
}

function getTriangleType(side1, side2, side3) {
  if (side1 === side2 && side2 === side3) {
    return 'equilateral';
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}

triangle(3, 3, 3); // "equilateral"
triangle(3, 3, 1.5); // "isosceles"
triangle(3, 4, 5); // "scalene"
triangle(0, 3, 3); // "invalid"
triangle(3, 1, 1); // "invalid"

/* 
 input:string
 output: the decoded string

rules:
1. if word is less than 2, no switching of letters
2. each word switch the second and last chars
3. the first letter is a CharCode, convert it back to a letter

 Algorithm:
 1. Separate string into array of words
 2. iterate through the array
  -for each word:
    -separate the numbers from teh rest of the word/letters
    -change the nuber to a letter
    -add the letter back to the word
    -switch second letter with last letter
    -return new word to array
    3. Convert array to string
 */
