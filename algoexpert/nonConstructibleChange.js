function nonConstructibleChange(coins) {
  coins.sort((a, b) => a - b);
  let temp = 0;
  for (let i = 0; i < coins.length; i++) {
    if (coins[i] > temp + 1) break;
    temp += coins[i];
  }
  return temp + 1;
}

console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]));
