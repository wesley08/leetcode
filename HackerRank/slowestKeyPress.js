function slowestKeyPress(arr) {
  // Write your code here
  let character = [];
  for (let i = 0; i < 26; i++) {
    character[i] = String.fromCharCode(i + 97);
  }

  let temp = { 0: arr[0][1] };
  for (let i = 1; i < arr.length; i++) {
    temp[i] = arr[i][1] - arr[i - 1][1];
  }

  const sorting = Object.entries(temp).sort((a, b) => b[1] - a[1]);
  console.log(character[arr[sorting[0][0]][0]]);
}

slowestKeyPress([
  [0, 1],
  [0, 3],
  [4, 5],
  [5, 6],
  [4, 10],
]);
