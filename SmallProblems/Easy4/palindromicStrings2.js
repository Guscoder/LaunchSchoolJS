function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

function cleanUpString(string) {
  return string.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function isRealPalindrome(string) {
  let cleanString = cleanUpString(string);
  return isPalindrome(cleanString);
}

isRealPalindrome('madam'); // true
isRealPalindrome('Madam'); // true (case does not matter)
isRealPalindrome("Madam, I'm Adam"); // true (only alphanumerics matter)
isRealPalindrome('356653'); // true
isRealPalindrome('356a653'); // true
isRealPalindrome('123ab321'); // false
