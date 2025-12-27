const color = {
  green: (s) => `\x1b[32m${s}\x1b[0m`, // function name
  blue: (s) => `\x1b[34m${s}\x1b[0m`, // =>
  yellow: (s) => `\x1b[33m${s}\x1b[0m`, // result
  gray: (s) => `\x1b[90m${s}\x1b[0m`, // time
  red: (s) => `\x1b[31m${s}\x1b[0m`, // error
};

function wrap(fn, args = []) {
  const start = Date.now();

  try {
    const result = fn(...args);
    const time = Date.now() - start;

    const prettyArgs = args.map((a) => JSON.stringify(a)).join(", ");

    console.log();
    console.log(
      `${color.green(fn.name)} (${prettyArgs}) ` +
        `${color.blue("=>")} ` +
        `${color.yellow(
          typeof result === "string" ? `"${result}"` : JSON.stringify(result)
        )} ` +
        `${color.gray(`[${time}ms]`)}`
    );

    return result;
  } catch (err) {
    console.log(`${color.red("❌ Error in")} ${fn.name}:`, err.message);
  }
}

function test(fn) {
  return (...cases) => {
    cases.forEach((args) => wrap(fn, Array.isArray(args) ? args : [args]));
  };
}

function gradingStudents(grades) {
  const logicGrading = (grade) => {
    if (grade < 38) return grade;

    const getLatestNumber = grade % 10;

    if (getLatestNumber === 0) return grade;

    if (getLatestNumber > 5 && 10 - getLatestNumber <= 2) {
      return grade - getLatestNumber + 10;
    }

    if (getLatestNumber < 5 && 5 - getLatestNumber <= 2) {
      return grade - getLatestNumber + 5;
    }

    return grade;
  };
  return grades.map((grade) => logicGrading(grade));
}

const isPalindrome = function (x) {
  if (x < 0) return false;
  if (x < 10) return true;

  let original = x;
  let reversed = 0;

  while (x > 0) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return original === reversed;
};

const longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";

  let prefix = "";

  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== char) return prefix;
    }

    prefix += char;
  }

  return prefix;
};

const isValidParantheses = (s) => {
  const temp = [];

  const hashParantheses = { ")": "(", "}": "{", "]": "[" };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if ("()[]{}".includes(char)) {
      if ("{([".includes(char)) {
        temp.push(char);
      } else if (temp[temp.length - 1] === hashParantheses[char]) {
        temp.pop();
      } else {
        return false;
      }
    }
  }

  return temp.length === 0;
};

const rotate = function (nums = [], k) {
  const temp = [...nums];
  const modulousRotate = k % nums.length;
  temp.unshift(...temp.splice(temp.length - modulousRotate));
  return temp;
};

const subsets = function (nums) {
  const result = [[]];

  for (const num of nums) {
    const size = result.length;
    for (let i = 0; i < size; i++) {
      result.push([...result[i], num]);
    }
  }

  return result;
};

var solveNQueens = function (n) {
  const result = [];
  const board = Array.from({ length: n }, () => ".".repeat(n));

  const cols = new Set();
  const diag1 = new Set(); // row - col
  const diag2 = new Set(); // row + col

  function backtrack(row) {
    if (row === n) {
      result.push([...board]);
      return;
    }

    for (let col = 0; col < n; col++) {
      if (cols.has(col) || diag1.has(row - col) || diag2.has(row + col)) {
        continue;
      }

      // place queen
      cols.add(col);
      diag1.add(row - col);
      diag2.add(row + col);

      board[row] =
        board[row].substring(0, col) + "Q" + board[row].substring(col + 1);
      backtrack(row + 1);

      // remove queen (backtrack)
      cols.delete(col);
      diag1.delete(row - col);
      diag2.delete(row + col);
      board[row] = ".".repeat(n);
    }
  }

  backtrack(0);
  return result;
};

const reverse = (x) => {
  if (x < 10 && x > 0) return x;

  const INT_MAX = 2 ** 31 - 1;
  let reversed = 0;

  const isMinus = x < 0;
  if (isMinus) x = x * -1;

  while (x > 0) {
    const digit = x % 10;
    if (reversed > Math.floor(INT_MAX - digit / 10)) return 0;

    reversed = reversed * 10 + digit;
    x = Math.floor(x / 10);
  }

  return isMinus ? reversed * -1 : reversed;
};

const searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
};

test(gradingStudents)([[73, 67, 38, 33]]);

test(isPalindrome)([123321], [1]);

test(longestCommonPrefix)(
  [["flower", "flow", "flight"]],
  [["dog", "racecar", "car"]]
);

test(isValidParantheses)(["()[]{}"]);

test(reverse)([123], [210], [-123], [1534236469], [-2147483648], [-2147483412]);

test(solveNQueens)([4]);

test(rotate)([[1, 2, 3, 4, 5, 6, 7], 3], [[1, 2], 7]);

test(subsets)([[1, 2, 3]], [[3, 2, 4, 1]]);

test(searchInsert)(
  [[1, 3, 5, 6], 0],
  [[1, 3, 5, 6], 5],
  [[1, 3, 5, 6], 2],
  [[1, 3, 5, 6], 7],
  [[1, 3, 5], 4],
  [[1, 3], 1],
  [[1, 3], 2]
);
