/* Write a function that takes a string argument consisting of a first name, a space, and a last name, and returns a new string consisting of the last name, a comma, a space, and the first name.  */

const swapName = (str) => {
  return str.split(' ').reverse().join(', ');
};

swapName('Joe Roberts'); // "Roberts, Joe"

const swapMidName = (str) => {
  let newName = str.split(' ');
  let lastName = newName.pop(newName.length - 1);
  let fullName = `${lastName}, ${newName.join(' ')}`;
  console.log(fullName);
};

swapMidName('Karl Oskar Henriksson Ragvals'); // "Ragvals, Karl Oskar Henriksson"
