function gridChallenge(grid) {
  // Write your code here
  const temp = [];
  for (let i = 0; i < grid.length; i++) {
    temp.push(grid[i].split("").sort());
  }

  console.log(temp);
}

gridChallenge(["ebacd", "fghij", "olmkn", "trpqs", "xywuv"]);
