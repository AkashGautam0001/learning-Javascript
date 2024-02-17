// functions are treated as first-class citizens in JavaScript which means that functions can be
//  - assigned to different variables
//  - passed as arguments to different functions
// - returned from different functions

// Higher-order functions are, in fact, functions that accept another function as an argument or return another
// function.

function calculatorFunction(operation, initialValue, numbers) {
	let total = initialValue;
	for (const number of numbers) {
		total = operation(total, number);
	}
	return total;
}
function sum(n1, n2) {
	return n1 + n2;
}
function multiply(n1, n2) {
	return n1 * n2;
}
calculatorFunction(sum, 0, [1, 3, 4]); // 8
calculatorFunction(multiply, 1, [1, 3, 4]); // 12

//Another example
function createMultiplier(factor) {
	return function (number) {
		return number * factor;
	};
}
const double = createMultiplier(2);
const ans = double(5);
console.log(ans);

// Use case of higher order functions:-
/**
 *  Callback Functions.
 *  Array Iteration and Transformation :
        Higher-order functions like map(), filter(), reduce(), and forEach() are extensively used for iterating over
        arrays and transforming their elements.
 *  Function Composition.
        Function composition is the process of combining two or more functions to produce a new function.
        Higher-order functions enable composing functions by taking one function's output and passing it as an
        input to another function.
 */

function findIndex(arr, callback) {
	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i])) {
			return i;
		}
	}
	return -1;
}

const number = [1, 3, 5, 7, 9];
const index = findIndex(number, (num) => num > 5);
console.log(index);

// Implementing customForEach function
function customForEach(arr, callback) {
	for (let i = 0; i < arr.length; i++) {
		callback(arr[i], i, arr);
	}
}
// Example usage
const numbers = [1, 2, 3, 4];
customForEach(numbers, (num) => console.log(num));
