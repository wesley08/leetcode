//NOT DONE
function pairs(k, arr) {
  // Write your code here
  arr.sort();
  let result = 0,
    i = 0,
    j = 1;
  while (j < arr.length) {
    let diff = arr[j] - arr[i];
    if (diff == k) {
      result += 1;
      j++;
    } else if (diff > k) i++;
    else if (diff < k) j++;
  }

  // for(let i =0; i < arr.length;i++){
  //     for(let j =0; j < arr.length;j++){
  //         if(arr[i] - arr[j] == k) result+=1;
  //     }
  // } belum bisa logicnya

  return result;
}
