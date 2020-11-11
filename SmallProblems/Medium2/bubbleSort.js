/* Write a function that takes an array as an argument and sorts that array using the bubble sort algorithm described above. The sorting should be done "in-place" — that is, the function should mutate the array. You may assume that the array contains at least two elements. */

/* 

input: array strings or numbers
output: mutated array sorted by value ascending

rules:
1. arg will have at least 2 values
2. sorting should mutate the original array

algo:
1. Get length of array
2. iterate trhough array
    -compare if the first item is less than the next item?
    - if yes,switch places in the current array
    -if no, move to next item and recompare
3. COntinue until it goes through the entire array without swapping anything
4. Return final sorted array

*/

function bubbleSort(arr) {
  while (true) {
    let swapping = false;

    for (let index = 1; index < arr.length; index++) {
      if (arr[index - 1] <= arr[index]) continue;

      [arr[index - 1], arr[index]] = [arr[index], arr[index - 1]];
      swapping = true;
    }
    if (!swapping) break;
  }
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1); // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2); // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3); // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
