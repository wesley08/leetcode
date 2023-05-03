const coinChange = (arr, target) => {
  const a = {};
  for (let i = 1; i <= target; i++) {
    if (i <= target) {
      if (a[target]) a[target] += a[i - target];
      else a[target] = 1;
    }
  }
  return a;
};

console.log(coinChange([1, 3, 5], 15));
