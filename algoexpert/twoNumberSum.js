function twoNumberSum(array, targetSum) {
  // Write your code here.
  const map = {};
  for (let i = 0; i < array.length; i++) {
    const calc = targetSum - array[i];
    if (map[calc]) return [map[calc], array[i]];
    else map[array[i]] = array[i];
  }
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
