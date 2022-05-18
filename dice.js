let diceStep = [0, 6, 5, 4, 3, 2, 1];

let getStepToChange = (a, b) => {
  if (a == b) return 0;
  if (diceStep[a] == b) return 2;
  return 1;
};

let minStepDice = (arr) => {
  let minStep = Number.MAX_VALUE;
  for (let i = 1; i <= 6; i++) {
    //loop for the dice 1 to 6
    let currentStep = 0;
    for (let j = 0; j < arr.length; j++) {
      currentStep += getStepToChange(arr[j], i);
    }

    minStep = Math.min(minStep, currentStep);
  }
  return minStep;
};

let minStepMyVersion = (arr) => {
  arr.sort((a, b) => b - a);
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[0] != arr[i]) temp += 1;
  }
  return temp;
};

console.log(minStepDice([4, 2, 6, 6, 2, 6, 2, 1]));
console.log(minStepMyVersion([4, 2, 6, 6, 2, 6, 2, 1]));
