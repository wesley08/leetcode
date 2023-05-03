function camelcase(s = "saveChangesInTheEditor") {
  // Write your code here
  let temp = s
    .split("")
    .sort()
    .map((char) => char.charCodeAt(0));
  let i = 0;
  let result = 1;

  console.log(temp);
  while (temp[i] > 64 && temp[i] < 91) {
    result += 1;
    i += 1;
  }
  return result;
}

console.log(camelcase());
