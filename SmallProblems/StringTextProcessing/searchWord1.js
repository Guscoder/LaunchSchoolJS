/* Write a function that takes a word and a string of text as parameters, and returns an integer representing the number of times the word appears in the text.

You may assume that the word and text inputs will always be provided, and that all word breaks are spaces. Thus, some words will include punctuation such as periods and commas. 

input: string and one word/string
output: integer--num of time word appears in text

algo:
1. change string to array of words
2. Create counter
2. iterate trhough array
    -does word argument match any of the words in the string
    -if yes, add 1 to counter
3. retrn counter

*/

const text =
  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?';

const searchWord = (word, string) => {
  let wordCount = 0;
  var wordMatch = word;
  string.split(' ').forEach((item) => {
    if (item.toLowerCase() === wordMatch.toLowerCase()) {
      wordCount += 1;
    }
  });
  return wordCount;
};

searchWord('sed', text); // 4
searchWord('est', text); // 0
searchWord('est,', text); // 2
