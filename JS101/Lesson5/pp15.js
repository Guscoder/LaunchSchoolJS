/* Given the following data structure, write some code to return an array which contains only the objects where all the numbers are even.
 */

let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

arr.filter((obj) => {
  return Object.values(obj).every((subArr) => {
    return subArr.every((num) => num % 2 === 0);
  });
});

/* If all of the numbers in an inner array are even, then the inner callback returns true to the innermost call to every. If all of the inner callbacks for a particular object return true, then the middle callback returns true to the outer call to every, which in turn causes the outer callback to return true to the filter method for that iteration */
