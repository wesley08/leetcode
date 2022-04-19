let n = 10;
for (let i = 0; i < n; i++) {
  let temp = "";
  for (let j = 1; j <= n; j++) {
    if (n - i <= j) temp += "#";
    else temp += " ";
  }
  console.log(temp);
}
