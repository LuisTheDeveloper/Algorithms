// QuickSort

const QuickSort = (array) => {
  let myArray = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
  //let myArray = [7, 2, 6, 5, 4];
  console.log(`QuickSort of array: ${myArray}`.bgRed);

  const Sort = (array) => {
    if (array.length <= 1) {
      return array;
    }

    const pivot = array[array.length - 1];
    const leftArr = [];
    const rightArr = [];
    console.log(`Pivot: ${pivot}`);
    for (const el of array.slice(0, array.length - 1)) {
      el < pivot ? leftArr.push(el) : rightArr.push(el);
    }
    return [...Sort(leftArr), pivot, ...Sort(rightArr)];
  };

  console.log(Sort(myArray));
};

module.exports = QuickSort;
