// Declaring a Hashmap using the JS Map constructor
let firstHashmap = new Map();

// Declaring and initializing a new hashmap object
let secondHashmap = new Map([
  [1, "first"],
  [2, "second"],
  [3, "third"],
]);

console.log("firsthashmap:", firstHashmap);
console.log("secondHashmap:", secondHashmap);

console.log(secondHashmap.get(1));
