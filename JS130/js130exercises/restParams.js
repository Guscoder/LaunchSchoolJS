let sum = (...args) => {
  return args.reduce(function (a, b) {
    return a + b;
  });
};

sum(1, 4, 5, 6); // 16

// How can we refactor the invocation of the function formatName (without changing the function definition) so that we don't need to grab each element of the array fullName by index?
function formatName(firstName, middleName, lastName) {
  return `${lastName}, ${firstName} ${middleName[0]}.`;
}

fullName = ["James", "Tiberius", "Kirk"];

console.log(formatName(...fullName));
// logs: Kirk, James T.
