function lonelyinteger(a) {
  // Write your code here
  if (a.length == 1) return a[0];
  let temp = [];
  for (let i = 0; i < a.length; i++) {
    if (temp[a[i]]) {
      temp[a[i]] += 1;
    } else {
      temp[a[i]] = 1;
    }
  }
  const newArr = Object.entries(temp).sort((a, b) => a[1] - b[1]);
  return newArr[0][0];
}
