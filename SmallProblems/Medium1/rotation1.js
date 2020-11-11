/* Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

If the input is not an array, return undefined.
If the input is an empty array, return an empty array. 

input: array
output: array or undefined or empty array

algo:
1. check if argument is an array--of not return undefined
2. check if arg is an empty array--return empty array
3. create copy of original array
4. remove first element from copied array
5. add removed element to end of copied array
6. return copied array

*/

const rotateArray = (arr) => {
  if (!Array.isArray(arr)) {
    return undefined;
  } else if (arr.length === 0) {
    return [];
  } else {
    let copiedArr = [...arr];
    let element = copiedArr.shift();
    copiedArr.push(element);
    return copiedArr;

    // return array.slice(1).concat(array[0]);
  }
};

rotateArray([7, 3, 5, 2, 9, 1]); // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']); // ["b", "c", "a"]
rotateArray(['a']); // ["a"]
rotateArray([1, 'a', 3, 'c']); // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]); // [[1, 2], 3, { a: 2 }]
rotateArray([]); // []

// return `undefined` if the argument is not an array
rotateArray(); // undefined
rotateArray(1); // undefined

// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array); // [2, 3, 4, 1]
array; // [1, 2, 3, 4]
