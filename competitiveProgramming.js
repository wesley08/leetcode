const title = (title) => {
  let temp = title; //64 -2 - title length
  for (let i = 0; i < 64 - title.length - 2; i++) {
    temp += "-";
  }
  console.log("");
  console.log(temp + ">>");
  console.log("");
};

title("TWO SUM ");
const twoSum = (num, target) => {
  let temp = {};

  for (let i = 0; i < num.length; i++) {
    const calculate = target - num[i]; // 8 - 3 => 5
    if (temp[calculate]) {
      return [temp[calculate], i];
    }

    temp[num[i]] = i;
  }
};
console.log(twoSum([1, 2, 3, 4, 5], 8), " => Two Sum");

const recursiveTwoSum = (num, target, i, temp) => {
  const calculate = target - num[i];
  if (i < num.length) {
    if (temp[calculate]) {
      return [temp[calculate], i];
    }
    temp[num[i]] = i;
    return recursiveTwoSum(num, target, i + 1, temp);
  }
};
console.log(
  recursiveTwoSum([1, 2, 3, 4, 5], 8, 0, {}),
  " => Recursive Two Sum"
);

title("PALINDROME ");
const palindrome = (string) => {
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] != string[string.length - i - 1]) {
      return false;
    }
  }
  return true;
};

console.log(palindrome("adda"), " 'adda' => Palindrome");
console.log(palindrome("addsa"), " 'addsa' => Palindrome");

const recursivePalindrome = (string, i) => {
  if (i < string.length / 2) {
    if (string[i] != string[string.length - i - 1]) {
      return false;
    }
    return recursivePalindrome(string, i + 1);
  } else {
    return true;
  }
};

console.log(recursivePalindrome("adda", 0), "'adda' => Recursive Palindrome");
console.log(recursivePalindrome("addsa", 0), "'addsa' => Recursive Palindrome");

title("Search 2D Matrix ");

const searchMatrix = (matrix, target) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === target) return true;
    }
  }
  return false;
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  ),
  " from ",
  [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ]
);

title("Valid Paratheses ");

const isValid = (string) => {
  let temp = [];
  const parathesis = { "}": "{", "]": "[", ")": "(" };
  for (let i = 0; i < string.length; i++) {
    if (string[i] == "{" || string[i] == "[" || string[i] == "(") {
      temp.push(string[i]);
    } else {
      if (parathesis[string[i]] === temp[temp.length - 1]) {
        temp.splice(temp.length - 1, 1);
      } else {
        return false;
      }
    }
  }
  return !temp.length ? true : false;
};

console.log("'{{[]{}}}' Valid Paratheses? ", isValid("{{[]{}}}"));
console.log("'{]}' Valid Paratheses? ", isValid("{]}"));
console.log("'([)]' Valid Paratheses? ", isValid("([)]"));

const isValidRecursive = (string, temp, i) => {
  if (string.length % 2 != 0) return false;
  const parathesis = { "}": "{", "]": "[", ")": "(" };
  if (i < string.length) {
    if (string[i] == "{" || string[i] == "[" || string[i] == "(") {
      temp.push(string[i]);
      return isValidRecursive(string, temp, i + 1);
    } else {
      if (parathesis[string[i]] === temp[temp.length - 1]) {
        temp.splice(temp.length - 1, 1);
        return isValidRecursive(string, temp, i + 1);
      } else {
        return false;
      }
    }
  }
  return !temp.length ? true : false;
};

console.log(
  "'{{[]{}}}' Valid Paratheses Recursive? ",
  isValidRecursive("{{[]{}}}", [], 0)
);
console.log(
  "'{]}' Valid Paratheses Recursive? ",
  isValidRecursive("{]}", [], 0)
);
console.log(
  "'([)]' Valid Paratheses Recursive? ",
  isValidRecursive("([)]", [], 0)
);

title("Bubble Sort ");

const bubbleSort = (arr, asc = true) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (asc ? arr[j] > arr[i] : arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

console.log([2, 4, 6, 5, 7, 9], " to ", bubbleSort([2, 4, 6, 5, 7, 9]), " ASC");
console.log(
  [2, 4, 6, 5, 7, 9],
  " to ",
  bubbleSort([2, 4, 6, 5, 7, 9], false),
  " DESC"
);

title("Quick Sort ");

const quickSort = (arr, asc = true) => {
  if (arr.length <= 1) return arr;
  let temp = arr[0];
  let left = [];
  let right = [];

  for (let i = 1; i < arr.length; i++) {
    if (asc ? arr[i] > temp : arr[i] < temp) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }

  return quickSort(left, asc).concat(temp, quickSort(right, asc));
};

console.log([9, 6, 3, 2, 4, 4], " to ", quickSort([9, 6, 3, 2, 4, 4]), " ASC");
console.log(
  [9, 6, 3, 2, 4, 4],
  " to ",
  quickSort([9, 6, 3, 2, 4, 4], false),
  " DESC"
);

title("Is Prime");

const isPrime = (n) => {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
};

console.log(10, " is prime?", isPrime(10));
console.log(7, " is prime?", isPrime(7));
console.log(3, " is prime?", isPrime(3));
console.log(9, " is prime?", isPrime(9));
