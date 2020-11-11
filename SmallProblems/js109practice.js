// //Find the length of the longest substring in the given string that is the same in reverse.

// //As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

// //If the length of the input string is 0, return value must be 0.

// //Example:
// //"a" -> 1
// //"aab" -> 2
// //"abcde" -> 1
// //"zzbaabcd" -> 4
// //"" -> 0

// console.log(longestPalindrome("a")); // 1
// console.log(longestPalindrome("aa")); // 2
// console.log(longestPalindrome("baa")); // 2
// console.log(longestPalindrome("aab")); // 2
// console.log(longestPalindrome("baabcd")); // 4
// console.log(longestPalindrome("baablkj12345432133d")); // 9

/* 


input: string
output: number - length of the substring

algo: 
1. Find all the substrings of the string argument
2. Put substrings into an array of strings
3. Iterate trhough the array and check if each substring is a palindrome
4. If yes, add to array of palindromes
5. iteratee through the array of pals and add substring + length into object
6. go through object for highest value
7. Output highest value
*/

function getSubstrings(string) {
  let substrings = [];
  for (let startIndex = 0; startIndex < string.length; startIndex += 1) {
    let substring = string.substring(startIndex);
    let itemSubstrings = [];
    for (let length = 1; length <= substring.length; length += 1) {
      itemSubstrings.push(substring.slice(0, length));
    }
    substrings = substrings.concat(itemSubstrings);
  }
  return substrings;
}

const isPalindrome = (str) => {
  return str === str.split('').reverse().join('');
};

const palindromes = (arr) => {
  return getSubstrings(arr).filter((word) => isPalindrome(word));
};

const longestPalindromeLength = (str) => {
  let palindromeLengths = {};
  palindromes(str).forEach((pal) => {
    palindromeLengths[pal] = pal.length;
  });
  let values = Object.values(palindromeLengths).sort((a, b) => {
    return Number(a) - Number(b);
  });
  return values[values.length - 1];
};

// ALSO SOLUTION


function isPalindrome(arr){
  return arr.filter(string=>{
    return string === string.split('').reverse().join('');
  });
}

function getSubstrings(string){
  let stringArray = [];
  for(let startIndex = 0; startIndex < string.length; startIndex++){
    for(let endIndex = startIndex + 1; endIndex <= string.length; endIndex++){
      stringArray.push(string.slice(startIndex, endIndex)); 
    }
  }
    return stringArray;
}

function longestPalindrome(string){
  let longestLength = 0;
  if(string.length === 0) {
     return 0;
  } else if(string.length === 1){
    return 1;
  } else {
  
  let palindromes = isPalindrome(getSubstrings(string));
    
  palindromes.forEach(string => {
   if(string.length > longestLength){ longestLength = string.length;}
  });
  }
  return longestLength;

}


// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:

// All given inputs are in lowercase letters a-z.

// console.log(commonPrefix(["flower","flow","flight"]) === "fl"); // true
// console.log(commonPrefix(["dog","racecar","car"])  === ""); // true
// console.log(commonPrefix(["interspecies","interstellar","interstate"])  === "inters"); // true
// console.log(commonPrefix(["throne","dungeon"]) === ""); // true
// console.log(commonPrefix(["throne","throne"]) === "throne"); // true

/* 
input: array of strings
output: string

algo:
1. Arrange the strings by length
2. iterate through the array
    -start with shortest word
    -do any of the otehr owrds start with the same letters as the shortest word?
    --if yes, output that string/word
    --if no, take one letter off the end of the shortest word and recheck the other words
        --if one string is a match, output that string and break
    -if no match is ever found, output empty string


*/

const sortByLength = (arr) => {
  return arr.sort((a, b) => {
    return a.length - b.length;
  });
};

const prefixExists = (arr, end, prefix) => {
  return arr.every((word) => {
    return word.slice(0, end) === prefix;
  });
};

const commonPrefix = (arrOfStrings) => {
  let arrangedByLength = sortByLength(arrOfStrings);

  let shortestString = arrangedByLength.shift();

  let prefix = shortestString;

  for (let endIndex = shortestString.length; endIndex > 0; endIndex--) {
    if (prefixExists(arrangedByLength, endIndex, prefix)) {
      break;
    } else {
      prefix = prefix.slice(0, endIndex - 1);
    }
  }
  return prefix;
};

/* 

Algo:
1. Go through each string and compare each character to the characters in the other string
2. Create a results string to hold all non-common chars
2. Loop through the first string
  -take the first char
  -use it to compare to each letter of the second string using a nested for loop
  -if the char does not exist in the second string, save a copy of the char to the results string. 
3. Loop through the second string like we just did with teh first one
4. Return results string

*/

/* 

input: string
output: number (sum of numbers in string)

ALgo:
1. Change string to array
2. Iterate through array and filter out numbers
  -change each element from string to a number (use == ?)
  -. if it is a number, it gets filters to the new array
3. At the end of iteration, add all numbers in the filtered array to get the total sum
4. Return total


*/


/*
You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

    the second and the last letter is switched (e.g. Hello becomes Holle)
    the first letter is replaced by its character code (e.g. H becomes 72)


decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go'

 */
/* 
 input:string
 output: the decoded string

rules:
1. if word is less than 2, no switching of letters
2. each word switch the second and last chars
3. the first letter is a CharCode, convert it back to a letter

 Algorithm:
 1. Separate string into array of words
 2. iterate through the array
  -for each word:
    -separate the numbers from teh rest of the word/letters
    -change the nuber to a letter
    -add the letter back to the word
    -switch second letter with last letter
    -return new word to array
3. Convert array to string
 */

function getCode(string){
  return string.match(/[0-9]/g).join('');
}

function decipherThis(string){
  return string.split(' ').map(word=>{
  let letterCode = getCode(word);
   let letter =  String.fromCharCode(letterCode);
   word = letter + word.slice(letterCode.length);

   let wordArray = word.split('');
   let secChar = wordArray[1];
   let lastChar = wordArray[word.length -1]

   wordArray[1] = lastChar;
   wordArray[wordArray.length - 1] = secChar;
  return wordArray.join('');

  }).join(' ');
}

decipherThis('72olle 103doo 100ya'); // 'Hello good da

/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures
you will use, Formulate an Algorithm, Code with intent

----------------------Understand the Problem-----------------------
THINGS TO CONSIDER:
  -If any part of the problem is unclear, ask for clarification.
  -Do I need to return the same object or an entirely new one?

PROBLEM STATEMENT: 

WRITE THE PROBLEM IN YOUR OWN WORDS:
- find the comon begining of a set of words

/*
INPUT:

OUTPUT:

RULES:
  EXPLICIT
    -
    -
    -
  IMPLICIT (What's not stated in the problem?)
    -
    -
    -


------------------Algorithm--------------------
-
-
-
-
-
-
-
-
-
-
-
*/



//---------------------------Code----------------------------------

function () {
}



// TEST CASES:
