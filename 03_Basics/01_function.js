function addTwoNumber(num1, num2) {
	// console.log(num1 + num2);
}
const result = addTwoNumber(3, 8);
// console.log(result);

if ("") {
	// console.log("Hello");
}
if (undefined) {
	// console.log("Hello");
}

function calculateCartPrice(...num1) {
	return num1;
}

function one() {
	const username = "Hitesh";
	function two() {
		const website = "Youtube";
		//console.log(this.username); // this is called current context
	}
	// console.log(website);
	two();
}

one();

// one -> reference
// one() -> function call

//function with default parameter
function displayMessage(message = "Default") {
	console.log(`Hello, I am ${message}`);
}
// displayMessage("Akash");
displayMessage(""); //Hello, I am
displayMessage(); //Hello, I am Default
displayMessage(null); //Hello, I am null
displayMessage(undefined); //Hello, I am Default
console.log(displayMessage); //[Function: displayMessage]
console.log(displayMessage()); //undefined

function sum([num1, num2]) {
	return num1 + num2;
}
const arr = [7, 8, 12];
console.log(sum(arr, 12)); //15
// console.log(sum(23, 12)); //not valid
console.log(sum(["ram", "kumar"]));

//we want to passed unlimited number of parameter
// we use arguments
// unlimited numbers passed parameter into the function
function sumOfAllParameter(num) {
	let sum = 0;
	for (let i = 0; i < arguments.length; i++) {
		sum = sum + arguments[i];
	}
	// return sum;
	return num;
}

console.log(sumOfAllParameter(1, 2, 3, 4, 5, 6, 7, 8, 9));
console.log(sumOfAllParameter());
