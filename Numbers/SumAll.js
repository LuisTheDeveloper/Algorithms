function SumAll(arr) {
  const min = arr[0] < arr[1] ? arr[0] : arr[1];
  const max = arr[0] > arr[1] ? arr[0] : arr[1];

  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
}

const SumAll1 = (arr) => {
  let sum = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i;
  }

  return sum;
};

const FizzBuzz = (n) => {
  // Write your code here
  let start = 1;

  while (start <= n) {
    console.log(
      start % 3 === 0
        ? start % 5 === 0
          ? "FizzBuzz"
          : "Fizz"
        : start % 5 === 0
        ? "Buzz"
        : start
    );
    start++;
  }
};

module.exports = { SumAll: SumAll, SumAll1: SumAll1, FizzBuzz: FizzBuzz };

while (start < n) {
  response =
    start % 3 === 0
      ? start % 5 === 0
        ? "FizzBuzz"
        : "Fizz"
      : start % 5 === 0
      ? "Buzz"
      : n;
  start++;
}

while (start <= n) {
  if (start % 3 === 0 && start % 5 === 0) {
    return "FizzBuzz";
  }
  if (start % 3 !== 0 && start % 5 !== 0) {
    return start;
  }
  if (start % 3 === 0 && start % 5 !== 0) {
    return "Fizz";
  } else {
    return "Buzz";
  }
  start++;
}
