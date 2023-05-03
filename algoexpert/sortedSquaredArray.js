function sortedSquaredArray(array) {
  // Write your code here.
  const result = [array[0] * array[0]];
  for (let i = 1; i < array.length; i++) {
    result.push(array[i] ** 2);
  }
  return quickSort(result);
}

const quickSort = (array) => {
  if (array.length <= 1) {
    return array;
  }
  let temp = array[0];
  let right = [];
  let left = [];

  for (let i = 1; i < array.length; i++) {
    if (temp > array[i]) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return quickSort(left).concat(temp, quickSort(right));
};

console.log(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]));
console.log(sortedSquaredArray([10, 1, 2, 3, 5, 6, 8, 9]));

// Optimized ==> O(n)
function sortedSquaredArray(array = [10, 1, 3, 2, 5, 6, 8, 9]) {
  const last = array.length - 1;

  let startPointer = 0;
  let endPointer = last;

  const newArr = new Array(array.length);

  for (let i = last; i > -1; i--) {
    const start = array[startPointer] ** 2;
    const end = array[endPointer] ** 2;

    if (end > start) {
      newArr[i] = end;
      endPointer--;
    } else {
      newArr[i] = start;
      startPointer++;
    }
    console.log(newArr);
  }

  return newArr;
}
sortedSquaredArray();

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;
