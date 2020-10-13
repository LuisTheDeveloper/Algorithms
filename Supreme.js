// This source file will have some operations.

// 1. Create a valid group of elements
// Let's say we have an array of arrays and we want the first and second element of each array.
// e.g. [88, 99, 200] we want to have [88, 99], so we need to remove the third element in each array.
// We want all the valid elements in one single array.

const sample1 = [
  [88, 99, 200],
  [12, 12, 200],
  [44, 99, 100],
  [88, 33, 100],
  [11, 90, 100],
];

const createValidArray = (sample) => {
  const flatArray = sample.flat();
  var j = 0;
  var x = 0;

  for (i = 2; j < flatArray.length; i += 3) {
    flatArray.copyWithin(x, j, i);
    j = i + 1;
    x += 2;
  }
  return flatArray.splice(0, x);
};

console.log(sample1);
const validSample = createValidArray(sample1);
console.log(validSample)  // Output: [88, 99, 12, 12, 44, 99, 88, 33, 11, 90]

// 2. To be continued...