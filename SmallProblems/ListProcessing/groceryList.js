/* Write a function that takes a grocery list (a two-dimensional array) with each element containing a fruit and a quantity, and returns a one-dimensional array of fruits, in which each fruit appears a number of times equal to its quantity. 

input: nested array
output: array containing each number of items on list

algorithm:
1. iterate through each grocery item
2. create new array for all items
3. for each item, add item name to list as many times as required
4. output array list of items
*/

const buyFruit = (groceryList) => {
  let listItems = [];
  groceryList.forEach((item) => {
    for (let index = 1; index <= item[1]; index++) {
      listItems.push(item[0]);
    }
  });
  return listItems;
};

buyFruit([
  ['apple', 3],
  ['orange', 1],
  ['banana', 2],
]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
