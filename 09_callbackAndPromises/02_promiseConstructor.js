const newPromise = new Promise((resolve, reject) => {
	let randomNumber = Math.random();
	console.log(randomNumber);
	if (randomNumber > 0.5) {
		resolve("The Promise is resolved. The number is greater than 0.5");
	} else {
		reject("The Promise is reject. The number is lesser than 0.5");
	}
});

// console.log(newPromise);
newPromise
	.then((result) => console.log(result))
	.catch((error) => console.log(error))
	.finally(() => {
		console.log("The Promise is settled");
	});

// when we have multiple promises
const promise1 = new Promise(() => {});
const promise2 = new Promise(() => {});
const promise3 = new Promise(() => {});
const promises = [promise1, promise2, promise3];
Promise.all(promises)
	.then((result) => {
		console.log(result);
	})
	.catch((error) => {
		console.log(error);
	});

//Method of promises

const promiseAny = [
	new Promise((resolve, reject) => setTimeout(() => reject("Error 1"), 1000)),
	new Promise((resolve, reject) => setTimeout(() => resolve("promise 2"), 4000)),
	new Promise((resolve, reject) => setTimeout(() => resolve("promise 3"), 7000)),
];
const anyPromise = Promise.any(promiseAny);
anyPromise.then((value) => {
	console.log("The first fulfilled promise is", value);
});

//Aggregation error
//When all the promises in the provided iterable are rejected, the resulting rejection is represented by an
//AggregateError. This AggregateError contains an array of rejection reasons in its errors property.
const promiseAnyError = [
	new Promise((resolve, reject) => setTimeout(() => reject("Error 1"), 1000)),
	new Promise((resolve, reject) => setTimeout(() => reject("Error 2"), 2000)),
	new Promise((resolve, reject) => setTimeout(() => reject("Error 3"), 3000)),
];
const anyPromiseError = Promise.any(promiseAnyError);
anyPromiseError
	.then((value) => {
		console.log("The first fulfilled promise is", value);
	})
	.catch((aggregationError) => {
		console.log(aggregationError.errors);
	});

/**Promise.resolve() is a method that creates a promise that is already resolved. This means that the promise will
not be pending, and it will not be rejected. Instead, it will immediately resolve with the value that is passed to
Promise.resolve().
 */
const promise = Promise.resolve("Hello, world");
promise.then((value) => {
	console.log(value);
});

/**
 * Promise.reject() is a method that creates a promise that is already rejected. This means that the promise will
not be pending, and it will not be resolved. Instead, it will immediately reject with the reason that is passed to
Promise.reject().
 */
const promiseR = Promise.reject("Error");
promise.catch((reason) => {
	console.log(reason);
});
