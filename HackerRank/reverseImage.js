const reverseImage = (image) => {
  let temp = [];
  for (let i = image.length - 1; i >= 0; i--) {
    // loop row with the lastest row
    let newTemp = [];
    for (let j = image[0].length - 1; j >= 0; j--) {
      // loop col with the lastest col
      newTemp.push(image[i][j]);
      // image[1][2] => get 6
      // image[1][1] => get 5
      // image[1][0] => get 4
      // now the newTemp = [6,5,4]
      // image[0][2] => get 3
      // image[0][1] => get 2
      // image[0][0] => get 1
      // now the newTemp = [3,2,1]
    }
    temp.push(newTemp);
    //first looping temp => [[6,5,4]]
    //second looping temp => [[6,5,4], [3,2,1]]
  }
  return temp;
};

console.log(
  reverseImage([
    [1, 2, 3],
    [4, 5, 6],
  ])
);
