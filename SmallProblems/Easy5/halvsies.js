/* Write a function that takes an array as an argument, and returns an array that contains two elements, each of which is an array. Put the first half of the original array elements in the first element of the return value, and put the second half in the second element. If the original array contains an odd number of elements, place the middle element in the first half array. */

const halvsies = (arr) => {
  let middleNum = Math.ceil(arr.length / 2);

  let newArr = [];
  newArr.push(arr.slice(0, middleNum));
  newArr.push(arr.slice(middleNum));
  return newArr;
};

halvsies([1, 2, 3, 4]); // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]); // [[1, 5, 2], [4, 3]]
halvsies([5]); // [[5], []]
halvsies([]); // [[], []]
