const halloweenSale = (highNumber, decrease, minimunPrice, wallet) => {
  if (wallet < highNumber) return 0;
  if (wallet == highNumber) return 1;

  let result = 1;
  let price = highNumber;
  wallet -= price;

  while (price - decrease >= minimunPrice && price - decrease < wallet) {
    price -= decrease;
    wallet -= price;
    result++;
  }

  if (wallet > minimunPrice && price < wallet)
    result += Math.floor(wallet / minimunPrice);

  return result;
};

console.log(halloweenSale(100, 19, 1, 180));
// console.log(Math.floor(10 / 6));
