//function to find the square of a number
function squareOfANumber(num) {
	console.log(num * num);
}

function operation(num, func) {
	func(num);
}

operation(5, squareOfANumber);

// What is the need for a callback?
// 1.Handling Asynchronous Operations
// 2.Event Handling
/* 3.When a function fetches some data from an API that takes some time to get downloaded. We use the
callback function here so that the function that needs the data will only get executed when all the required
data is downloaded. By this, we can prevent running into errors because of the non-availability of some data
that are needed by some other function.

----- Callback Functions can be used in two scenarios=
    1. Synchronous operationsd
    2. Asynchronous operations.
*/

// 1. Synchronous callback
console.log("Start");
function function1() {
	console.log("Executing function 01");
}

function function2(callback) {
	callback();
	console.log("Executing function 02");
}

function2(function1);
console.log("End");

// 2. asynchronous callback
console.log("Start");
setTimeout(() => {
	console.log("Set Timeout is being executed");
}, 2000);
console.log("End");

//Nested Callbacks
console.log("Start");
setTimeout(function () {
	console.log("Executing f - 1");
	setTimeout(function () {
		console.log("Executing f - 2");
		setTimeout(function () {
			console.log("Executing f -3");
		}, 1000);
	}, 1000);
}, 1000);

console.log("End");

/* Q1. What is callback hell?
Ans. Callback hell, also known as the "Pyramid of Doom," occurs when multiple asynchronous operations are
nested within each other, leading to deeply indented and hard-to-read code.*/
function fetchData(url, callback) {
	setTimeout(function () {
		console.log("Data fetched from", url);
		callback();
	}, 1000);
}

fetchData("example.com/api/data", function () {
	fetchData("example.com/api/data/detail", function () {
		fetchData("example.com/api/data/detail/profile", function () {
			fetchData("example.com/api/data/detail/profile/work", function () {
				fetchData("example.com/api/data/detail/profile/work/salary", function () {
					fetchData("example.com/api/data/detail/profile/work/salary/......", function () {
						//......................................and so on...
					});
				});
			});
		});
	});
});
