// You will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.
// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15.

// First part: let's create a function that takes an array with repeated elements and
// returns an array with no repeated elements.
function repeats() {
  let arr = [4, 5, 7, 5, 4];

  let repeat = false;
  if (arr.length < 1) return 0;

  if (arr.length === 1) return arr[0];

  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(i, 1);
        arr.splice(j - 1, 1);
        repeat = true;
        break;
      }
      if (repeat === true) {
        i = 0;
      }
    }
  }
  return arr;
}

console.log(repeats());
