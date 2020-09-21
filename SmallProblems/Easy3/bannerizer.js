/* 
input: string of text
output: text with a box around it in the console

algorithm:

1. Get length of text
2. add one space to the either side of the text and make it the string length
3. top/bottom line starts/ends with +, dashes in between
4. sides are stright slashes (3 of them to form the obox)
5. PRint out top row
6. Print out space, slash, space, slash + string, space, slash, space
7. Print out bottom row

*/

function logInBox(str) {
  const textLength = str.length;
  const dashLine = '-'.repeat(textLength + 2);
  const spacerLine = ' '.repeat(textLength + 2);
  console.log(`+${dashLine}+`);
  console.log(`|${spacerLine}|`);
  console.log(`| ${str} |`);
  console.log(`|${spacerLine}|`);
  console.log(`+${dashLine}+`);
}
logInBox('To boldly go where no one has gone before.');
