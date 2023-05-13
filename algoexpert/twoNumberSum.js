function twoNumberSum(array, targetSum) {
  // Write your code here.
  const map = {};
  for (const number of array) {
    const calc = targetSum - number;
    if (map[calc]) return [map[calc], number];
    else map[number] = number;
  }
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
