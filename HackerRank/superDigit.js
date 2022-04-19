function superDigit(n, k) {
  // Write your code here
  if (n < 10) {
    return n;
  }
  let t = n + "";
  for (let i = 1; i < k; i++) {
    t += n;
  }
  let temp = Array.from(String(t), Number);
  let result = 0;
  for (let i = 0; i < temp.length; i++) {
    result += temp[i];
  }
  return superDigit(result, 1);
}

const tet = superDigit(12, 3);
console.log(tet);
