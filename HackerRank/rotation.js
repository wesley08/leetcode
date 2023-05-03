// const reverseNumber1 = (arr, k, q) => {
//   for (let i = 0; i < k; i++) {
//     const temp = arr[arr.length - 1];
//     for (let j = arr.length - 1; j > 0; j--) {
//       arr[j] = arr[j - 1];
//     }
//     arr[0] = temp;
//   }

//   for (let i = 0; i < q.length; i++) {
//     console.log(arr[q[i]]);
//   }
// };
// reverseNumber1([1, 2, 3], 2, [0, 1, 2]);

// const reverseNumber = (arr, k, q) => {
//   const temp = [];
//   for (let i = 0; i < q.length; i++) {
//     const remaining = parseInt(k % arr.length);
//     let a = q[i] - remaining;
//     if (a < 0) {
//       a += arr.length;
//     }
//     temp.push(arr[a]);
//   }

//   return temp;
// };
// console.log(reverseNumber([1, 2, 3], 2, [0, 1, 2]));

const saveThePrisoner = (n, m, s) => {
  m = m % n;
  const hit = m + s - 1;

  if (hit == 0) {
    return n;
  }

  if (hit <= n) {
    return hit;
  }

  return hit - n;
};

// function stones(n, a, b) {
//     const result = new Set()
//     const ptr = n - 1
//     if (a > b) {
//         let temp = a
//         a = b
//         b = temp
//     }

//     for (let i = 0; i <= ptr ; i++) {
//         let j = ptr - i;
//         result.add(a*j + b*i);
//     }

//     return [...result.values()]

// }

// func stones(n int32, a int32, b int32) []int32 {
//     // Write your code here
//     difference := int32(math.Abs(float64(a-b)));
//     temp := int32(0);
//     if (a > b) {
//         temp = a;
//         a = b;
//         b = temp;
//     }
//     result := []int32{a*(n-1)};
//     if (difference == 0) {
//         return result;
//     }
//     for i := int32(0); i < n-1; i++ {
//         result = append(result, result[i] + difference);
//     }

//     return result;
// }

// console.log(saveThePrisoner(7, 19, 2));
// console.log(saveThePrisoner(3, 7, 3));
// console.log(saveThePrisoner(5, 2, 1));
// console.log(saveThePrisoner(5, 2, 2));
// console.log(saveThePrisoner(100, 11, 2));
// console.log(saveThePrisoner(100, 100, 2));
// console.log(saveThePrisoner(10, 10, 2));
// console.log(saveThePrisoner(10, 10, 9));
// console.log(saveThePrisoner(8, 10, 9));

// 0, 10, 20, 30 kali n
// 0, 100, 200, 300 kali n

// 0, 10, 20, 120 kali ke n -1 + b
// 0, 100, 200, 210 kali ke n -1 + a

// 0, 100, 110, 120 b kali n  + a
// 0, 10, 110, 210

// 0, 10, 110, 120 b kali n  + a

// 0, 100, 110, 210
