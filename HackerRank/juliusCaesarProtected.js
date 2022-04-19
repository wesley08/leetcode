//NOT DONE
function caesarCipher(s, k) {
  // Write your code here
  let newString = ""; //m = 109 + 2 111
  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) + k > 122 && s.charCodeAt(i) + k > 96)
      newString += String.fromCharCode(96 + k);
    else if (s.charCodeAt(i) + k > 90 + k && s.charCodeAt(i) + k > 65)
      newString += String.fromCharCode(s.charCodeAt(i) + k);
    else newString += s.charAt(i);
  }
  console.log(newString);
}

caesarCipher("z-Z", 3);
