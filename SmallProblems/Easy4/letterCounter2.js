function wordSizes(string) {
  const wordObject = {};

  if (string.length === 0) return wordObject;
  let wordArray = string.split(' ');
  wordArray.forEach((word) => {
    let wordLength = word.replace(/[^A-Za-z]/g, '').length;
    wordObject[wordLength] = wordObject[wordLength] + 1 || 1;
  });
  console.log(wordObject);
}

wordSizes('Four score and seven.'); // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!'); // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?"); // { "2": 1, "4": 1, "6": 1 }
wordSizes(''); // {}
