// Hoisting is a JS mechanism of puting variables and functions into memory during the compiling phase.
// This means that we can call variables and functions before they have been declared.
// Only works with functions declarations, it does not works with arrow functions.

myNameIs("Luis");

function myNameIs(name) {
  console.log(`My name is ${name}`);
}

const MyAgeIs = (age) => console.log(`My age is ${age}`);

MyAgeIs(120);
