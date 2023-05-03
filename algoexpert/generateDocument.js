function generateDocument(characters, document) {
  let temp = {};

  for (let i = 0; i < characters.length; i++) {
    if (temp[characters[i]]) temp[characters[i]] += 1;
    else temp[characters[i]] = 1;
  }

  for (let i = 0; i < document.length; i++) {
    if (!temp[document[i]] || temp[document[i]] === 0) return false;
    temp[document[i]] -= 1;
  }

  return true;
}

console.log(
  generateDocument("Bste!hetsi ogEAxpelrt x ", "AlgoExpert is the Best!")
);
// console.log(generateDocument("aabdc", "aacdb"));
