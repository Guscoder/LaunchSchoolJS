/* 
Create a function that takes 2 arguments, an array and an object. The array will contain 2 or more elements that, when combined with adjoining spaces, will produce a person's name. The object will contain two keys, "title" and "occupation", and the appropriate values. Your function should return a greeting that uses the person's full name, and mentions the person's title.

input: 2 arguments, one array and one object
    -array: contains 2 or more elements
    -object: contains 2 keys: title and occupation with values
output: return a string greeting using person's name and title

algorithm
1. turn array into string with space in between elements
2. create string using name and title

*/

function greetings(name, info) {
  let personName = name.join(' ');
  let title = info.title;
  let occupation = info.occupation;

  return `Hello ${personName}! Glad to have a ${title} ${occupation} to help me.`;
}

console.log(
  greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' })
);
