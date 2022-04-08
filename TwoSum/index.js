var twoSum = function (nums, target) {
  let hashMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const calculate = target - nums[i]; // minus the target with the every loop example: 9-2 will get 7

    if (hashMap.has(calculate)) {
      // checking on our hashmap already had the 7 value as a key? if yes
      return [hashMap.get(calculate), i]; // we will return the index of the value 7 we set on below and the current index is loop
    }
    hashMap.set(nums[i], i); // if not we will set them to hash map
  }
};

const test = twoSum([2, 7, 11, 15], 9);
// const test = twoSum([3, 2, 4], 6);
// const test = twoSum([0, 4, 3, 0], 0);
console.log(test);
