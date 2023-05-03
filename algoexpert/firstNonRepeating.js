function firstNonRepeatingCharacter(string) {
  // Write your code here.
  const temp = {};
  for (const iterator of string) {
    temp[iterator] = (temp[iterator] || 0) + 1;
  }
  for (let i = 0; i < string.length; i++) {
    if (temp[string[i]] === 1) return i;
  }

  return -1;
}

console.log(firstNonRepeatingCharacter("abdca"));
