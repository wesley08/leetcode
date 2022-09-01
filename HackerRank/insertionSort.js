const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1; //-1
    const temp = arr[i];
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
      console.log(arr.toString().replaceAll(",", " "));
    }
    arr[j + 1] = temp;
  }
  console.log(arr.toString().replaceAll(",", " "));
};

// console.log(insertionSort([2, 4, 6, 1, 1, 5, 7]));
insertionSort([2, 4, 6, 8, 3]);

const insertionSortDifferentPrintOut = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1; //-1
    const temp = arr[i];
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
    console.log(arr.toString().replaceAll(",", " "));
  }
};
insertionSortDifferentPrintOut([3, 4, 7, 5, 6, 2, 1]);

const insertionCountingShift = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let j = i; //-1
    const temp = arr[i];

    while (j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[j - 1];
      count++;
      j--;
    }

    arr[j] = temp;
  }
  return count;
};
console.log(insertionCountingShift([2, 1, 3, 1, 2]));
