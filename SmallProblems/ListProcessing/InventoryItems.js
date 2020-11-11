/* Write a function that takes two arguments, inventoryItem and transactions, and returns an array containing only the transactions for the specified inventoryItem. 

input: array of objects
output: array of matching objects

algo:
1. create ew array for matchign transactions
2. look through each array item object to find matching id key
3. add matching object to new array
4. output new array list

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

transactionsFor(101, transactions);
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]
