/* 
Implement a binarySearch function that takes an array and a searchItem as arguments, and returns the index of the searchItem if found, or -1 otherwise. You may assume that the array argument will always be sorted.

My summary:
Create a search function that makes it quicker to search an array for a specific searchItem. The search should look for the word in half of the items, then half of those half, etc...until it locates the search item. 

input: array of items and a search item(string)
output: index of the search item OR -1 if not found

rules:
1. output -1 if item not found in array
2. input array will already be sorted

algo: 
-create var to hold final index number
-loop through array by halves until item found or all searched
-find median index of array
-check if search item is at median index, if yes return index, if not:
-check if median value is less than search item value
  -if yes, search remaining second half of array
-if not less, search remaining first half of array not including median value
-repeat process-while loop?
-Return index of search item OR -1


*/
function binarySearch(arr, searchItem) {
  //setting end index of array elements to include in search
  let arrayEnd = arr.length - 1;
  //setting start index of array elements to include in search
  let arrayStart = 0;
  // since I am searching over and over until I find the item (or don't find it) I choose a while loop that will keep iterating until the condition is met or a value is returned)
  while (arrayStart <= arrayEnd) {
    // find the median value of the current array section being searched
    let medianValue = arrayStart + Math.floor(arrayEnd - arrayStart / 2);
    //check if element at location medianValue index # matches search item and return if it does
    if (arr[medianValue] === searchItem) return medianValue;
    // if statement to choose which half of the array to continue sarching in
    if (arr[medianValue] < searchItem) {
      //change start index if I need to search the bottom half of the array
      arrayStart = medianValue + 1;
    } else if (arr[medianValue] > searchItem) {
      // change end index if I want to search the top half of the array
      arrayEnd = medianValue - 1;
    }
  }
  // if no value is returned from the while loop, the array did not contain the item so it returns -1
  return -1;
}
