const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
  // Write your code here
  let x = 0;
  let y = 0;

  for (
    let i = 0;
    i < (apples.length < oranges.length ? oranges.length : apples.length);
    i++
  ) {
    x += a + apples[i] >= s && a + apples[i] <= t ? 1 : 0;
    y += b + oranges[i] >= s && b + oranges[i] <= t ? 1 : 0;
  }
  return [x, y];
};

console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]));
