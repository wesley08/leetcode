const slidingWindows = (arr, k) => {
  let sumNum = arr.slice(0, k).reduce((a, b) => a + b);
  const result = [sumNum];
  for (let i = 1; i <= arr.length - k; i++) {
    sumNum = sumNum - arr[i - 1] + arr[i + k - 1];
    result.push(sumNum);
  }
  return result;
};

console.log(slidingWindows([1, 2, 3, 4, 5, 6, 7], 2));
//3,5,7,9,11,13
console.log(slidingWindows([1, 2, 3, 4, 5, 6, 7], 3));
//6,9,12,15,18
console.log(slidingWindows([1, 2, 3, 56, 23, 63, 91], 4));
console.log(slidingWindows([1, 2, 3, 56, 23, 63, 91], 5));

const slidingWindowsMinLength = (arr, k) => {
  let sum = arr[0];
  let minLength = arr.length;

  for (let i = 1; i < arr.length; i++) {
    if (sum + arr[i] > k) {
      for (let j = 0; j < i; j++) {
        if (arr[i] + arr[j] > k) {
          const result = Math.abs(i - j + 1);
          result < minLength && (minLength = result);
        }
      }
      i + 1 < minLength && (minLength = i + 1);
    }
    sum += arr[i];
  }
  return minLength;
};

const dynamicSW = (arr, k) => {
  let minLength = arr.length;

  let start = 0;
  let end = 0;
  let cs = 0;

  while (end < minLength) {
    cs = cs + arr[end];
    end += 1;
    while (start < end && cs >= k) {
      cs = cs - arr[start];
      start += 1;
      minLength = Math.min(minLength, end - start + 1);
    }
  }

  return minLength;
};

console.log(slidingWindowsMinLength([1, 2, 1, 1, 1, 1], 7));
console.log(slidingWindowsMinLength([1, 23, 1, 1, 1, 1], 100));
console.log(slidingWindowsMinLength([1, 2, 1, 1, 12, 1, 1, 1], 18));
console.log(dynamicSW([1, 2, 1, 1, 1, 1], 7));
console.log(dynamicSW([1, 23, 1, 1, 1, 1], 100));
console.log(dynamicSW([1, 2, 1, 1, 12, 1, 1, 1], 18));

console.log(
  slidingWindowsMinLength([2, 3, 1, 2, 4, 3], 7) ===
    dynamicSW([2, 3, 1, 2, 4, 3], 7)
); // 2
console.log(
  slidingWindowsMinLength([2, 1, 6, 5, 4], 9) === dynamicSW([2, 1, 6, 5, 4], 9)
); // 2

console.log(
  slidingWindowsMinLength([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)
); // 1
console.log(dynamicSW([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1
console.log("------------");

console.log(slidingWindowsMinLength([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(dynamicSW([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log("------------");

console.log(slidingWindowsMinLength([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(dynamicSW([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log("------------");

console.log(slidingWindowsMinLength([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(dynamicSW([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log("------------");

console.log(slidingWindowsMinLength([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
console.log(dynamicSW([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0

var lengthOfLongestSubstring = function (s) {
  if (s.length === 0 || s === null) return 0;
  const set = new Set();

  let i = 0,
    j = 0,
    max = 0;
  while (i < s.length) {
    while (set.has(s[i])) {
      set.delete(s[j]);
      ++j;
    }
    set.add(s[i]);
    max = Math.max(max, i - j + 1);
    ++i;
  }

  return max;
};

//not done yet
const minWindow = (s, t) => {
  const set = new Set();
  let min = 0;
  for (let i = 0; i < s.length; i++) {
    console.log(t.includes(s[i]) && set.size < 3, i);
    t.includes(s[i]) && set.size <= t.length && set.add(s[i]);
    console.log(set);
    if (set.size === 3) min = i;
    console.log(min);
  }
  return min;
};

console.log(minWindow("ADOBECODEBANC", "ABC"));
console.log(minWindow("a", "a"));
console.log(minWindow("a", "aa"));

function maxSubsetSumNoAdjacent(array) {
  // Write your code here.
  let prev1 = 0;
  let prev2 = 0;
  for (let i = 0; i < array.length; i++) {
    const temp = Math.max(prev1, prev2 + array[i]);
    prev2 = prev1;
    prev1 = temp;
  }
  return prev1;
}

console.log(maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135]));
