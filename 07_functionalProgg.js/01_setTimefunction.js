// ------------------ setInterval -----------------------

// const exSetInterval = setInterval(myRepeatedMessage, 300);
function myRepeatedMessage() {
	console.log("Hi");
	console.log("Hi Again !");
}

// const printSomeThing = setInterval(() => {
// 	console.log("Hi");
// }, 5000);

// setInterval(() => {
// 	console.log("Hi");
// }, 1000);

// setInterval(timer, 1000);
function timer() {
	const date = new Date();
	// const newTime = date.toLocaleDateString();
	const newTime = date.toLocaleTimeString();
	console.log(newTime);
}

var interval = setInterval(warning, 3000);
function warning() {
	console.log("3 second warning");
	clearInterval(interval);
}

// ----------------------- setTimeout -----------------------
function fetchDataFromAPI() {
	console.log("Fetching data from the API at : ", new Date());
}
const dataFetchInterval = setInterval(fetchDataFromAPI, 3000);
setTimeout(function () {
	clearInterval(dataFetchInterval);
	console.log("Data fetching stopped after 15 second.");
}, 15000);

// use cases ---------------------------------
let countdown;
let secondRemaining = 10;

function updateCountdown() {
	console.log(`Countdown : ${secondRemaining} second remaining`);
	if (secondRemaining === 0) {
		stopCountdown();
	} else {
		secondRemaining--;
	}
}

countdown = setInterval(updateCountdown, 1000);
function stopCountdown() {
	clearInterval(countdown);
	console.log("Countdoun stopped");
}

// ----------------setTimeout ---------------------------
// function is executed after the timer expires
setTimeout(() => {
	console.log("First message");
}, 11000);

// ----
console.log("First Message");
setTimeout(() => {
	console.log("Second message");
}, 0);
console.log("Third message");

//Tricky loop --------- understand deeply
Output: for (var i = 1; i <= 5; i++) {
	setTimeout(() => {
		console.log(i);
	}, 3000);
} // this is problem

// setTimeout is asynchoronous

//Below is solution - 1
Output: for (let i = 1; i <= 5; i++) {
	setTimeout(() => {
		console.log(i);
	}, 3000);
}

//Not working
// for (var i = 1; i <= 5; i++) {
// 	setTimeout(
// 		((i_local) => {
// 			console.log(i_local);
// 		})(i),
// 		0
// 	);
// }

// Below is solution - 2
for (var i = 1; i <= 5; i++) {
	(function (i_local) {
		setTimeout(function () {
			console.log(i_local);
		}, 0);
	})(i);
}

//Usecase Example: Schedule Download Operation with delay
// Function to simulate starting a download
function startDownload() {
	console.log("Download started. Please wait...");
	// Simulated download logic
}
// Function to display a message and start the download after a
// delay
function initiateDownload() {
	console.log("Initiating download. The download will start in 3 seconds.");
	// Introduce a delay of 3 seconds before starting the download
	setTimeout(() => startDownload(), 3000);
}

//-------------setTimeout ---- and clearTimeout ------

let callCount = 0;
let rateLimitTimeout;
function performOperation() {
	console.log("Operation performed at : ", new Date());
}
function rateLimitOperation() {
	callCount++;
	if (callCount > 3) {
		console.log("Rate limit exceeded. Please wait");
		return;
	}
	clearTimeout(rateLimitTimeout);
	rateLimitTimeout = setTimeout(() => {
		callCount = 0;
	}, 5000);
	performOperation();
}

rateLimitOperation();
rateLimitOperation();
rateLimitOperation();
rateLimitOperation();
rateLimitOperation();
rateLimitOperation();
