// Basic Data Operations with Arrays using JS.
// Part One.
// For more info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// Replacing elements from an array: .fill() or .splice() - splice() removes elements from an array too.

// arr.fill(value[, start[, end]])
// Returns the modified array with the new value.
// It is a mutator method: it will change the array itself.

var array1 = [127, 256, 512, 1024];
array1.fill(2048, 3, 4);
console.log(array1);

const data1 = { vitamins: "A", dosage: 50, measurement: "micrograms" };
const data2 = { vitamins: "E", dosage: 4, measurement: "miligrams" };
const data3 = { vitamins: "K2", dosage: 100, measurement: "micrograms" };
const data4 = { vitamins: "B1", dosage: 100, measurement: "miligrams" };

array1.fill(data1, 3, 4);
console.log(array1);

const array2 = [
  { vitamins: "K2", dosage: 100, measurement: "micrograms" },
  { vitamins: "D3", dosage: 50, measurement: "micrograms" },
  { vitamins: "C", dosage: 1000, measurement: "miligrams" },
];

console.log(array2);
array2.fill(data2, 0, 1);
console.log(array2);

array2.fill(data3, 0, 1);
console.log(array2);

// Inserting Elements into an array: .push() and .splice() methods
// For appending elements into an array use .push()

// arr.push([element1[, ...[, elementN]]])
// returns the new length.

array2.push(data3, data2);
console.log(array2);

// For changing (replace or delete elements) or inserting in a specific index use .splice()
// let arrDeletedItems = array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
// Returns the deleted element or an empty array.
array2.splice(3, 1, data4);
console.log(array2);
array2.splice(0, 0, data1);
console.log(array2);

// Note: if you pass just one argument to .splice() it will remove that element.

// Sorting an array use .sort(), however you can use a function to sort each element according to the function logic.
// .sort() by default converts elements of an array into a string an sorts in that way.
// arr.sort([compareFunction])
// Returns the sorted array

const unSortedArray = [99, 80, 7, 1, 100, 9];
console.log(unSortedArray.sort());

// Now providing a function:
console.log(unSortedArray.sort((a, b) => a - b));

// Sorting our vitamins object array:
const sortedArray = array2.sort((a, b) => {
  return a.vitamins < b.vitamins ? -1 : 1;
});
console.log(array2);

// Reversing the elements of an array ise .reverse(), it will revert in place.
// a.reverse()
// Returns the reversed array

console.log(array2.reverse());
array2.reverse();

// Rotating an array to the right (or left) by k steps (k>0)
// There is no built-in method for this is JS (for the moment - 27/09/2020), however we can use the following algorithm
// Using .pop() and .unshift()
// .pop() removes the LAST element of an array and returns the removed element, like .splice() does. array.pop()
// .unshift() inserts one or more elements to the begginning of an array and returns the length. array.unshift(element1[,...[, elementN]])

console.log(array2);
// Let's rotate this array by 2 steps

let steps = 1;
while (steps <= 2) {
  array2.unshift(array2[array2.length - 1]);
  array2.pop();
  steps++;
}
console.log(array2);

// This works but is not a very efficient algorithm, what if we have an array with 1000 elements and we want to rotate 900 elements?
// Shifting one at time is a big O(n) time consuming.
// To speed up the process we can use the help of .splice()

const rotateArray = (theArray, k) => {
  if (theArray.length > k) {
    theArray.unshift(...theArray.splice(-k)); // -k will begin from the end
  } else {
    let i = 0;
    while (i < k) {
      theArray.unshift(theArray.splice(-1));
      i++;
    }
  }
  return theArray;
};

// Rotate back to the original shape:
console.log(rotateArray(array2, 4));

// Changing the contents of each element of an array, we use .map().
// The power of .map() lays in the callback function that we pass in.
// Returns a new array.
// let new_array = arr.map(function callback( currentValue[, index[, array]]) {
// return element for new_array
// }[, thisArg])

// Let's change the dosage to the correct values by dividing by 10.

const tempArr = [
  { vitamins: "K2", dosage: 1000, measurement: "micrograms" },
  { vitamins: "D3", dosage: 500, measurement: "micrograms" },
  { vitamins: "C", dosage: 10000, measurement: "miligrams" },
];

console.log(tempArr);
const correctArray = tempArr.map((a) => ({
  vitamins: a.vitamins,
  dosage: a.dosage / 10,
  measurement: a.measurement,
}));

console.log(correctArray);
