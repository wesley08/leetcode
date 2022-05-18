const result = (a, i) => {
  if (a === "x") return i;
  if (a.length !== `${i}`.length) return null;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== `${i}`[i]) return `${i}`[i];
  }
  return null;
};

function MissingDigit(str) {
  let temp = str.split(" ");

  if (temp[0].includes("x")) {
    let i = 0;
    if (temp[1] == "+") {
      i = temp[4] - temp[2];
    }
    if (temp[1] == "-") {
      i = temp[4] + temp[2];
    }
    if (temp[1] == "*") {
      i = temp[4] / temp[2];
    }
    if (temp[1] == "/") {
      i = temp[4] * temp[2];
    }
    return result(temp[0], i);
  }

  if (temp[2].includes("x")) {
    let i = 0;
    if (temp[1] == "+") {
      i = temp[4] - temp[0];
    }
    if (temp[1] == "-") {
      i = temp[4] - temp[0];
    }
    if (temp[1] == "*") {
      i = temp[4] / temp[0];
    }
    if (temp[1] == "/") {
      i = temp[4] / temp[0];
    }
    return result(temp[2], i);
  }

  if (temp[4].includes("x")) {
    let i = 0;
    if (temp[1] == "+") {
      i = temp[0] + temp[2];
    }
    if (temp[1] == "-") {
      i = temp[0] - temp[2];
    }
    if (temp[1] == "*") {
      i = temp[0] * temp[2];
    }
    if (temp[1] == "/") {
      i = temp[0] / temp[2];
    }
    return result(temp[4], i);
  }
}

// keep this function call here
console.log(MissingDigit(readline()));
