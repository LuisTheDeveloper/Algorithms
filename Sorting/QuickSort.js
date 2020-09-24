const QuickSort = (array) => {
  // recursive functions always start with the edge case:
  if (array.length <= 1) {
    return array;
  }

  const pivot = array[array.length - 1];
  const leftArr = [];
  const rightArr = [];

  for (const el of array.slice(0, array.length - 1)) {
    el < pivot ? leftArr.push(el) : rightArr.push(el);
  }
  return [...QuickSort(leftArr), pivot, ...QuickSort(rightArr)];
};

module.exports = QuickSort;
