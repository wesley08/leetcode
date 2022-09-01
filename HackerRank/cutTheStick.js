function cutTheSticks(arr) {
  arr.sort((a, b) => a - b);

  const tempArr = [arr.length];
  while (arr.length != 0) {
    const temp = [];
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] - arr[0] > 0) temp.push(arr[j] - arr[0]);
    }
    arr = temp;

    if (temp.length != 0) tempArr.push(temp.length);
  }

  return tempArr;
}

const a = require("../performance");

a.calculate(cutTheSticks([5, 4, 4, 2, 2, 8]));

console.time();
console.log();
console.log(cutTheSticks([1, 13, 3, 8, 14, 9, 4, 4]));
console.timeEnd();
// console.log(` ${endTime - startTime} milliseconds`);
