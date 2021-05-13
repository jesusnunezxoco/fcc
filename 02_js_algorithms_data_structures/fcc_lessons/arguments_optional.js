// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);

// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.


function addTogether(first, second) {
  // if first arg is not a number
  // return undefined
  if (typeof first !== "number") {
    return undefined;
  }

  // add function
  // if x is a number, add x to the first number
  // otherwise, return undefined
  const add = (x) => (typeof x === "number" ? first + x : undefined);

  // check if the second argument is undefined
  // if it is undefined, use the add function with a given number
  // otherwise, use the add function with the second argument provided
  return typeof second === "undefined" ? num => add(num) : add(second);
}

console.log("***One argument, all numbers***");
console.log(addTogether(2));
console.log(addTogether(3));
console.log(addTogether(4));

console.log("***Two arguments, all numbers***");
console.log(addTogether(2, 2));
console.log(addTogether(3, 4));
console.log(addTogether(4, 6));

console.log("***invalid***");
console.log(addTogether("hello"));
console.log(addTogether(3, "hello"));
console.log(addTogether({}, 2));
