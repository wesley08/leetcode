//NOT DONE
const caesarCipher = (s, k) => {
  let result = "";
  k = k % 26;
  for (const i of s) {
    const char = i.charCodeAt(0);
    const charCal = char + k;
    const conditionUpper = char <= 90 && char >= 65;
    const conditionLower = char <= 122 && char >= 97;

    result +=
      conditionUpper || conditionLower
        ? String.fromCharCode(
            (conditionLower && charCal > 122) ||
              (charCal > 90 && conditionUpper)
              ? charCal - 26
              : charCal
          )
        : i;
  }
  return result;
};

console.log(caesarCipher("middle-Outz", 2));
console.log(caesarCipher("www.abc.xy", 87));
console.log(caesarCipher("xeyd", 3));
console.log(caesarCipher("ABCD", 1));

caesarCipher("middle-Outz", 2);
