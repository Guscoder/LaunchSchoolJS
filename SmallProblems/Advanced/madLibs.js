/* 
Build a madlibs program that takes a text "template" as input, plugs in a selection of randomized nouns, verbs, adjectives, and adverbs into that text, and then returns it. You can build your lists of nouns, verbs, adjectives, and adverbs directly into your program. Your program should read this text and, for each line, place random words of the appropriate types into the text and return the result.

Problem Understanding:

I will need to create a template that has various blank spots for specific types of words. The program will then take the template in as an argument, fill in words where appropriate, and output the final paragraph/story.

input: template string (paragraph/sentences)
output: string including the template

rules:
1. have lists of verbs, nouns, adjectives, adverbs in program
2. get random word from lists to fill in appropriate spots in template

algo:
-create a template with spots to add specific types of words (outside the function)
-create separate lists of verbs, nouns, adjectives, adverbs
-iterate through template words to find matching words
    -match generic words to word type from lists
    -generate random word from appropriate list-use Math.random()
    -fill in matching word with random word
-return completed template

****NOTE****
If I created a different type of string template where there was punctuation next to any of the replaceable string words, I would need to add a regex to strip the punctuation from the word before checking if it needed to be changed.
*/

const madLibsTemplate =
  "You've got two adjective halves of coconut and you're bangin' 'em together. \n" +
  'So? We have ridden since the snows of winter covered this noun and through the kingdom of Mercea, through--\n' +
  "Where'd you verb the coconut? \n" +
  'We found them. \n' +
  "Found them? In Mercea? The coconut's adjective you know! \n" +
  'What do you mean? \n' +
  'Well, this is a adjective zone. \n' +
  'The swallow may verb south with the sun or the house martin or the plumber may seek adjective climes in winter yet these are not strangers to our noun eh?\n' +
  'Are you suggesting coconuts verb eh?';

const nouns = [
  'bird',
  'house',
  'bed',
  'paper',
  'pen',
  'glass',
  'ship',
  'balloon',
  'tree',
];
const verbs = ['run', 'drive', 'fly', 'laugh', 'eat', 'hit', 'ride', 'throw'];

const adjectives = [
  'blue',
  'happy',
  'small',
  'dry',
  'cranky',
  'fast',
  'yellow',
  'bumpy',
];
const adverbs = [
  'quickly',
  'jokingly',
  'lightly',
  'gently',
  'angrily',
  'clearly',
  'closely',
];

// This is a helper function to get a random number to use to get a random word from one of the word arrays
function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

// This is a helper function to determine what words need to be replaced in the template. When a word is found that needs to be replaced, it accesses the correct word list and chooses a random word by calling the helper function getRandomIndex.

function replaceWord(word) {
  if (word === 'noun') {
    //access the list of nouns
    let wordList = nouns;
    //choose a random noun using the helper function
    return wordList[getRandomIndex(wordList.length)];
  } else if (word === 'verb') {
    let wordList = verbs;
    return wordList[getRandomIndex(wordList.length)];
  } else if (word === 'adjective') {
    let wordList = adjectives;
    return wordList[getRandomIndex(wordList.length)];
  } else if (word === 'adverb') {
    let wordList = adverbs;
    return wordList[getRandomIndex(wordList.length)];
  }
}

function madlibs(template) {
  return (
    template
      // to iterate through the words, we use the split method to convert the string to an array
      .split(' ')
      // I use the map method to return each word or the word transformed into a noun, verb, adjective, or adver from our list. This is the best method because we need to return a new array with some changed words
      .map((word) => {
        console.log(word);
        // this if statement checks if the word is one we need to change
        if (
          word === 'noun' ||
          word === 'verb' ||
          word === 'adjective' ||
          word === 'adverb'
        ) {
          // here I call the replaceWord helper function to change the word to the appropriate type for the template
          return replaceWord(word);
        } else {
          // if I don't need to change the word, we return the word itself
          return word;
        }
      })
      // take the new array and convert it back to a string with spaces in betweem each word
      .join(' ')
  );
}

console.log(madlibs(madLibsTemplate));
