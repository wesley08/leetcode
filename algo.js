const balancedBrackets = (brackets) => {
  const validbrackets = { "}": "{", "]": "[", ")": "(" };
  const temp = [];
  for (const bracket of brackets) {
    if ("{}()[]".includes(bracket)) {
      if (bracket === "{" || bracket === "[" || bracket === "(") {
        temp.push(bracket);
      } else {
        if (validbrackets[bracket] === temp[temp.length - 1]) {
          temp.pop();
        } else {
          return false;
        }
      }
    }
  }
  return !temp.length;
};

console.log(balancedBrackets("([])(){}(())()()"));
console.log(balancedBrackets("(agwgg)([ghhheah%&@Q])"));
console.log(balancedBrackets(")[]}"));
console.log(balancedBrackets("(A)"));

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((right + left) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] > target) right = mid;
    else left = mid;
  }

  return -1;
};

console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33));

const firstNonRepeatingCharacter = (string) => {
  const temp = {};
  for (const char of string) {
    temp[char] = (temp[char] || 0) + 1;
  }
  for (const key in temp) {
    if (temp[key] === 1) return key;
  }
  return -1;
};

console.log(firstNonRepeatingCharacter("abdca"));

const generateDocument = (chars, document) => {
  const temp = {};
  for (const char of chars) {
    temp[char] = (temp[char] || 0) + 1;
  }
  for (const char of document) {
    if (!temp[char]) return false;
    temp[char] -= 1;
  }

  return true;
};

console.log(
  generateDocument("Bste!hetsi ogEAxpelrt x ", "AlgoExpert is the Best!")
);

const getNthFib = (num) => {
  let first = 0;
  let second = 1;

  for (let i = 0; i < num - 2; i++) {
    second = first + second;
    first = second - first;
  }

  return second;
};

console.log(getNthFib(8));

const isPalindrome = (string) => {
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - i - 1]) return false;
  }
  return true;
};

console.log(isPalindrome("abcdcba"));

const isValidSubsequence = (arr, sub) => {
  let counter = 0;
  for (const iterator of arr) {
    if (counter === sub.length) return true;
    if (iterator === sub[counter]) counter++;
  }
  return counter === sub.length;
};

console.log(
  isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10, 11, 223], [1, 6, -1, 10])
);

const quickSort = (arr) => {
  if (arr.length <= 1) return arr;

  let templeft = [];
  let tempright = [];
  let temp = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < temp) templeft.push(arr[i]);
    else tempright.push(arr[i]);
  }
  return quickSort(templeft).concat(temp, quickSort(tempright));
};

console.log(quickSort([5, 1, 22, 25, 6, -1, 8, 10, 11, 223]));

const reverseWordsInString = (string) => {
  let temp = "";
  let result = "";

  for (let i = string.length - 1; i >= 0; i--) {
    if (string[i] === " ") {
      result = temp + " ";
      temp = "";
    } else {
      temp = string[i] + temp;
    }
  }

  return result + temp;
};

console.log(reverseWordsInString("testing adbc"));

const runLengthEncoding = (string) => {
  let count = 1;
  let result = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1] && count < 9) {
      count++;
    } else {
      result += string[i] + count;
      count = 1;
    }
  }
  return result;
};

console.log(runLengthEncoding("AAAAAAAAAAAAAAAABBBDDXX"));
