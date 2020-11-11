/* Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV").


algorithm:
1. count elements in array
2.creat object to hold properties from array
3. count each element and add value to each property when it occurs
2. log each element next to number of ocurences in array
 */

const countOccurrences = (arr) => {
  let elementObject = {};
  arr.forEach((element) => {
    if (Object.keys(elementObject).includes(element)) {
      elementObject[element] += 1;
    } else {
      elementObject[element] = 1;
    }
  });
  for (const [key, value] of Object.entries(elementObject)) {
    console.log(`${key} => ${value}`);
  }
};

let vehicles = [
  'car',
  'car',
  'truck',
  'car',
  'SUV',
  'truck',
  'motorcycle',
  'motorcycle',
  'car',
  'truck',
];

countOccurrences(vehicles);
