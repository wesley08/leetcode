function reverseWordsInString(string) {
  let result = "";
  let temp = "";
  for (let i = string.length - 1; i >= 0; i--) {
    if (string[i] !== " ") temp = string[i] + temp;
    else {
      result += temp + " ";
      temp = "";
    }
  }

  return result + temp;
}

console.log(reverseWordsInString("testing adbc"));
