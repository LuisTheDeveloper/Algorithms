const colors = require("colors");
const BubbleSort = require("./Sorting/BubbleSort");
const QuickSort = require("./Sorting/QuickSort");
const MergeSort = require("./Sorting/MergeSort");
const SelectionSort = require("./Sorting/SelectionSort");

const myArray = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];

console.log(`BubbleSort of the array: ${myArray}`.red);
console.log(BubbleSort(myArray));

console.log(`QuickSort of the array: ${myArray}`.green);
console.log(QuickSort(myArray));

console.log(`MergeSort of the array: ${myArray}`.yellow);
console.log(MergeSort(myArray));

console.log(`SelectionSort of the array: ${myArray}`.blue);
console.log(SelectionSort(myArray));
