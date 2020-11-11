/* Write a function that combines two arrays passed as arguments, and returns a new array that contains all elements from both array arguments, with each element taken in alternation.

You may assume that both input arrays are non-empty, and that they have the same number of elements. */

// const interleave = (arr1, arr2) => {
//   let combinedArr = [];
//   for (let index = 0; index < arr1.length; index++) {
//     combinedArr.push(arr1[index]);
//     combinedArr.push(arr2[index]);
//   }
//   console.log(combinedArr);
// };

const interleave = (arr1, arr2) => {
  let combinedArr = [];
  arr1.forEach((val, index) => {
    combinedArr.push(arr1[index], arr2[index]);
  });

  console.log(combinedArr);
};

interleave([1, 2, 3], ['a', 'b', 'c']); // [1, "a", 2, "b", 3, "c"]
