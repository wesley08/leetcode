// var isValid = function (s) {
//   if (s.length % 2 != 0) return false;

//   let parathesis = { "}": "{", "]": "[", ")": "(" };
//   let temp = {};

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
//       if (temp[s[i]]) {
//         temp[s[i]] += 1;
//       } else {
//         temp[s[i]] = 1;
//       }
//       console.log(temp);
//     } else {
//       if (temp[parathesis[s[i]]] == 1) {
//         delete temp[parathesis[s[i]]];
//       } else {
//         temp[parathesis[s[i]]] -= 1;
//       }
//     }
//   }

//   return !Object.keys(temp).length ? true : false;
// };

var isValid = function (s) {
  if (s.length % 2 != 0) return false;

  let parathesis = { "}": "{", "]": "[", ")": "(" };
  let temp = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
      temp.push(s[i]);
    } else {
      if (temp[temp.length - 1] == parathesis[s[i]]) {
        temp.splice(temp.length - 1, 1);
      } else {
        return false;
      }
    }
  }
  return !temp.length ? true : false;
};

console.log(isValid("{{[]{}}}"));
console.log(isValid("{]}"));
console.log(isValid("([)]"));
