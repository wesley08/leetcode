function plusMinus(arr) {
  // Write your code here

  let temp = { positive: 0, negative: 0, zero: 0 };
  let i = 0;
  while (i < arr.length) {
    if (arr[i] > 0) temp["positive"] += 1;
    else if (arr[i] < 0) temp["negative"] += 1;
    else temp["zero"] += 1;
    i++;
  }
  console.log(temp["positive"] / arr.length);
  console.log(temp["negative"] / arr.length);
  console.log(temp["zero"] / arr.length);
}

plusMinus([-6, -3, 0, 0, 1]);
