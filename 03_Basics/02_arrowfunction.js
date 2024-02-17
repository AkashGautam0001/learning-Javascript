//In Javascript, functions are first-class citizens.
// Functions in JavaScript are first-class citizens, meaning they can be assigned to variables, passed as
// arguments to other functions, and returned from functions.
const square = (x) => x * x;
const sumOfTwoNumbers = (x, y) => x + y;
const sum = (x, y) => {
	console.log(`Adding ${x} and ${y}`);
	return x + y;
};

console.log(sum); //[Function: sum]
console.log(sum(4, 5));
console.log(sum());
sum();

const sumAndDifference = (x, y) => ({ sum: x + y, difference: x - y });
console.log(4, 5);

// Limitation for arrow function
/**
   Arrow functions cannot access the argument object
   Arrow functions do not have the prototpe propert
   Arrow functions cannot be used with the new eword
   Arrow functions cannot be used as constructors
   These functions are anonmous, and it is hard to debug the code.
 */
/**
 * Binding of “this”

Use for new keyword
Regular function : Has its, own “this” value, which is Determine by how the function is called- The value of
“this” can change Dynamically depending on the context of invocation,
Arrow function : Inherits the “this” value from the enclosing lexical scope- It does not have it's own “this”
binding and captures the “this” value of the surrounding context-
 */

function myFunction() {} // function declaration
const myFunction = function () {}; // function expression
