function birthdayCakeCandles(candles) {
  // Write your code here
  let temp = [];
  for (let i = 0; i < candles.length; i++) {
    console.log(candles[i]);
    if (temp[candles[i]]) {
      temp[candles[i]] += 1;
    } else {
      temp[candles[i]] = 1;
    }
  }
  temp.sort((a, b) => b - a);
  console.log(temp);
  return temp[0];
}

console.log(birthdayCakeCandles([3, 2, 1, 3]));
