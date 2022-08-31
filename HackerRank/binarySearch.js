const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.round((left + right) / 2); //6
    if (target == arr[mid]) return mid;
    else if (target < arr[mid]) right = mid - 1;
    else left = mid + 1;
  }
  return -1;
};
console.log(binarySearch([2, 3, 5, 7, 8, 10, 12, 15, 18, 20, 21], 7));

const binarySearchRecursive = (arr, target, right, left) => {
  if (left > right) return -1;
  let mid = Math.round((left + right) / 2); //6
  if (target == arr[mid]) return mid;
  else if (target < arr[mid])
    return binarySearchRecursive(arr, target, mid - 1, left);
  else return binarySearchRecursive(arr, target, right, mid + 1);
};

console.log(
  binarySearchRecursive([2, 3, 5, 7, 8, 10, 12, 15, 18, 20, 21], 7, 10, 0)
);
