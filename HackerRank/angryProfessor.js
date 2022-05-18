function angryProfessor(k, a) {
  // Write your code here
  a.sort();

  let result = 0;
  while (a[result] <= 0) {
    result += 1;
  }

  return result >= k ? "NO" : "YES";
}

console.log(angryProfessor(4, [-93, -86, 49, -62, -90, -63, 40, 72, 11, 67]));
console.log(angryProfessor(10, [23, -35, -2, 58, -67, -56, -42, -73, -19, 37]));
console.log(angryProfessor(9, [13, 91, 56, -62, 96, -5, -84, -36, -46, -13]));
console.log(angryProfessor(8, [45, 67, 64, -50, -8, 78, 84, -51, 99, 60]));
console.log(angryProfessor(7, [26, 94, -95, 34, 67, -97, 17, 52, 1, 86]));
