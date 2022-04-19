function timeConversion(s) {
  // Write your code here
  let condition = s.slice(s.length - 2, s.length);
  let newString = s.replace(condition, "");
  let result = parseInt(s.substring(0, 2));

  if ((condition == "AM" && result < 12) || (condition == "PM" && result >= 12))
    return newString;

  return newString.replace(s.substring(0, 2), result > 11 ? "00" : result + 12);
}

function timeConversion(s) {
  // Write your code here
  const conditions = s.substring(s.length - 2, s.length);
  const newString = s.substring(0, s.length - 2);
  const getTime = parseInt(s.substring(0, 2));
  if (
    (getTime < 12 && conditions == "AM") ||
    (getTime == 12 && conditions == "PM")
  ) {
    return newString;
  }

  return newString.replace(
    s.substring(0, 2),
    getTime > 11 ? "00" : getTime + 12
  );
}
