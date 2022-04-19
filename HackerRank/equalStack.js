//not done
function equalStacks(h1, h2, h3) {
  // Write your code here
  let temp = {},
    temp2 = {},
    temp3 = {};
  temp[h1[h1.length - 1]] = 1;

  for (let i = h1.length - 2; i >= 0; i--) {
    if (temp[h1[i] + parseInt(Object.keys(temp).pop())]) {
      temp[h1[i] + parseInt(Object.keys(temp).pop())] += 1;
    } else {
      temp[h1[i] + parseInt(Object.keys(temp).pop())] = 1;
    }
  }

  temp2[h2[h2.length - 1]] = 1;
  if (temp[h2[h2.length - 1]]) {
    temp[h2[h2.length - 1]] += 1;
  }

  for (let i = h2.length - 2; i >= 0; i--) {
    const test = h2[i] + parseInt(Object.keys(temp2).pop());
    temp2[test] = 1;
    if (temp[test]) temp[test] += 1;
    else temp[test] = 1;
  }

  temp3[h3[h3.length - 1]] = 1;
  if (temp[h3[h3.length - 1]]) {
    temp[h3[h3.length - 1]] += 1;
  }

  for (let i = h3.length - 2; i >= 0; i--) {
    const test = h3[i] + parseInt(Object.keys(temp3).pop());
    temp3[test] = 1;
    if (temp[test]) temp[test] += 1;
    else temp[test] = 1;
  }

  const result = Object.entries(temp).sort((a, b) => b[1] - a[1]);
  return result[0][0];
}

console.log(equalStacks([3, 2, 1, 1, 1], [4, 3, 2], [1, 1, 4, 1]));
