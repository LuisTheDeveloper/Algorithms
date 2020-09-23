const colors = require("colors");

// Bubble Sort
let swapped = true;
const BubbleSort = () => {
  let myArray = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];

  console.log(`BubbleSort of array: ${myArray}`.bgRed);

  const Sort = (arr) => {
    swapped = false;
    let end = arr.length - 1;

    for (let i = 0, j = 1; i < end; i++, j++) {
      if (arr[i] > arr[j]) {
        swapped = true;
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
    end--;
  };

  do {
    Sort(myArray);

    swapped
      ? console.log(`BubbleSort in action: ${myArray}`)
      : console.log(`Sorted array: ${myArray}`.bgBlue);
  } while (swapped);
};

module.exports = BubbleSort;
