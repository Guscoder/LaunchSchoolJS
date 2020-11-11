/* Write a function that takes a string argument, and returns a list of all substrings that start from the beginning of the string, ordered from shortest to longest. */

const leadingSubstrings = (str) => {
  let stringList = [];
  for (let index = 1; index < str.length; index++) {
    stringList.push(str.substring(0, index));
  }
  return stringList;
};

leadingSubstrings('abc'); // ["a", "ab", "abc"]
leadingSubstrings('a'); // ["a"]
leadingSubstrings('xyzzy'); // ["x", "xy", "xyz", "xyzz", "xyzzy"]
