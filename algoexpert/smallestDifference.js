function quickSort(array) {
  if (array.length <= 1) return array;

  const temp = [array[0]];
  const right = [];
  const left = [];

  for (let i = 1; i < array.length; i++) {
    if (temp > array[i]) left.push(array[i]);
    else right.push(array[i]);
  }

  return quickSort(left).concat(temp, quickSort(right));
}

function smallestDifference(arrayOne, arrayTwo) {
  const sort = quickSort(arrayOne.concat(arrayTwo));
  return sort;
}

console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]));
//belum selesai
