function miniMaxSum(arr) {
  // Write your code here
  let count = 0;
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    count += arr[i];
  }
  console.log(count - arr[arr.length - 1] + " " + (count - arr[0]));
}
