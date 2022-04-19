function diagonalDifference(arr) {
  // Write your code here
  console.log(arr);
  let diagPrimary = 0;
  let diagSecondary = 0;

  for (let i = 0; i < arr.length; i++) {
    diagPrimary += arr[i][i];
    diagSecondary += arr[i][arr.length - i - 1];
  }

  return Math.abs(diagPrimary - diagSecondary);
}
