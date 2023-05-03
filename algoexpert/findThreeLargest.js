function findThreeLargestNumbers(array) {
  // Write your code here.
  const lastIndex = array.length - 1;
  array.sort((a, b) => a - b);
  return [array[lastIndex - 2], array[lastIndex - 1], array[lastIndex]];
}

findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]);
