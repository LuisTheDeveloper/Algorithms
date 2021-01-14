const theArray = [4, 7, 8, 3, 2, 6, 5];

const heapify = (array, i, N) => {
  let largest = 0;
  let left = 2 * i;
  let right = 2 * i + 1;
  console.log(i);
  largest = left <= N && array[left] > array[i] ? left : i;

  if (right <= N && array[right] > array[largest]) {
    largest = right;
  }
  if (largest != i) {
    [array[i], array[largest]] = [array[largest], array[i]];
    heapify(array, largest, N);
  }
  // return array;
};

console.log(theArray);

heapify(theArray, 1, theArray.length);
console.log(theArray);
