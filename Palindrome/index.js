var isPalindromeWithTempolary = function (x) {
  let temp = "";
  for (let i = x.length - 1; i >= 0; i--) {
    temp += x[i];
  }
  return temp == x;
};
const testIsPalindromeWithTempolary = isPalindromeWithTempolary("tetstet");
console.log(testIsPalindromeWithTempolary);

// ------------------------------------

let isPalindromeWithoutTemp = function (x) {
  for (let i = 0; i <= x.length / 2; i++) {
    if (x[i] != x[x.length - i - 1]) return false;
  }
  return true;
};
const testIsPalindromeWithoutTemp = isPalindromeWithoutTemp("a1sa23aas1a");
console.log(testIsPalindromeWithoutTemp);

// ------------------------------------

let palindromeRecursive = function (x, i) {
  if (i < x.length / 2) {
    if (x[i] != x[x.length - i - 1]) return false;
    else {
      return palindromeRecursive(x, i + 1);
    }
  } else {
    return true;
  }
};

let isPalindrome = function (x) {
  return palindromeRecursive(x, 0);
};

const test = isPalindrome("121");
console.log(test);

// ------------------------------------

var isPalindromeLeetCode = function (x) {
  if (x < 0) {
    return false;
  }

  const temp = x.toString();

  for (let i = 0; i <= temp.length / 2; i++) {
    if (temp[i] !== temp[temp.length - i - 1]) return false;
  }
  return true;
};
