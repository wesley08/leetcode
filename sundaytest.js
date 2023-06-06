// calculateString = (str, priority) => {
//   str = str.replace(/ /g, "");
//   const temp = [];
//   const result = [];
//   let sum = 0;

//   console.log(str.split(""));

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == "(") temp.push([str[i], i]);
//     else if (str[i] == ")") {
//       const splitNumber = str.slice(temp[temp.length - 1][1] + 1, i).split("");
//       result.push(
//         calculatefunction(splitNumber[1], splitNumber[0], splitNumber[2])
//       );
//       temp.pop();
//     } else if (!temp.length) {
//       result.push(str[i]);
//     }
//   }

//   while (result.length) {
//     if (!priority) {
//       if (result.length === 1) {
//         sum = result[0];
//         result.pop();
//       } else {
//         const calculation = calculatefunction(result[1], result[0], result[2]);
//         result.splice(0, 3);
//         result.unshift(calculation);
//       }
//     } else {
//     }
//   }
//   return sum;
// };

// const calculatefunction = (operator, nums1, nums2) => {
//   return {
//     "+": (first, second) => parseInt(first) + parseInt(second),
//     "-": (first, second) => parseInt(first) - parseInt(second),
//     "*": (first, second) => parseInt(first) * parseInt(second),
//     "/": (first, second) => parseInt(first) / parseInt(second),
//   }[operator](nums1, nums2);
// };

// console.log(
//   calculateString(" ( 8 + 7 ) * 2 + ( 9 - 9 ) + 2 * ( 6 / 3 ) ", false)
// );
// console.log(calculateString(" ( 8 + 7 ) + 2 * ( 9 - 9 ) ", true));

calculateString = (str, priority) => {
  str = str.replace(/ /g, "");
  const temp = [];
  const result = [];
  let sum = 0;

  console.log(str.split(""));

  for (let i = 0; i < str.length; i++) {
    if (str[i] == "(") temp.push([str[i], i]);
    else if (str[i] == ")") {
      const splitNumber = str.slice(temp[temp.length - 1][1] + 1, i).split("");
      result.push(
        calculatefunction(splitNumber[1], splitNumber[0], splitNumber[2])
      );
      temp.pop();
    } else if (!temp.length) {
      result.push(str[i]);
    }
  }

  while (result.length) {
    if (!priority) {
      if (result.length === 1) {
        sum = result[0];
        result.pop();
      } else {
        const calculation = calculatefunction(result[1], result[0], result[2]);
        result.splice(0, 3);
        result.unshift(calculation);
      }
    } else {
    }
  }
  return sum;
};

const calculatefunction = (operator, nums1, nums2) => {
  return {
    "+": (first, second) => parseInt(first) + parseInt(second),
    "-": (first, second) => parseInt(first) - parseInt(second),
    "*": (first, second) => parseInt(first) * parseInt(second),
    "/": (first, second) => parseInt(first) / parseInt(second),
  }[operator](nums1, nums2);
};

console.log(
  calculateString(" ( 8 + 7 ) * 2 + ( 9 - 9 ) + 2 * ( 6 / 3 ) ", false)
);
console.log(calculateString(" ( 8 + 7 ) + 2 * ( 9 - 9 ) ", true));
