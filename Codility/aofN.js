// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  A = A.filter((x) => x >= 1).sort(); // loop the number of array first and filter the number is greater equals than 1 and sort by ASC
  let x = 1;
  for (let i = 0; i < A.length; i++) {
    console.log("x : ", x, "A[i] : ", A[i]);
    if (x < A[i]) return x;
    x = A[i] + 1;
    console.log("x : ", x);
  }
  return x;
}
