function slowestKeyPress(arr) {
  let character = [];
  for (let i = 0; i < 26; i++) {
    character[i] = String.fromCharCode(i + 97);
  } // looping all character with ascii code and store to character array, from a - z

  let temp = { 0: arr[0][1] };
  for (let i = 1; i < arr.length; i++) {
    temp[i] = arr[i][1] - arr[i - 1][1]; // get current value loop and min to the previous loop
  }
  //0 => 1
  //1 => 3 - 1 = 2
  //2 => 5 - 3 = 2
  //3 => 6 - 5 = 1
  //4 => 10 - 6 = 4

  const sorting = Object.entries(temp).sort((a, b) => b[1] - a[1]); //sorting the largest to the front
  // [4,4], [1,2], [2,2], [3,1], [0,1]

  console.log(character[arr[sorting[0][0]][0]]);
  //sorting[0][0] will get 4
  //arr[4][0] will get 4
  //character[4] wiill return e
}

slowestKeyPress([
  [0, 1],
  [0, 3],
  [4, 5],
  [5, 6],
  [4, 10],
]);
//
