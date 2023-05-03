function binarySearch(arr, target) {
  // Write your code here.
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.round((left + right) / 2); //6
    if (target == arr[mid]) return mid;
    else if (target < arr[mid]) right = mid - 1;
    else left = mid + 1;
  }

  return -1;
}

console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33));
