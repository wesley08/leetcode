const reverseINT = (num) => {
  // num => 2343
  let temp = 0;
  let i = 1;
  const len = Math.ceil(Math.log10(num + 1)); // way for gettting the len of the int
  // will return 4 => len = 4

  while (num !== 0) {
    const gettingLastNumber = num % Math.pow(10, i); // 2343 % 10 will get 3
    num -= gettingLastNumber; // 2343 - 3 = 2340
    // 0 += (3 * 1000 (10pow3)) / 1
    temp += (gettingLastNumber * Math.pow(10, len - i)) / Math.pow(10, i - 1);
    //temp = 3000
    i++;
  }

  console.log(temp);
};

reverseINT(2343); // => 3432

// 2343 % 10 will get 3
// 2343 - 3 = 2340
// 0 += (3 * 1000 (10pow3)) / 1
//temp = 3000

// 2340 % 100 will get 40
// 2340 - 40 = 2300
// 3000 += (40 * 100 (10pow2)) / 10 => 400
//temp = 3400

// 2300 % 1000 will get 300
// 2300 - 300 = 2000
// 3400 += (300 * 10 (10pow1)) / 100 => 30
//temp = 3430

// 2000 % 10000 will get 2000
// 2000 - 2000 = 0
// 3430 += (2000 * 1 (10pow0)) / 1000 => 2
//temp = 3432

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
