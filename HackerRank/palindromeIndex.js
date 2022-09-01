function palindromeIndex(s) {
  // Write your code here
  const temp = {};
  for (let i = 0; i < s.length; i++) {
    if (temp[s[i]] != undefined) temp[s[i]] += 1;
    else temp[s[i]] = 1;
  }
  const sorting = Object.entries(temp).sort((a, b) => a[1] - b[1]);
  return sorting.length <= 1 ? -1 : s.indexOf(sorting[0][0]);
}

console.log(palindromeIndex("aaab"));
console.log(palindromeIndex("baa"));
console.log(palindromeIndex("aaa"));
