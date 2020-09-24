const SelectionSort = (array) => {
  // Make shallow copy of the array so this function does not mutate the original array (pure function)
  const arr = array.slice();

  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
};

module.exports = SelectionSort;
