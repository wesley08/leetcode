const doublePiramid = (longestCharacters) => {
  for (let i = 1; i < longestCharacters + 1; i++) {
    if (i <= longestCharacters / 2) {
      console.log(
        "*".repeat(i),
        longestCharacters - i * 2 == 0
          ? ""
          : " ".repeat(longestCharacters - i * 2),
        "*".repeat(i)
      );
    } else {
      console.log(
        "*".repeat(longestCharacters - i),
        " ".repeat(Math.abs(longestCharacters - i * 2)),
        "*".repeat(longestCharacters - i)
      );
    }
  }
};
doublePiramid(10);
