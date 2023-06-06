const balancedBrackets = (str) => {
  const compare = { "}": "{", "]": "[", ")": "(" };
  const temp = [];

  for (let i = 0; i < str.length; i++) {
    if ("{}()[]".includes(str[i])) {
      if ("{([".includes(str[i])) {
        temp.push(str[i]);
      } else {
        if (compare[str[i]] === temp[temp.length - 1]) temp.pop();
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
        arr[j] = arr[j] - arr[i];
      }
    }
  }
  return arr;
};

console.log(bubbleSort([8, 5, 2, 9, 5, 6, 3], false));

const findThreeLargestNumbers = (arr) => {
  arr = arr.sort((a, b) => b - a);
  return [arr[0], arr[1], arr[2]];
};

console.log(
  findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7])
);

const firstNonRepeatingCharacter = (str) => {
  const temp = {};
  for (const iterator of str) {
    temp[iterator] = (temp[iterator] || 0) + 1;
  }

  for (const key in temp) {
    if (temp[key] === 1) return key;
  }

  return -1;
};

console.log(firstNonRepeatingCharacter("axxbdca"));

const generateDocument = (str, result) => {
  const temp = {};

  for (const iterator of str) {
    temp[iterator] = (temp[iterator] || 0) + 1;
  }

  for (const iterator of result) {
    if (temp[iterator] === 0) return false;
    temp[iterator] -= 1;
  }

  return true;
};

console.log(
  generateDocument("Bste!hetsi ogEAxpelrt x ", "AlgoExpert is the Best!")
);

const getNthFib = (n) => {
  if (n == 1) return 0;
  if (n <= 3) return 1;

  let first = 1;
  let second = 1;

  for (let i = 0; i < n - 3; i++) {
    second = first + second;
    first = second - first;
  }
  return second;
};

console.log(getNthFib(10));
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

const isValidSubsequence = (arr, sub) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (count === sub.length) return true;
    if (arr[i] == sub[count]) count++;
  }

  return count === sub.length;
};

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));

const nonConstructibleChange = (arr) => {
  arr = arr.sort((a, b) => a - b);
  let temp = 0;

  for (let i = 0; i < arr.length; i++) {
    if (temp + 1 < arr[i]) break;
    temp += arr[i];
  }
  return temp + 1;
};

console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]));

function productSum(array, multiply = 1) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      sum += array[i];
    } else {
      sum += productSum(array[i], multiply + 1);
    }
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
    if (desc ? arr[i] > temp : arr[i] < temp) left.push(arr[i]);
    else right.push(arr[i]);
  }

  return quickSort(left, desc).concat(temp, quickSort(right, desc));
};

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
    if (str[i] === str[i + 1] && count < 9) {
      count++;
    } else {
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
    if (temp[reverse]) result.push([reverse, arr[i]]);
    else temp[arr[i]] = reverse;
  }
  return result;
};

console.log(
  "semordnilap :",
  semordnilap(["desserts", "stressed", "hello", "olleh", "dsd", "dxd"])
);

const sortedSquaredArray = (arr) => {
  const newResult = new Array(arr.length);
  let sPointer = 0;
  let ePointer = arr.length - 1;

  for (let i = arr.length - 1; i > -1; i--) {
    const start = arr[sPointer] ** 2;
    const end = arr[ePointer] ** 2;

    if (end > start) {
      newResult[i] = end;
      ePointer--;
    } else {
      newResult[i] = start;
      sPointer++;
    }
  }

  return newResult;
};

console.log(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]));
console.log(sortedSquaredArray([10, 1, 2, 3, 5, 6, 8, 9]));

const tournamentWinner = (arr, result) => {
  const temp = {};
  for (let i = 0; i < arr.length; i++) {
    if (result[i]) temp[arr[i][1]] = (temp[arr[i][1]] || 0) + 1;
    else temp[arr[i][0]] = (temp[arr[i][0]] || 0) + 1;
  }

  return Object.entries(temp).sort(([, a], [, b]) => b - a)[0][0];
};

console.log(
  tournamentWinner(
    [
      ["HTML", "C#"],
      ["C#", "Python"],
      ["Python", "HTML"],
      ["Python", "HTML"],
      ["Python", "Python"],
      ["C#", "Python"],
    ],
    [0, 1, 1, 0, 1, 0]
  )
);

const twoNumberSum = (arr, target) => {
  const temp = {};
  for (let i = 0; i < arr.length; i++) {
    const calc = target - arr[i];
    if (temp[calc]) return [calc, temp[calc]];
    else temp[arr[i]] = calc;
  }
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
