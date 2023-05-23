const superReducedString = (s) => {
  for (let i = 0; i < s.length; i++) {
    console.log(s[i], s[i + 1]);
    if (s[i] == s[i + 1]) s = s.slice(2, s.length - 2);
    console.log(s);
  }
  return s;
};

console.log(superReducedString("sssAAssddda"));
