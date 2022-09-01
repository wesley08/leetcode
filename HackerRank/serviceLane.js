function serviceLane(n, cases) {
  const result = [];

  for (let i = 0; i < cases.length; i++) {
    const temp = [];
    for (let j = cases[i][0]; j < cases[i][1] + 1; j++) {
      temp.push(n[j]);
    }
    temp.sort();
    // const slice = n.slice(cases[i][0], cases[i][1] + 1).sort();
    result.push(temp[0]);
  }
  return result;
}

const a = serviceLane(
  [2, 3, 1, 2, 3, 2, 3, 3],
  [
    [0, 3],
    [4, 6],
    [6, 7],
    [3, 5],
    [0, 7],
  ]
);
console.log(a.join("\n") + "\n");
