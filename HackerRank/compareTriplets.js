function compareTriplets(a, b) {
  // Write your code here
  let temp = [0, 0];
  for (let i = 0; i < a.length; i++) {
    if (a[i] != b[i]) a[i] > b[i] ? (temp[0] += 1) : (temp[1] += 1);
  }
  return temp;
}

console.log([17, 28, 30], [99, 16, 8]);
