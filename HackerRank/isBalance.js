function isBalanced(s) {
  // Write your code here
  if (s.length % 2 != 0) return "NO";

  let temp = [];
  let paratheses = { "}": "{", "]": "[", ")": "(" };

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "{" || s[i] == "[" || s[i] == "(") temp.push(s[i]);
    else {
      if (temp[temp.length - 1] == paratheses[s[i]]) {
        temp.splice(temp.length - 1, 1);
      } else {
        return "NO";
      }
    }
  }

  return !temp.length ? "YES" : "NO";
}
