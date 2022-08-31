function chocolateFeast(money, chocoCost, exchangeWrapper) {
  // Write your code here
  let result = Math.floor(money / chocoCost);

  let wrapper = result;
  while (wrapper >= exchangeWrapper) {
    wrapper = wrapper - exchangeWrapper;
    wrapper += 1;
    result += 1;
  }
  return result;
}
console.log(chocolateFeast(10, 2, 5));
console.log(chocolateFeast(12, 4, 4));
console.log(chocolateFeast(6, 2, 2));
console.log(chocolateFeast(7, 3, 2));
