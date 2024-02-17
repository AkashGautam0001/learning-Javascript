const promiseOne = new Promise(function (resolve, reject) {
	//Do an async task
	//DB calls, cryptography, network
	setTimeout(function () {
		console.log("Async task is complete");
		resolve();
	}, 1000);
});

promiseOne.then(function () {
	console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
	setTimeout(function () {
		console.log("Async task is complete");
		resolve();
	}, 1000);
}).then(function () {
	console.log("Async completed");
});

// ---
const promiseThree = new Promise(function (resolve, reject) {
	setTimeout(function () {
		resolve({ username: "Chai", email: "chai@gmail.com" });
	}, 1000);
});

promiseThree.then(function (user) {
	console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
	setTimeout(function () {
		let error = true;
		if (!error) {
			resolve({ username: "akash" });
		} else {
			reject("ERROR : something wrong");
		}
	}, 1000);
});

// const username = promiseFour.then((user) => {
// 	console.log(user);
// 	return user.username;
// });
// console.log(username);

promiseFour
	.then((user) => {
		console.log(user);
		return user.username;
	})
	.then((username) => {
		console.log(username);
	})
	.catch(function (error) {
		console.log(error);
	})
	.finally(() => {
		console.log("The Promise is either resolved or reject");
	});

const promiseFive = new Promise(function () {
	setTimeout(function () {
		let error = true;
		if (!error) {
			resolve({ username: "akash", password: "123" });
		} else {
			reject("ERROR : JS something wrong");
		}
	}, 1000);
});

//-------------------- promise is object
// async function consumePromiseFive() {
// 	const response = await promiseFive;
// 	console.log(response);
// }

// consumePromiseFive();

async function consumePromiseFive() {
	try {
		const response = await promiseFive;
		console.log(response);
	} catch (error) {
		console.log(error);
	}
}

consumePromiseFive();

// --------
async function getALlUsers() {
	try {
		const response = await fetch();
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.log("E : ", error);
	}
}

getALlUsers();

// ---------
fetch("https://api.github.com/users/hiteshchoudhary")
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		console.log(data);
	})
	.catch((error) => {
		console.log(error);
	});
