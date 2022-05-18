const quickSort = (arr) => {
  if (arr.length <= 1) return arr;

  let temp = arr[0];
  let left = [];
  let right = [];

  for (let i = 1; i < arr.length; i++) {
    if (temp > arr[i]) left.push(arr[i]);
    else right.push(arr[i]);
  }

  return quickSort(left).concat(temp, quickSort(right));
};

function TimeDifference(strArr) {
  let temp = [];
  for (let i = 0; i < strArr.length; i++) {
    let a = strArr[i].split(":");
    let minute = parseInt(a[0]) * 60 + parseInt(a[1]);
    if (a[1].includes("pm")) minute += 12 * 60;

    for (let j = 0; j < strArr.length; j++) {
      let b = strArr[j].split(":");
      let minuteb = parseInt(b[0]) * 60 + parseInt(b[1]);
      if (b[1].includes("pm") && (!a[1].includes("am") || a[0] != "12"))
        minuteb += 12 * 60;
      if (minute != minuteb) {
        temp.push(Math.abs(minute - minuteb));
      }
    }
  }
  const a = quickSort(temp);

  // code goes here
  return a[0];
}

// keep this function call here
console.log(TimeDifference(readline()));
