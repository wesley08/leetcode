const timeInWords = (h, n) => {
  const hashMap = {
    00: "o'clock",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "fourty",
    50: "fifthy",
  };
  if (hashMap[n] != undefined) return hashMap[h] + " " + hashMap[n];
  const a = n.toString().split("");
  return hashMap[h] + " " + hashMap[a[0] + 0] + " " + hashMap[a[1]];
};

console.log(timeInWords(6, 20));
console.log(timeInWords(7, 21));
console.log(timeInWords(10, 22));
console.log(timeInWords(12, 32));
console.log(timeInWords(3, 12));
console.log(timeInWords(5, 1));
console.log(timeInWords(6, 00));
