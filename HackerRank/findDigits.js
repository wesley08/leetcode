function findDigits(n) {
  // Write your code here
  let temp = 0;
  const newTemp = n.toString();
  for (let i = 0; i < newTemp.length; i++) {
    if (n % newTemp[i] == 0) temp += 1;
  }
  return temp;
}
console.log(findDigits(1234));
// 1234 % 1 = 0, temp + 1
// 1234 % 2 = 0, temp + 1
// 1234 % 3 = 1,
// 1234 % 4 = 2,
