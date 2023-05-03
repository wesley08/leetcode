// function isIsogram(str) {
//   if (!str.length) return true;

//   str = str.toLowerCase().split("");
//   const a = {};

//   for (let i = 0; i < str.length; i++) {
//     if (a[str[i]]) {
//       return false;
//     }

//     a[str[i]] = str[i];
//   }
//   //   console.log(a);

//   return true;
// }

const isIsogram = (str) => {
  return new Set(str.toLowerCase().split("")).size == str.length;
};
console.log(isIsogram("aba"));

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("isogram"));
console.log(isIsogram("moOse"));
console.log(isIsogram("isIsogram"));
console.log(isIsogram(""));
