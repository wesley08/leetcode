const maxProfit = (arr) => {
  let buy = arr[0];
  let maxProfit = 0;
  for (let i = 1; i < arr.length; i++) {
    if (buy > arr[i]) buy = arr[i];
    if (arr[i] - buy > maxProfit) maxProfit = arr[i] - buy;
  }
  return maxProfit;
};

const maxProfit2 = (arr) => {
  let maxProfit = 0;
  for (let i = 1; i < arr.length; i++) {
    if (buy > arr[i]) buy = arr[i];
    if (arr[i] - buy > maxProfit) maxProfit = arr[i] - buy;
  }
  return maxProfit;
};

console.log(maxProfit2([7, 1, 5, 3, 6, 4]));

// console.log(maxProfit([7, 6, 4, 3, 1]));


const maxProfit = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if(arr)
  }
};

maxProfit([7, 1, 5, 3, 6, 4]);

var maxProfit = function(arr) {
  let buy = arr[0];
  let maxProfit = 0;
  for (let i = 1; i < arr.length; i++) {
    if (buy > arr[i]) buy = arr[i];
    if (arr[i] - buy > maxProfit) maxProfit = arr[i] - buy;
  }
  return maxProfit;
};

var maxProfit = function(arr) {
  let min = arr[0];
  let maxProfit = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] - min > maxProfit) maxProfit = arr[i] - min;
  }

  return maxProfit;
};

var maxProfit = function(arr) {
  let buy = arr[0];
  let maxProfit = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - buy > maxProfit) {
      maxProfit = arr[i] - buy;
    }
    if (buy > arr[i]) {
      buy = arr[i];
    }
  }
  return maxProfit;
};

maxProfit([7, 1, 5, 3, 6, 4]);