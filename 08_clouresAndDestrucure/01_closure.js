//read from website for more detail
function name() {
	let name = "Prahir";
	return function () {
		return name.concat("kumar");
	};
}
const fullName = name();
const nameIs = fullName();
console.log(nameIs);

function secretPassword() {
	const password = "x1232sk";
	return {
		guessPassword: function (guess) {
			return guess === password;
		},
	};
}

const passwordGame = secretPassword();
console.log(passwordGame().password); //note give error
console.log(passwordGame.guessPassword("hfkjdf"));
console.log(passwordGame.guessPassword("x1232sk"));

//How can closures be used to implement data hiding in JavaScript?
function createPerson(name, age) {
	let privateName = name;
	let privateAge = age;

	function isAdult() {
		return privateAge >= 18;
	}

	return {
		getName: function () {
			return privateName;
		},
		getAge: function () {
			return privateAge;
		},
		isAdult: function () {
			return isAdult();
		},
	};
}

const person = createPerson("John", "Doe");
console.log(person.getName());
console.log(person.getAge());
console.log(person.privateAge);
console.log(person.isAdult());
console.log(person.privateName);

// How can closures be useful in managing callbacks for asynchronous operations? Provide an example
// where closures help maintain context in an asynchronous scenario.?

function fetchData(url, callback) {
	console.log(`Initiating data fetch from ${url}`);
	setInterval(function () {
		const data = `fetch data from ${url}`;
		callback(data);
	}, 1000);
}

function processData(dataProcessor) {
	const url = "https://example.com/api/data";
	fetchData(url, function () {
		dataProcessor(data);
	});
}

processData(function (data) {
	console.log("Procesing data : ", data);
});
