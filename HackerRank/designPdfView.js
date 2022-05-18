function designerPdfViewer(h, word) {
  // Write your code here
  let character = {};
  for (let i = 0; i < h.length; i++) {
    character[String.fromCharCode(i + 97)] = h[i];
  } // loop the alphabet, alphabet will be the key and the value is the passing by order
  let result = [character[word[0]]];

  for (let i = 1; i < word.length; i++) {
    result.push(character[word[i]]);
  }
  result.sort((a, b) => b - a);
  return result[0] * word.length;
}

console.log(
  designerPdfViewer(
    [
      1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
      5,
    ],
    "abcd"
  )
);
