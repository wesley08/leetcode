function minimumDistances(a) {
  // Write your code here
  const temp = [];
  for (let i = 0; i < a.length / 2; i++) {
    if (a[i] == a[a.length - i - 1]) temp.push(a.length - i - 1 - i);
  }
  temp.sort();

  return temp[0] == 0 ? -1 : temp[0];
}

console.log(minimumDistances([7, 1, 3, 4, 1, 7]));
console.log(minimumDistances([1, 2, 3, 4, 10]));
//not done yet
