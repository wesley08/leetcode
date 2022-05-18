function pangrams(s) {
  const lowerCase = s.toLowerCase().replace(/\s/g, "");
  let character = {};
  for (let i = 0; i < 26; i++) {
    character[String.fromCharCode(i + 97)] = 0;
  } // looping all character with ascii code and store to character array, from a - z

  for (let i = 0; i < lowerCase.length; i++) {
    character[lowerCase[i]] += 1;
  }

  const result = Object.entries(character).sort((a, b) => a[1] - b[1]);
  // sorting to get the lowest value
  return result[0][1] ? "pangram" : "not pangram";
  // if result[0][1] had the 0 meaning the alphabet doesnt fill all. will return not pangram
  // if result[0][1] more than 1 or same 1 meaning the alphabet fill all. will return pangram
}

console.log(
  pangrams("We promptly judged antique ivory buckles for the next prize")
);

console.log(pangrams("We promptly judged antique ivory buckles for the prize"));
