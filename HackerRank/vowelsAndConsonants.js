const vowelsAndConsonants = (s) => {
  const tempVowel = [];
  const temp = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "a" || s[i] == "e" || s[i] == "i" || s[i] == "o" || s[i] == "u")
      tempVowel.push(s[i]);
    else temp.push(s[i]);
  }
  const a = tempVowel.concat(temp);
  for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
  }
};

console.log(vowelsAndConsonants("javascript"));
