function beautifulDays(i, j, k) {
  // Write your code here
  let counter = 0;
  for (let number = i; number <= j; number++) {
    let rev = 0;
    let num = number;

    while (num != 0) {
      rev = rev * 10 + (num % 10);
      num = Math.floor(num / 10);
    }
    let temp = (number - rev) / k;
    if (temp % 1 == 0) counter += 1;
  }
  return counter;
}
