var searchMatrix = function (matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    if (target < matrix[i][matrix[i].length - 1]) {
      console.log(matrix[i]);
      let left = 0;
      let right = matrix[i].length;
      while (left <= right) {
        const mid = Math.floor((right + left) / 2);
        if (target == matrix[i][mid]) return true;
        else if (matrix[i][mid] > target) right = mid + 1;
        else left = mid + 1;
      }
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
    13
  )
);
