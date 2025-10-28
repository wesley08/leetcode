const balancedBrackets = (strings) => {
  console.log(balancedBrackets.name, " ", strings);

  const hash = { "}": "{", "]": "[", ")": "(" };

  const temp = [];

  for (let i = 0; i < strings.length; i++) {
    const char = strings[i];
    if ("{}()[]".includes(char)) {
      if ("{[(".includes(char)) {
        temp.push(char);
      } else if (temp[temp.length - 1] === hash[char]) {
        temp.pop();
      } else {
        return false;
      }
    }
  }
  return !temp.length;
};

const binarySearch = (list, target) => {
  console.log(binarySearch.name, " ", list, " target: ", target);

  let left = 0;
  let right = list.length;

  while (left <= right) {
    const mid = Math.round((left + right) / 2);
    if (list[mid] === target) return mid;
    else if (list[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
};

const recursiveBinarySearch = (list, target, left, right) => {
  if (left <= right) {
    const mid = Math.round((left + right) / 2);
    if (list[mid] === target) return mid;
    else if (list[mid] < target) left = mid + 1;
    else right = mid - 1;

    return recursiveBinarySearch(list, target, left, right);
  }
};

const firstNonRepeatingCharacter = (string) => {
  console.log(firstNonRepeatingCharacter.name, " ", string);
  const hash = {};
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    hash[char] = (hash[char] || 0) + 1;
  }

  for (let i = 0; i < string.length; i++) {
    if (hash[string[i]] === 1) return string[i];
  }
  return false;
};

const recursivefirstNonRepeatingCharacter = (string, hash, i) => {
  if (string.length > i) {
    const char = string[i];
    hash[char] = (hash[char] || 0) + 1;
    return recursivefirstNonRepeatingCharacter(string, hash, i + 1);
  }
  const findUnique = (string, i = 0) => {
    if (string.length === i) return false;
    return hash[string[i]] === 1 ? string[i] : findUnique(string, i + 1);
  };

  return findUnique(string);
};

const generateDocument = (dict, sentence) => {
  console.log(generateDocument.name, " ", dict, " ", sentence);
  const hash = {};
  for (let i = 0; i < dict.length; i++) {
    const char = dict[i];
    hash[char] = (hash[char] || 0) + 1;
  }

  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    if (!hash[char] && hash[char] === 0) return false;
    hash[char] -= 1;
  }
  return true;
};

const twoNumberSum = (list, target) => {
  console.log(twoNumberSum.name, " ", list, " ", target);
  const hash = {};

  for (let i = 0; i < list.length; i++) {
    const number = list[i];
    const cal = target - number;
    if (hash[cal]) return [hash[cal], number];
    else hash[number] = number;
  }
};

const recursiveTwoSum = (list, target, i, hash) => {
  const number = list[i];
  const cal = target - list[i];
  if (i < list.length) {
    if (hash[cal]) return [hash[cal], number];
    hash[number] = number;
    return recursiveTwoSum(list, target, i + 1, hash);
  }
};

const maxProfit = (list) => {
  console.log(maxProfit.name, " ", list);
  let buy = list[0];
  let max = 0;

  for (let i = 1; i < list.length; i++) {
    const number = list[i];
    const cal = number - buy;

    if (buy > number) buy = number;
    if (cal > max) max = cal;
  }
  return max;
};

const recursivemaxProfit = (list, buy, max, i) => {
  if (i < list.length) {
    const cal = list[i] - buy;
    if (buy > list[i]) buy = list[i];
    if (cal > max) max = cal;
    return recursivemaxProfit(list, buy, max, i + 1);
  } else {
    return max;
  }
};

const slidingWindows = (arr, k) => {
  console.log(slidingWindows.name, " ", arr, " ", k);
};

console.log(slidingWindows([1, 2, 3, 4, 5, 6, 7], 2)); //3,5,7,9,11,13
console.log(slidingWindows([1, 2, 3, 4, 5, 6, 7], 3)); //6,9,12,15,18
console.log(slidingWindows([1, 2, 3, 56, 23, 63, 91], 4));
console.log(slidingWindows([1, 2, 3, 56, 23, 63, 91], 5));

console.log(balancedBrackets("([])(){}(())()()"));
console.log(balancedBrackets("(agwgg)([ghhheah%&@Q])"));
console.log(balancedBrackets(")[]}"));
console.log(balancedBrackets("(A)"));

console.log(
  "recursiveBinarySearch target 33",
  recursiveBinarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33, 0, 10)
);
console.log(
  "recursiveBinarySearch target 1",
  recursiveBinarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 1, 0, 10)
);
console.log(
  "recursiveBinarySearch target 61",
  recursiveBinarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 61, 0, 10)
);

console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33));
console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 1));
console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 61));

console.log(firstNonRepeatingCharacter("abdca"));
console.log(firstNonRepeatingCharacter("adsfsdfdsfsdfsdfsdzaa"));

console.log(
  "recursivefirstNonRepeatingCharacter ",
  recursivefirstNonRepeatingCharacter("abdca", {}, 0)
);
console.log(
  "recursivefirstNonRepeatingCharacter ",
  recursivefirstNonRepeatingCharacter("adsfsdfdsfsdfsdfsdzaa", {}, 0)
);

console.log(
  generateDocument("Bste!hetsi ogEAxpelrt x ", "AlgoExpert is the Best!")
);
console.log(
  generateDocument("Bste!hetsi ogEApelrt", "AlgoExpert is the Best!")
);
//dari dict kiri bisa generate untuk kata2 di kanan tidak kalau iya return true dan sebaliknya
console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 1));

console.log(
  "recursiveTwoSum target 1",
  recursiveTwoSum([3, 5, -4, 8, 11, 1, -1, 6], 1, 0, {})
);
console.log(
  "recursiveTwoSum target 11",
  recursiveTwoSum([3, 5, -4, 8, 11, 1, -1, 6], 11, 0, {})
);

console.log(
  "recursivemaxProfit",
  recursivemaxProfit([7, 1, 5, 3, 6, 4, 10], 7, 0, 0)
);
console.log(
  "recursivemaxProfit",
  recursivemaxProfit([7, 1, 5, 3, 6, 4], 7, 0, 0)
);
console.log(maxProfit([7, 1, 5, 3, 6, 4, 10]));
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
