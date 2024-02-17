//Arrays Methods

//syntax - array.forEach(callback(item, index, array) => Statements);
let itemsInCart = ["apple", "comb", "mike", "keyboard", "t-shirt", "mobile holder"];
itemsInCart.forEach((item) => console.log(item));

itemsInCart.forEach((item, index, arr) => {
	console.log(`This item ${item} was added to cart in position ${index + 1}`);
});

//map
//syntax
/*
 *  Function Declaration
   array.map(function (item, index, array) {})
 *  Arrow Function
    array.map((item, index, array) => {})
 *  Call back Function
    array.map(callback)
 */

// Array of item prices as strings
let cartItemsPriceAsStrings = ["100", "58.50", "134", "175", "146", "205"];
// Array of item prices as numbers
let cartItemsPriceAsNumbers = cartItemsPriceAsStrings.map((item) => {
	return Number(item);
});
console.log(cartItemsPriceAsNumbers);
/*Note: If you forget to return a value within the callback function of the “map” method in JavaScript, the resulting
array will contain undefined values in the corresponding positions. This happens because “map” creates a new
array by applying the callback function to each element of the original array and uses the returned value to
populate the corresponding position in the new array.*/

// filter
/**
 * // Function Declaration
   array.filter(function (item, index, array) { Function Body })
    // Arro Function
    array.filter((item, index, array) => { Function Body })
   // Call back Function
    array.filter(callback)
 */

let userNames = ["Nasikh", "Anurag", "Alka", "Prabir", "Vinay"];
let longUserNames = userNames.filter((item) => item.length > 5);
console.log(longUserNames); // OUTPUT : [ 'Nasikh', 'Anurag','Prabir' ]

// Note:The “break” keyword does not work in the forEach, map, and filter methods in JavaScript.

// Reduce function
/**
 * Introduction
As the name suggests the reduce method reduces the array values to a single value. The reduce() method
runs a reducer function on each array item and returns a single output result. The input array can have
numbers, strings, or an object.

 * Features of reduce
1. The reducer function passed will be applied to all the items in the array.
2. The result will be a single value accumulated on passing all the array items to the reducer function.
3. The reduce method is not valid for empty arrays.
4. The reduce method doesn’t change the original array on which the reduce method is applied.
*/

//syntax : array.reduce(function(accumulator, currentValue, currentIndex, array), initialValue)

let arr = [1, 2, 44, 67, 89];
let result = arr.reduce((acc, curr) => acc + curr, 0);
console.log(result);

const students = [
	{ name: "Alice", score: 85 },
	{ name: "Bob", score: 90 },
	{ name: "Charlie", score: 75 },
	{ name: "Dave", score: 95 },
];
const highestScoringStudent = students.reduce(function (acc, student) {
	if (student.score > acc.score) {
		return student;
	} else {
		return acc;
	}
});
console.log(highestScoringStudent); // Output: { name: 'Dave', score: 95 }

const products = [
	{ id: 1, name: "Laptop", price: 999 },
	{ id: 2, name: "Phone", price: 499 },
	{ id: 3, name: "Tablet", price: 299 },
];
// Using map to extract an array of product names
const productNames = products.map((product) => product.name);
// productNames: ['Laptop', 'Phone', 'Tablet']
