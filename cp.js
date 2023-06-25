const balancedBrackets = (str) => {
  const compare = { "}": "{", "]": "[", ")": "(" };
  const temp = [];

  for (const i of str) {
    if ("{}()[]".includes(i)) {
      if ("{[(".includes(i)) temp.push(i);
      else {
        if (temp[temp.length - 1] === compare[i]) temp.pop();
        else return false;
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
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
};

console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33));

const bubbleSort = (arr, desc) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (desc ? arr[i] > arr[j] : arr[i] < arr[j]) {
        arr[j] += arr[i];
        arr[i] = arr[j] - arr[i];
        arr[j] -= arr[i];
      }
    }
  }
  return arr;
};

console.log(bubbleSort([8, 5, 2, 9, 5, 6, 3], false));
console.log(bubbleSort([8, 5, 2, 9, 5, 6, 3], true));

const findThreeLargestNumbers = (arr) => {
  arr.sort((a, b) => b - a);
  return [arr[0], arr[1], arr[2]];
};

console.log(
  findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7])
);

const firstNonRepeatingCharacter = (str) => {
  const temp = {};
  for (const i of str) {
    temp[i] = (temp[i] || 0) + 1;
  }

  for (const key in temp) {
    if (temp[key] === 1) return key;
  }

  return -1;
};

console.log(firstNonRepeatingCharacter("axxbdca"));

const generateDocument = (str, result) => {
  const temp = {};

  for (const i of str) {
    temp[i] = (temp[i] || 0) + 1;
  }

  for (const i of result) {
    if (temp[i] === 0) return false;
    temp[i] -= 1;
  }

  return true;
};

console.log(
  generateDocument("Bste!hetsi ogEAxpelrt x ", "AlgoExpert is the Best!")
);

const getNthFib = (n) => {
  if (n == 0) return 0;
  if (n <= 2) return 1;

  let first = 1;
  let second = 1;

  for (let i = 0; i < n - 2; i++) {
    second += first;
    first = second - first;
  }
  return second;
};

console.log(getNthFib(10));
console.log(getNthFib(0));
console.log(getNthFib(1));
console.log(getNthFib(2));
console.log(getNthFib(3));

const isPalindrome = (str) => {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - i - 1]) return false;
  }
  return true;
};

console.log(isPalindrome("abcdcba"));
console.log(isPalindrome("abcdxcba"));

const isValidSubsequence = (arr, sub) => {
  let count = 0;
  for (const i of arr) {
    if (count === sub.length) return true;
    if (i === sub[count]) count++;
  }
  return count === sub.length;
};

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));

const nonConstructibleChange = (arr) => {
  arr.sort((a, b) => a - b);
  let temp = 0;
  for (let i = 0; i < array.length; i++) {
    if (temp + 1 < arr[i]) break;
    temp += arr[i];
  }
  return temp + 1;
};

console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]));

function productSum(arr, multiply = 1) {
  let sum = 0;
  for (const i of arr) {
    if (typeof i === "number") sum += i;
    else sum += productSum(i, multiply + 1);
  }
  return sum * multiply;
}

console.log("productSum: ", productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]));

const quickSort = (arr, desc) => {
  if (arr.length <= 1) return arr;
  const temp = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (desc ? temp > arr[i] : temp < arr[i]) right.push(arr[i]);
    else left.push(arr[i]);
  }
  return quickSort(left, true).concat(temp, quickSort(right, true));
};

console.log("quickSort DESC:", quickSort([8, 5, 2, 9, 5, 6, 3], true));

console.log("quickSort :", quickSort([8, 5, 2, 9, 5, 6, 3], false));

const reverseWordsInString = (str) => {
  let result = "";
  let temp = "";
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== " ") temp = str[i] + temp;
    else {
      result += temp + " ";
      temp = "";
    }
  }
  return result + temp;
};

console.log("reverseWordsInString :", reverseWordsInString("testing adbc dd"));

