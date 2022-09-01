var twoSum = function (arrayNumber, target) {
  const a = {}; // untuk melakukan penampung angka yang diinginkan dijadikan key dan index dari angka tersebut dijadikan value

  for (let i = 0; i < arrayNumber.length; i++) {
    //melakukan looping array number yang di lempar
    const searchNumber = target - arrayNumber[i]; // melakukan kalkulasi dimana target dikurangi dengan arrayNumber ke berapa contoh 9-2 maka 7 dan kita ingin mencari tujuh di penampung nantintya

    if (a[searchNumber] !== undefined) return [a[searchNumber], i];
    // jika di penampung ada angka yang ingin kita cari, maka kita akan melakukan return loopingan index keberapa dan 7 di index keberapa

    a[arrayNumber[i]] = i; // jika tidak ada di penampung kita maka kita melakukan penampungan dulu
  }
};

const test = twoSum([2, 7, 11, 15], 9);

const twoSumRecursive = (arrayNumber, target, i, temp) => {
  if (i < arrayNumber.length) {
    const searchNumber = target - arrayNumber[i];
    if (temp[searchNumber] !== undefined) return [temp[searchNumber], i];
    temp[arrayNumber[i]] = i;
    return twoSumRecursive(arrayNumber, target, i + 1, temp);
  }
};

const testRecursive = twoSumRecursive([2, 7, 11, 15], 9, 0, {});
console.log(test);
console.log(testRecursive);
