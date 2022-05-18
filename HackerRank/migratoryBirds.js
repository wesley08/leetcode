function migratoryBirds(arr) {
  let temp = {};
  for (let i = 0; i < arr.length; i++) {
    if (temp[arr[i]]) temp[arr[i]] += 1;
    else temp[arr[i]] = 1;
  }
  const result = Object.entries(temp).sort((a, b) => b[1] - a[1]);
  return result[0][0];
}

console.log(migratoryBirds([1, 4, 4, 4, 5, 3]));
// arr => [1, 4, 4, 4, 5, 3]
// first loop
// arr[0] => 1
// temp[1] = 1
// temp = {1:1}

// second loop
// arr[1] => 4
// temp[4] = 1
// temp = {1:1, 4:1}

// third loop
// arr[2] => 4
// temp[4] += 1 => 2
// temp = {1:1, 4:2}

// forth loop
// arr[3] => 4
// temp[4] += 1 => 3
// temp = {1:1, 4:3}

// fifth loop
// arr[4] => 5
// temp[5] = 1
// temp = {1:1, 4:3,5:1}

// sixth loop
// arr[5] => 3
// temp[3] = 1
// temp = {1:1, 4:3, 5:1, 3:1}

//sorting the highest to lowest
// {4:3, 1:1, 5:1, 3,:1}
//return the highest
