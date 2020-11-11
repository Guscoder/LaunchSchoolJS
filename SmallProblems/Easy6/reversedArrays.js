/* Write a function that takes an Array as an argument, and reverses its elements in place; that is, mutate the Array passed into this method. The return value should be the same Array object. */

const reverse = (arr) => {
  let length = arr.length;
  let newArr = [];
  for (let index = 0; index < length; index++) {
    newArr[index] = arr.pop();
  }
  for (let index = 0; index < length; index++) {
    arr[index] = newArr[index];
  }
  return arr;
};

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true

function reverse(array) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex < array.length / 2) {
    [array[leftIndex], array[rightIndex]] = [
      array[rightIndex],
      array[leftIndex],
    ];
    leftIndex += 1;
    rightIndex -= 1;
  }
  return array;
}
