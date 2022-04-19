const reverseImage = (image) => {
  let temp = [];
  for (let i = image.length - 1; i >= 0; i--) {
    let newTemp = [];
    for (let j = image[0].length - 1; j >= 0; j--) {
      newTemp.push(image[i][j]);
    }
    temp.push(newTemp);
  }
  return temp;
};

console.log(
  reverseImage([
    [1, 2, 3],
    [4, 5, 6],
  ])
);
