const balancedBrackets = (brackets) => {
  const compare = { "}": "{", ")": "(", "]": "[" };
  const temp = [];

  for (let i = 0; i < brackets.length; i++) {
    if ("{}()[]".includes(brackets[i])) {
      if (brackets[i] === "{" || brackets[i] === "(" || brackets[i] === "[") {
        temp.push(brackets[i]);
      } else {
        if (temp[temp.length - 1] === compare[brackets[i]]) {
          temp.pop();
        } else return false;
      }
    }
  }

  return !temp.length;
};

console.log(balancedBrackets("([])(){}(())()()"));
console.log(balancedBrackets("(agwgg)([ghhheah%&@Q])"));
console.log(balancedBrackets(")[]}"));
console.log(balancedBrackets("(A))"));
console.log(balancedBrackets("((A))"));

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length;
  while (left <= right) {
    const mid = Math.floor((right + left) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid;
    else right = mid;
  }
};

console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33));

const firstNonRepeatingCharacter = (s) => {
  const temp = {};
  for (let i = 0; i < s.length; i++) {
    temp[s[i]] = (temp[s[i]] || 0) + 1;
  }
  for (const key in temp) {
    if (temp[key] === 1) return key;
  }
  return temp;
};

console.log(firstNonRepeatingCharacter("abdca"));

const generateDocument = (chars, document) => {};

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

console.log(getNthFib(6));

const isPalindrome = (string) => {};

console.log(isPalindrome("abcdcba"));

const isValidSubsequence = (arr, sub) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === sub[count]) {
      count++;
    }
  }
  return sub.length === count;
};

console.log(
  isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10, 11, 223], [1, 6, -1, 10])
);

const quickSort = (arr) => {};

console.log(quickSort([5, 1, 22, 25, 6, -1, 8, 10, 11, 223]));

const reverseWordsInString = (string) => {};

console.log(reverseWordsInString("testing adbc dsd"));

const runLengthEncoding = (string) => {};

console.log(runLengthEncoding("AAAAAAAAAAAAAAAABBBDDXX"));

const twoNumberSum = (arr, target) => {};

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6, 3, 444], 10));
