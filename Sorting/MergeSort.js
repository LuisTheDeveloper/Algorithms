const MergeSort = (array) => {
  // recursive functions always start with the edge case:
  if (array.length <= 1) {
    return array;
  }

  // split array into two:
  const middleIndex = Math.floor(array.length / 2);
  const leftArr = array.slice(0, middleIndex); //middleIndex excluded
  const rightArr = array.slice(middleIndex);

  return merge(MergeSort(leftArr), MergeSort(rightArr));
};

// leftArr and rightArr are sorted
const merge = (leftArr, rightArr) => {
  const output = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    const leftEl = leftArr[leftIndex]; // e.g. leftArr[0] = 1
    const rightEl = rightArr[rightIndex]; // e.g. rightArr[0] = 3

    if (leftEl < rightEl) {
      output.push(leftEl); // add to temporary array
      leftIndex++;
    } else {
      output.push(rightEl);
      rightIndex++;
    }
  }

  // ... spread operator: separates the array content with comma values
  // Despites the output/temporary array has values that we need to get it,
  // we also need to check values from both of arrays (left and right),
  // because we dont know which one was used. Only one of them will have the values we need to get it.
  return [
    ...output,
    ...leftArr.slice(leftIndex),
    ...rightArr.slice(rightIndex),
  ];
};

module.exports = MergeSort;
