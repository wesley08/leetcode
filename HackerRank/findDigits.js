function findDigits(n) {
  // Write your code here
  let temp = 0;
  const newTemp = n.toString();
  for (let i = 0; i < newTemp.length; i++) {
    if (n % newTemp[i] == 0) temp += 1;
  }
  return temp;
}
