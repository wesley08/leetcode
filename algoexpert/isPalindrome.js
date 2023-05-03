function isPalindrome(string) {
  // Write your code here.
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - i - 1]) return false;
  }
  return true;
}

console.log(isPalindrome("abcdcba"));
