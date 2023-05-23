function isBalanced(s) {
  // Write your code here
  if (s.length % 2 != 0) return "NO";

  let temp = [];
  let paratheses = { "}": "{", "]": "[", ")": "(" };

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "{" || s[i] == "[" || s[i] == "(") temp.push(s[i]);
    // if the open brackets will be push to the temp
    else {
      if (temp[temp.length - 1] == paratheses[s[i]]) {
        // get the lastest temp value if the open brackets is suitable with the closes bracket will remove the latest temp
        temp.splice(temp.length - 1, 1);
      } else {
        return "NO";
      }
    }
  }

  return !temp.length ? "YES" : "NO";
}

function isBalanced(s) {
  if (s.length % 2 != 0) return "NO";

  let stack = [];
  let paratheses = new Map([
    ["}", "{"],
    ["]", "["],
    [")", "("],
  ]);

  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "{":
      case "[":
      case "(":
        stack.push(s[i]);
        break;
      default:
        if (stack[stack.length - 1] == paratheses.get(s[i])) {
          stack.pop();
        } else {
          return "NO";
        }
    }
  }

  return !stack.length ? "YES" : "NO";
}
