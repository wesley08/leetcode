function tournamentWinner(competitions, results) {
  // Write your code here.
  let map = {};

  for (let i = 0; i < competitions.length; i++) {
    if (results[i] === 0) {
      map[competitions[i][1]]
        ? (map[competitions[i][1]] += 1)
        : (map[competitions[i][1]] = 1);
    } else {
      map[competitions[i][0]]
        ? (map[competitions[i][0]] += 1)
        : (map[competitions[i][0]] = 1);
    }
  }
  return Object.entries(map).sort(([, a], [, b]) => b - a)[0][0];
}

console.log(
  tournamentWinner(
    [
      ["HTML", "C#"],
      ["C#", "Python"],
      ["Python", "HTML"],
    ],
    [0, 0, 1]
  )
);
