function simpleArraySum(ar) {
  // Write your code here
  let temp = 0;
  let i = 0;

  while (i < ar.length) {
    temp += ar[i];
    i++;
  }

  return temp;
}
