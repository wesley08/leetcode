function miniMaxSum(arr) {
  // Write your code here
  let count = 0;
  arr.sort();
  //sorting the array from lowest to highest  exp 1,2,3
  for (let i = 0; i < arr.length; i++) {
    count += arr[i]; //calculate all arr => 1 +2 +3 = 6
  }
  console.log(count - arr[arr.length - 1] + " " + (count - arr[0]));
  // 6 - the highest value (3 from array) => 3
  // 6 - the lowest value (1 from array) => 5
}
