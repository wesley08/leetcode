function utopianTree(n) {
  if (n == 0) return 1;
  let result = 1;
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) result += 1; // kalau genap di tambah
    else result *= 2; //ganjil di kali
  }
  return result;
}

console.log(utopianTree(0));
console.log(utopianTree(1));
console.log(utopianTree(4));
//result = 1 , n = 4 looping 4 times
//1 % 2  = 1-> result(1) *= 2 => 2
//2 % 2  = 0-> result(2) += 1 => 3
//3 % 2  = 1-> result(3) *= 2 => 6
//4 % 2  = 0-> result(6) += 1 => 7
