function superDigit(n, k) {
  // Write your code here
  if (n < 10) return n;

  let temp = `${n}`.split("");
  let result = 0;
  for (let i = 0; i < temp.length; i++) {
    result += parseInt(temp[i]);
  }
  return superDigit(result * k, 1);
}

const tet = superDigit(123, 3);
const tet2 = superDigit(1236, 3);
console.log(tet);
console.log(tet2);
// 1+2+3 = 6 *3 = 9
// 1+2+3+6 = 12 *3 = 26 => 2+6 = 8
