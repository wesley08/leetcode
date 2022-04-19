const bubbleSort = (array, reverse = false) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (reverse ? array[i] > array[j] : array[i] < array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }

  return console.log("Bubble Sort : ", array);
};

bubbleSort([0, 4, 3, 5, 2, 6, 6], true);

const quickSort = (array) => {
  if (array.length <= 1) {
    return array;
  }
  let temp = array[0];
  let right = [];
  let left = [];

  for (let i = 1; i < array.length; i++) {
    if (temp > array[i]) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return quickSort(left).concat(temp, quickSort(right));
};

console.log("Quick Sort : ", quickSort([0, 4, 3, 5, 2, 6, 6]));
