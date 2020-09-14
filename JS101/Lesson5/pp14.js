/* Given the following data structure write some code to return an array containing the colors of the fruits and the sizes of the vegetables. The sizes should be uppercase, and the colors should be capitalized. */

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

/* The return value should look like this:

[["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"] */

let arr = [];

Object.values(obj).forEach((item) => {
  if (item.type === 'fruit') {
    arr.push(item.colors.map((word) => word[0].toUpperCase() + word.slice(1)));
  } else if (item.type === 'vegetable') {
    arr.push(item.size.toUpperCase());
  }
});

console.log(arr);
