function getNthFib(n) {
  let firstNumber = 1;
  let secondNumber = 1;
  if (n === 1) return 0;
  if (n === 2 || n === 3) return firstNumber;

  for (let i = 0; i < n - 3; i++) {
    const temp = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = temp;
  }
  return secondNumber;
}

console.log(getNthFib(6));