const runLengthEncoding = (str) => {
  let count = 1;
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1] && count < 9) count++;
    else {
      result += count + str[i];
      count = 1;
    }
  }
  return result;
};

console.log(
  "runLengthEncoding :",
  runLengthEncoding("AAAAAAAAAAAAAAAABBBDDXX")
);

const semordnilap = (arr) => {
  const temp = {};
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const reverse = arr[i].split("").reverse().join("");
    if (temp[reverse]) result.push([temp[reverse], arr[i]]);
    temp[arr[i]] = arr[i];
  }
  return result;
};

console.log(
  "semordnilap :",
  semordnilap(["desserts", "stressed", "hello", "olleh", "dsd", "dxd"])
);

const sortedSquaredArray = (arr) => {
  const result = new Array(arr.length);
  let spointer = 0;
  let epointer = arr.length - 1;
  for (let i = epointer; i > -1; i--) {
    const start = arr[spointer] ** 2;
    const end = arr[epointer] ** 2;
    if (end > start) {
      result[i] = end;
      end--;
    } else {
      result[i] = start;
      start++;
    }
  }
  return result;
};

console.log(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]));
console.log(sortedSquaredArray([10, 1, 2, 3, 5, 6, 8, 9]));

const tournamentWinner = (arr, result) => {
  const res = {};
  for (let i = 0; i < arr.length; i++) {
    res[arr[i][result[i]]] = (res[arr[i][result[i]]] || 0) + 1;
  }
  return Object.entries(res).sort(([, a], [, b]) => b - a)[0][0];
};

console.log(
  tournamentWinner(
    [
      ["HTML", "C#"], //HTML
      ["C#", "Python"], //Python
      ["Python", "HTML"], //HTML
      ["Python", "HTML"], //Python
      ["Python", "Python"], //Python
      ["C#", "Python"], //C#
    ],
    [0, 1, 1, 0, 1, 0]
  )
);

const twoNumberSum = (arr, target) => {
  const temp = {};
  for (let i = 0; i < arr.length; i++) {
    const calc = target - arr[i];
    if (temp[calc]) return [temp[calc], i, [calc, arr[i]]];
    else temp[arr[i]] = i;
  }
  return -1;
};
console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));

const temp = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  return arr;
};

console.log(insertionSort([1, 5, 7, 3, 8]));

const round = (str) => {
  str = str.toUpperCase();
  let result = 0;
  for (let i = 0; i < str.length - 1; i++) {
    const firstAlphabet = str.charCodeAt(i) % 64;
    const secondAlphabet = str.charCodeAt(i + 1) % 64;
    const firstCalculation = Math.abs(firstAlphabet - secondAlphabet);
    const conditions =
      firstAlphabet < secondAlphabet
        ? [secondAlphabet, firstAlphabet]
        : [firstAlphabet, secondAlphabet];

    const secondCalculation = Math.abs(conditions[0] - 26) + conditions[1];

    result += Math.min(firstCalculation, secondCalculation);
  }

  return result;
};

console.log(round("BSDZ"));
console.log(round("XWZf"));
console.log(round("xeyd"));
console.log(round("ABCD"));

const caesar = (s, k) => {
  let result = "";
  k = k % 26;
  for (const i of s) {
    const char = i.charCodeAt(0);
    const charCal = char + k;
    const conditionUpper = char <= 90 && char >= 65;
    const conditionLower = char <= 122 && char >= 97;

    result +=
      conditionUpper || conditionLower
        ? String.fromCharCode(
            (conditionLower && charCal > 122) ||
              (charCal > 90 && conditionUpper)
              ? charCal - 26
              : charCal
          )
        : i;
  }
  return result;
};

console.log(caesar("middle-Outz", 2));
console.log(caesar("www.abc.xy", 87));
console.log(caesar("xeyd", 3));
console.log(caesar("ABCD", 1));
