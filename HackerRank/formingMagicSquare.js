// function formingMagicSquare(s) {
//   for (let i = 0; i < s.length; i++) {
//     for (let j = 0; j < s.length; j++) {
//       const resultRow = s[i][0] + s[i][1] + s[i][2];
//       const resultCol = s[0][j] + s[1][j] + s[2][j];
//       console.log(resultCol, resultRow);
//     }
//   }
// }

// const formingMagicSquare = (s) => {
//   let result = 0;
//   let temp = [];
//   let x = 0;

//   const a = [
//     [8, 3, 4, 1, 6],
//     [6, 1, 8, 7, 2],
//     [4, 3, 8, 9, 2],
//     [2, 7, 6, 9, 4],
//     [8, 1, 6, 3, 4],
//     [6, 7, 2, 1, 8],
//     [4, 9, 2, 3, 8],
//     [2, 9, 4, 7, 6],
//   ];
//   const b = { 8: 2, 2: 8, 4: 6, 6: 4 };

//   for (let i = 0; i < a.length; i++) {
//     if (a[i][0] !== s[0][0]) x += Math.abs(s[0][0] - a[i][0]);
//     if (a[i][1] !== s[0][1]) x += Math.abs(s[0][1] - a[i][1]);
//     if (a[i][2] !== s[0][2]) x += Math.abs(s[0][2] - a[i][2]);
//     if (a[i][3] !== s[1][0]) x += Math.abs(s[1][0] - a[i][3]);
//     if (a[i][4] !== s[2][0]) x += Math.abs(s[2][0] - a[i][4]);

//     temp.push([i, x]);
//     x = 0;
//   }
//   temp.sort((a, b) => a[1] - b[1]);
//   console.log(temp);
//   s[0][2] = a[temp[1][0]][Math.floor(a[temp[0][0]].length / 2)];
//   s[2][0] = a[temp[1][0]][a[temp[1][0]].length - 1];

//   result += Math.abs(b[a[temp[1][0]][0]] - s[2][2]);
//   s[2][2] = b[a[temp[1][0]][0]];

//   result += Math.abs(15 - (s[1][2] + s[0][2] + s[2][2]));

//   result += Math.abs(15 - (s[2][1] + s[2][0] + s[2][2]));

//   if (s[1][1] !== 5) result += Math.abs(5 - s[1][1]);

//   return result + temp[1][1];
// };

// const formingMagicSquare = (s) => {
//   let result = 0;
//   let temp = 1000000;

//   const a = [
//     [8, 3, 4, 9, 2, 7, 6, 1],
//     [8, 1, 6, 7, 2, 9, 4, 3],
//     [6, 1, 8, 3, 4, 9, 2, 7],
//     [6, 7, 2, 9, 4, 3, 8, 1],
//     [4, 3, 8, 1, 6, 7, 2, 9],
//     [2, 7, 6, 1, 8, 3, 4, 9],
//     [4, 9, 2, 7, 6, 1, 8, 3],
//     [2, 9, 4, 3, 8, 1, 6, 7],
//   ];
//   const b = { 8: 2, 2: 8, 4: 6, 6: 4 };

//   for (let i = 0; i < a.length; i++) {
//     let x = 0;
//     if (a[i][0] !== s[0][0]) x += Math.abs(s[0][0] - a[i][0]);
//     if (a[i][1] !== s[0][1]) x += Math.abs(s[0][1] - a[i][1]);
//     if (a[i][2] !== s[0][2]) x += Math.abs(s[0][2] - a[i][2]);
//     if (a[i][3] !== s[1][2]) x += Math.abs(s[1][2] - a[i][3]);
//     if (a[i][4] !== s[2][2]) x += Math.abs(s[2][2] - a[i][4]);
//     if (a[i][5] !== s[2][1]) x += Math.abs(s[2][1] - a[i][5]);
//     if (a[i][6] !== s[2][0]) x += Math.abs(s[2][0] - a[i][6]);
//     if (a[i][7] !== s[1][0]) x += Math.abs(s[1][0] - a[i][7]);

//     if (x < temp) temp = x;
//   }

//   if (s[1][1] !== 5) result += Math.abs(5 - s[1][1]);

//   return result + temp;
// };

const formingMagicSquare = (s) => {
  let result = 0;
  result += Math.abs(s[0][0] - s[2][2]);
  // s[0][0] + s[2][2] > 10
  //   ? ()
  //   : (result += Math.abs(s[0][0] + s[2][2]) - 10);
  return result;
};

// console.log(
//   formingMagicSquare([
//     [4, 8, 2], //
//     [4, 5, 7],
//     [6, 1, 6],
//   ])
// );

console.log(
  formingMagicSquare([
    [2, 2, 7], // [4, 3, 8, ,
    [8, 6, 4], //9,5,1
    [1, 2, 9], //2,7,6
  ])
); //16 18

// 2,1,3
// 4,5,6
//7,8,9

console.log(
  formingMagicSquare([
    [7, 6, 5],
    [7, 2, 8],
    [5, 3, 4],
  ])
);
//6 +1 +3 +3 +5
// [4, 3, 8,]
// [9, 5, 1],
// [2, 7, 6],

// console.log(
//   formingMagicSquare([
//     [5, 3, 4],
//     [1, 5, 8],
//     [6, 4, 2],
//   ])
// );
// console.log(
//   formingMagicSquare([
//     [4, 4, 7],
//     [3, 1, 5],
//     [1, 7, 9],
//   ])
// );

// console.log(
//   formingMagicSquare([
//     [2, 9, 8], //2, 9, 4, =4
//     [4, 2, 7], //7 3
//     [5, 6, 7], // 6 1
//   ])
// );

// console.log(
//   formingMagicSquare([
//     [4, 5, 8], //438
//     [2, 4, 1], //9
//     [1, 9, 7], //2
//   ])
// );

// console.log(
//   formingMagicSquare([
//     [4, 9, 2],
//     [3, 5, 7],
//     [8, 1, 5],
//   ])
// );

// 8 3 4
// 1 5 9
// 6 7 2

const temp = [
  [
    [8, 3, 4],
    [1, 5, 9],
    [6, 7, 2],
  ],
];
