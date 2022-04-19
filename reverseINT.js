const reverseINT = (num) => {
  let temp = 0;
  let i = 1;
  const len = Math.ceil(Math.log10(num + 1));

  while (num !== 0) {
    const gettingLastNumber = num % Math.pow(10, i);
    num -= gettingLastNumber;
    temp += (gettingLastNumber * Math.pow(10, len - i)) / Math.pow(10, i - 1);
    i++;
  }

  console.log(temp);
};

reverseINT(2343); // => 84321

// const reverseINT = (num) => {
//     let temp = 0;
//     let i = 0;
//     let j = 7;
//     while (num > 0) {
//       (num % Math.pow(10, i)) * Math.pow(10, j--);
//       temp += (num % Math.pow(10, i)) * Math.pow(10, j--);
//       num -= num % Math.pow(10, i);
//       // console.log(num);
//       i++;
//     }
//     console.log(temp);
//   };
