const countingTwoSum = (arrOne, arrTwo) => {
  let temp = [];
  for (let i = 0; i < arrOne.length; i++) {
    const temps = arrOne[i] + arrTwo[arrTwo.length - i - 1];
    if (temps === temp[temp.length - 1]) temp[temp.length - 1] += temps;
    else temp.push(temps);
  }

  while (temp.length != 1) {
    const tempA = [];
    for (let i = 0; i < temp.length; i++) {
      if (temp[i] === temp[i + 1]) {
        tempA.push(temp[i] + temp[i + 1]);
      }
    }
    temp = tempA;
  }

  return temp;
};

console.log(countingTwoSum([2, 3, 4, 5, 6], [7, 8, 9, 10, 12]));
