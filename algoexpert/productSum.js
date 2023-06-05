function productSum(array, multiply = 1) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      sum += array[i];
    } else {
      sum += productSum(array[i], multiply + 1);
    }
  }

  return sum * multiply;
}

productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]);
