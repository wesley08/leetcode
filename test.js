// function findNumber(arr, k) {
//   let t = {};

//   for (let i = 0; i < arr.length; i++) {
//     t[arr[i]] = arr[i];
//   }

//   if (t[k] == k) return "YES";
//   return "NO";
// }

// function oddNumbers(l, r) {
//   // Write your code here
//   let t = [];
//   for (let i = l; i <= r; i++) {
//     if (i % 2 != 0) t.push(i);
//   }
//   return t;
// }

// const quicksort = (arr) => {
//   if (arr.length <= 1) return arr;

//   let pivot = arr[0];
//   let left = [];
//   let right = [];

//   for (let i = 1; i < arr.length; i++) {
//     arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
//   }

//   return quicksort(left).concat(pivot, quicksort(right));
// };

// const bubblesort = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] < arr[j]) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// };

// var unsorted = [23, 45, 16, 37, 3, 99, 22];
// var sorted = quicksort(unsorted);
// var sorted = bubblesort(unsorted);

// console.log("Sorted array", sorted);
// console.log("Sorted array by Bubble", sorted);

// function solution(A) {
//   let temp = new Map();
//   for (let i = 0; i < A.length; i++) {
//     if (temp.has(A[i])) {
//       temp.set(A[i], temp.get(A[i]) + 1);
//     } else {
//       temp.set(A[i], 1);
//     }
//   }
//   for (let i = 0; i < A.length; i++) {
//     if (temp.get(A[i]) == 1) {
//       return A[i];
//     }
//   }
//   return -1;
// }
// function solution(N) {
//   console.log(t);
//   if (N < 0) {
//     let d = Math.pow(10, N.toString().length - 1);
//     return N - d * 5;
//   } else {
//     for (let i = 0; i < N.toString(); i++) {
//       let t = Math.pow(10, N.toString().length);
//     }
//     return t * 5 + N;
//   }
// }

// let t = [];
// let numberString = N.toString();
// for (let i = numberString.length; i >= 0; i--) {
//   t[i] = [numberString.slice(1, i), 5, numberString.slice(i)].join("");
// }
// t.sort();
// return parseInt(t[0]);
// console.log(solution(670));

// function hashValue(password, compare) {
//   let hashing = 0;

//   for (let i = 0; i < password.length; i++) {
//     hashing += password.charCodeAt(i) * Math.pow(131, password.length - i);
//   }
//   let valueAppend = hashing + password.charCodeAt(password.length - 1) * 131;
//   hashing +=
//     password.charCodeAt(password.length - 1) * 131 -
//     (password.charCodeAt(password.length - 1) % (Math.pow(10, 9) + 7));
//   console.log(valueAppend);
//   console.log(valueAppend.toString().substring(2, 6));
//   if (hashing == compare) return 1;
//   if (valueAppend.toString().substring(2, 6) == compare.substring(0, 4))
//     return 1;
//   return 0;
// }

// const test = hashValue("000A", "244736787");
// console.log(test);

// function authEvents(events) {
//   // Write your code here
//   let password = "";
//   let temp = [];

//   for (let i = 0; i < events.length; i++) {
//     if (events[i][0] == "setPassword") {
//       password = events[i][1];
//     } else {
//       //    temp.push(hashValue(password, events[i][1]));
//       console.log(hashValue(password, events[i][1]));
//     }
//   }
//   // return temp;
// }

// function minimumGroups(predators) {
//   // Write your code here
//   let temp = 1;

//   for (let i = 1; i < predators.length; i++) {
//     let tempSpecies = 0;
//     let j = i;
//     while (j != -1) {
//       tempSpecies += 1;
//       j = predators[j];
//     }
//     temp = Math.max(temp, tempSpecies);
//   }
//   return temp;
// }

// function ways(total, k) {
//   let temp = [];

//   for (let i = 0; i < total + 1; i++) {
//     temp.push(i, 0);
//   }

//   for (let i = 1; i <= k; i++) {
//     for (let j = 1; j <= total; j++) {
//       console.log(i, j);
//       if (j >= i) {
//         console.log(temp[j], temp[j] + temp[j - i], "  d");
//         temp[j] = temp[j] + temp[j - i];
//       }
//     }
//   }

//   return temp[total];
// }

// function climbingLeaderboard(ranked, player) {
//   // Write your code here
//   // let newArray = ranked.concat(player);
//   // newArray.sort((a,b) => b-a);
//   // console.log(newArray);
//   // let temp =[[1,ranked[0]]];
//   // for(let i=1; i < ranked.length; i++){
//   //     if(ranked[i] < temp[i-1][1]){
//   //         temp[i]= [temp[i-1][0]+1,ranked[i]]
//   //     }else{
//   //         temp[i]= [temp[i-1][0],ranked[i]]
//   //     }
//   // }

//   console.log(temp);
// }
