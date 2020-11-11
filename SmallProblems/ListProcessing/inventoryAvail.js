/* Building on the previous exercise, write a function that returns true or false based on whether or not an inventory item is available. As before, the function takes two arguments: an inventory item and a list of transactions. The function should return true only if the sum of the quantity values of the item's transactions is greater than zero. Notice that there is a movement property in each transaction object. A movement value of 'out' will decrease the item's quantity.

You may (and should) use the transactionsFor function from the previous exercise. 


Algo:
1. iterate through trans array and see if key exists
2. If exists:
    a. compute how many items are available
        -slect item
        -create item total = 0
        -if "in", add number of items to total
        -if 'out', subtract number of items to total
    b. If more than 0, return true, otherwise return false
3. If not exist, return false

*/

let transactions = [
  { id: 101, movement: 'in', quantity: 5 },
  { id: 105, movement: 'in', quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in', quantity: 12 },
  { id: 103, movement: 'out', quantity: 20 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in', quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in', quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 },
];

const transactionsFor = (item, transactionList) => {
  return transactionList.filter((listItem) => {
    return listItem.id === item;
  });
};

const isItemAvailable = (itemId, list) => {
  let matchingItems = transactionsFor(itemId, list);
  let totalAvailable = 0;

  matchingItems.forEach((listItem) => {
    if (listItem.movement === 'in') {
      totalAvailable += listItem.quantity;
    } else {
      totalAvailable -= listItem.quantity;
    }
  });
  console.log(totalAvailable > 0);
};

isItemAvailable(101, transactions); // false
