//"use strict"; // treat all JS code as newer version
// alert(3+3)  we are using nodejs, not browser

/**
 * Data types in JS
 * 1 - Primitive
 * 2 - Non - Primitive
 *
 *
 * 1 -> Primitive DataType = String, Number, Bigint, Boolean, undefined, null, Symbol
 * 2 - Referance or non- primitive datatype = Object, Array
 */

//String
console.log("---String --");
let firstName = "Akash";
let lastName = "Gautam";
let fullName = firstName + lastName;
console.log(firstName + lastName);
console.log(firstName, lastName);
//String interpolation
console.log(`${firstName} ${lastName}`);

//Type of
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof fullName);
console.log(typeof String);

//Number
console.log("---Number --");
let score = 56;
let ft = 56.4;
let n = Infinity; //greater than any number.
let m = NaN; //an undefined or unrepresentable mathematical operation.
let p = 89898934938493893893489389389n; //maximum safe value, which is approximately 2^53 - 1. Similarly, there is also a
// minimum safe value, which is approximate -(2^53 - 1).
//due to precision loss, we use BigInt using 'n' at end.
console.table([
	[score, ft, n, n, p],
	[typeof score, typeof ft, typeof n, typeof m, typeof p],
]);

console.log(typeof Number);

// ---- Boolean ----
let isValid = true;
let notValid = false;
console.log(typeof isValid);
console.log(typeof false);
console.log(typeof true);

// Undefined
let a = undefined;
console.table([typeof a, typeof undefined]);

// Null
let n1 = null;
console.table([typeof n1, typeof null]);

//Object
//Objects are non-primitive data because they are mutable (can be changed).
// key and  value pair
// keys could be strings or symbols. Note: you can use number also internally it considerd number as strings.
// values could be of any datatype.
// denote by - curly bracket - {}
const profile = {
	name: "Akash",
	1: 8,
	age: 45,
};

console.log(profile);
console.table(profile);

//Symbol
//every Symbol() call is guaranteed to return a unique Symbol.
const sym = Symbol("Akash Gautam");
console.log(typeof sym); //symbol
console.log(typeof Symbol); //function
console.log(sym); // Symbol(Akash Gautam)

// Array - sequential order, multiple data type
console.log("Array");
const array = ["Akash", 21, "Benglore"];
console.log(array);
console.log(typeof array);
console.log(array[1]);
console.log(array[23]);
console.log(array[-3]);

//Multiline string
let multiline = `This is a
mulDiline
sDring.`;
console.log(multiline);

//Expression evalution
let x = 5;
let y = 10;
let result = `The sum of ${x} + ${y} is ${x + y}`;
console.log(result);

//null vs undefined
let nl = null;
let uf = undefined;
console.log(nl == uf); //loose equality
console.log(nl === uf); // strict equality

//Pre-increment operator increments the value and returns the incremented value immediately.
//Post increment operator returns the original value itself and increments the value later.
// let gameCounter = 100;
// gameCounter++;
// console.log(gameCounter);
// ++gameCounter;
// console.log(gameCounter);

/**
 *  == Compare value
 *  === compare value and data type (prefer to use mostly)
    logical OR ||
    logical AND &&
    logical NOT !
*/

//To reliably check if a value is NaN
// console.log(isNaN(NaN));
// console.log(isNaN(43));

//Type Coercion ?
// one of operand is not a string during concatenation
let score1 = 98;
let str = "The answer is : " + score1;
console.log(str);

// Object
const mentorDetails = {
	name: "Anurag",
	yearOfExperience: 4,
};
const teachStack = ["Html", "CSS", "Javascript", "Node"];
console.log(typeof mentorDetails);
console.log(typeof teachStack);

let name = 23;
if (typeof name === "string") {
	name.toUpperCase();
} else {
	console.log("Please provide a String");
}

// Ternary Opertor
// var isTheUserLoggedln = false;
// isTheUserLoggedln ? console.log("PW skills Granted") : console.log("Access Denied");

var isTheUserLoggedln = false;
var isTheCoursePurchased = false;
isTheUserLoggedln ? (isTheCoursePurchased ? console.log("Access Granted") : console.log("Access Denied!! Please Buy The Course")) : console.log("Access Denied!! Please Login");

//Switch
// switch statement internally uses strict equality (===) for comparisons, and objects are compared by reference, not by their content.
let role = "CEO";
let salary = 100000;
switch (role) {
	case "employee":
	case "hr":
	case "manager":
		salary += 0.05 * salary;
		break;
	case "CEO":
	case "CIO":
	case "CTO":
		salary += 0.1 * salary;
		break;
	default:
		console.log("Unknown Role");
}
console.log(salary);

//Solution - 1
let fruit = { name: "Apple" };
switch (fruit) {
	case { name: "Apple" }:
		console.log("It's an apple");
		break;
	default:
		console.log("Unknown fruits");
}
//Output : 'Unknown fruits

//Solution -2
let fruits = { name: "Apple" };
if (fruits.name === "Apple") {
	console.log("It's an apple");
} else {
	console.log("Unknown fruits");
}
