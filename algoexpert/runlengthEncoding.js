function runLengthEncoding(string) {
  let result = "";
  let count = 1;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1] && count < 9) {
      count++;
    } else {
      result = result + count + string[i];
      count = 1;
    }
  }

  return result;
}

console.log(runLengthEncoding("AAAAAAAAAAAAAAAABBBDDXX"));
