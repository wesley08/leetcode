function balancedBrackets(string) {
  const bracket = { "}": "{", "]": "[", ")": "(" };
  const a = "(){}[]";
  let temp = [];
  for (let i = 0; i < string.length; i++) {
    if (a.includes(string[i]))
      if (string[i] === "{" || string[i] === "[" || string[i] === "(") {
        temp.push(string[i]);
      } else {
        if (bracket[string[i]] === temp[temp.length - 1]) temp.pop();
        else return false;
      }
  }
  // Write your code here.
  return !temp.length;
}

// console.log(balancedBrackets("([])(){}(())()()"));
// console.log(balancedBrackets("(agwgg)([ghhheah%&@Q])"));
// console.log(balancedBrackets(")[]}"));
console.log(balancedBrackets("(A)"));
