function compareTriplets(a, b) {
  // Write your code here
  let temp = [0, 0];
  for (let i = 0; i < a.length; i++) {
    if (a[i] != b[i]) a[i] > b[i] ? (temp[0] += 1) : (temp[1] += 1);
  }
  return temp;
}

console.log(compareTriplets([17, 28, 30], [99, 16, 8]));
// 17 != 99 , 17 > 99 ? temp[1] +=1
// 28 != 16 , 28 > 16 ? temp[0] +=1
// 30 != 8 , 30 > 8 ? temp[0] +=1
