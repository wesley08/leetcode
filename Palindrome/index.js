var isPalindromeWithTempolary = function (x) {
  let temp = ""; // creating a temp for storing the reverse string to we will do it after
  for (let i = x.length - 1; i >= 0; i--) {
    // looping with reverse assign the i with the length of the string we will do the reverse.
    // if the i is more than 0 will be keep looping and after looping it i will be decrease by 1
    temp += x[i]; // append the char by get the char by index and storing to the temp
  }
  return temp == x; // checking the string is the same
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

// let isPalindrome = function (x) {
//   return palindromeRecursive(x, 0);
// };

const test = palindromeRecursive("121", 0);
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
