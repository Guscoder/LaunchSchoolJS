/* Write a function that takes a string consisting of zero or more space separated words, and returns an object that shows the number of words of different sizes.

Words consist of any sequence of non-space characters. 

input: string with 0 or more words
output: an object showing number of words with different sizes

algorithm:
1. convert string to array
2. create empty object
3. count length of each word
4. add key/value to object if key doesn't exist
5. if key already exists, add 1 to value
6. return object

*/

function wordSizes(string) {
  const wordObject = {};

  if (string.length === 0) return wordObject;
  let wordArray = string.split(' ');
  wordArray.forEach((word) => {
    let wordLength = word.length;
    wordObject[wordLength] = wordObject[wordLength] + 1 || 1;
  });
  console.log(wordObject);
}

wordSizes('Four score and seven.'); // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!'); // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?"); // { "2": 1, "4": 1, "6": 1 }
wordSizes(''); // {}
