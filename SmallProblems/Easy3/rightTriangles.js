/*  Write a function that takes a positive integer, n, as an argument, and logs a right triangle whose sides each have n stars. The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, and the other end at the upper-right.

algorithm:
1. print line with spaces and an asterisk


*/

function triangle(lines) {
  for (let i = 1; i <= lines; i++) {
    let spaces = ' '.repeat(lines - i);
    let stars = '*'.repeat(i);
    console.log(`${spaces}${stars}`);
  }
}

triangle(5);
triangle(9);
