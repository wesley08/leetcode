function extraLongFactorials(n) {
  // Write your code here
  let temp = BigInt(n);
  for (let i = n - 1; i > 0; i--) {
    temp *= BigInt(i);
  }
  console.log(temp.toString());
}

function recursiveFactorials(value, i) {
  if (i > 1) {
    return recursiveFactorials(value * i, i - 1);
  } else {
    return value;
  }
}

let factorial = 25;
recursiveFactorials(factorial, factorial - 1);
extraLongFactorials(factorial);
