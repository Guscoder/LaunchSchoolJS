function isPalindrome(num) {
  return num === String(num).split('').reverse().join('');
}
