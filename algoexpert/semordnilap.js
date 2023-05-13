function semordnilap(words) {
  // Write your code here.
  const temp = {};
  const result = [];
  for (let i = 0; i < words.length; i++) {
    const reverse = words[i].split("").reverse().join("");
    if (temp[reverse]) result.push([words[i], reverse]);
    else temp[words[i]] = [reverse];
  }

  return result;
}

console.log(semordnilap(["desserts", "stressed", "hello"]));
