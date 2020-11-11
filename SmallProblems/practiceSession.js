// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

// For example:

// Let's say you are given the array [1,2,3,4,3,2,1]:
// Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index [1,2,3] and the sum of the right side of the index [3,2,1] both equal 6.

// Another one:
// You are given the array [20,10,-80,10,10,15,35]
// At index 0 the left side is []
// The right side is [10,-80,10,10,15,35]
// They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
// Index 0 is the place where the left side and right side are equal.
/* 

input; array of nums
output: index //#   

rules:
1. blank array = 0
2. if no valid index, return -1

algo:
1. create var to hold index # 
2. iterate through array
    -create two separate arrays with index# in between
    -get sum of each array
    -compare sums:
        -if sums are equal, save index # to var
        -if not equal, carry on
3. Return index # or -1


*/

function findEvenIndex(arr) {
  let finalIndex;
  console.log(finalIndex);
  for (let index = 0; index < arr.length; index++) {
    let firstHalf = arr.slice(0, index).reduce((acc, val) => acc + val, 0);
    let secondHalf = arr.slice(index + 1).reduce((acc, val) => acc + val, 0);
    console.log(firstHalf);
    console.log(secondHalf);
    if (firstHalf !== secondHalf) continue;
    if (firstHalf === secondHalf) {
      finalIndex = index;
    }
  }
  return finalIndex === undefined ? -1 : finalIndex;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]) === 3); // true
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]) === 1); // true
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]) === -1); // true
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]) === 3); // true
console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]) === 0); // true
console.log(findEvenIndex([10, -80, 10, 10, 15, 35, 20]) === 6); // true
console.log(findEvenIndex([-1, -2, -3, -4, -3, -2, -1]) === 3); // true

// SOlution
//
//PEDAC
//UNDERSTAND THE PROBLEM:
//1.
//2.
//3.
//Input:
//- arr of integers
//Output:
//- int - index
//Rules:
// Explicit:
//-  sum of numbers on the left side needs to be equal to the right side
//-  the current index not included
//-
//-
//-Implicit
//-
//-
//Questions:
//-
//EXAMPLES/TEST CASES:
//i:
//=>
//o:
//=>
//MENTAL MODEL:
//*
//DATA STRUCTURES:
//ALGORYTHM:
//-  iterate through array
//-  slice an array from beginning until the index and assign it to variable left side
//- slice the array starting from index to the end of the array
//- assign it to variable right side
//- sum both of the sides and compare
// if the same return the index
// if not the same continue
// if the end of the array but not found then return -1;
//Checklist:
//- () ;
//- names
//-logic
//- return  !!!!!!!!!!
//PSEUDOCODE:
//CODE:
function findEvenIndex(arr) {
  let left;
  let right;
  for (let index = 0; index < arr.length; index++) {
    left = arr.slice(0, index);
    right = arr.slice(index + 1);
    if (!right.length) right = [0];
    if (!left.length) left = [0];
    if (
      left.reduce((acc, num) => acc + num) ===
      right.reduce((acc, num) => acc + num)
    ) {
      return index;
    }
  }
  return -1;
}
//console.log(findEvenIndex([1,2,3,4,3,2,1]));
console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]) === 3); // true
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]) === 1); // true
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]) === -1); // true
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]) === 3); // true
console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]) === 0); // true
console.log(findEvenIndex([10, -80, 10, 10, 15, 35, 20]) === 6); // true
console.log(findEvenIndex([-1, -2, -3, -4, -3, -2, -1]) === 3); // true

//The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array of integers:

//maxSequence [-2, 1, -3, 4, -1, 2, 1, -5, 4]
//-- should be 6: [4, -1, 2, 1]
//Easy case is when the array is made up of only positive numbers and the maximum sum is the sum of the whole array. If the array is made up of only negative numbers, return 0 instead.

//Empty array is considered to have zero greatest sum. Note that the empty array is also a valid subarray.

console.log(maxSequence([]) === 0); // true
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6); // true
console.log(maxSequence([11]) === 11); // true
console.log(maxSequence([-32]) === 0); // true
console.log(maxSequence([-2, 1, -7, 4, -10, 2, 1, 5, 4]) === 12); // true

/* 
input: array
output: number (sum of numbers in array)

rules:
1. empty array = 0
2. array only neg numbs = 0

algo:
0. See if array is empty, return 0
0. Check if array is all neg nums, return 0
1. iterate through array and get all possile subarray sequences
    -save each sequence in array as nested array
2. find sum of each subarray
3. save each subarray sum that is larger than the previous one
4. return  sum

*/
function maxSequence(arr) {
  if (arr.length === 0) return 0;

  if (
    arr.every((num) => {
      return num < 0;
    })
  )
    return 0;

  let largestSum = 0;

  for (let idx = 0; idx < arr.length; idx++) {
    for (let inner = idx + 1; inner <= arr.length; inner++) {
      let subSeq = arr.slice(idx, inner);
      let subSum = subSeq.reduce((acc, ele) => acc + ele, 0);

      if (subSum > largestSum) {
        largestSum = subSum;
      }
    }
  }

  return largestSum;
}

function maxSequence(arr) {
  let largestSum = 0;

  if (arr.length === 0) return 0;
  if (arr.slice().sort((a, b) => b - a)[0] <= 0) return 0;

  for (let idx = 0; idx < arr.length; idx++) {
    for (let inner = idx + 1; inner <= arr.length; inner++) {
      let subSeq = arr.slice(idx, inner);
      let subSum = subSeq.reduce((acc, ele) => acc + ele, 0);

      if (subSum > largestSum) {
        largestSum = subSum;
      }
    }
  }

  return largestSum;
}
