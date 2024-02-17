const user = {
	username: "hitess",
	loginCount: 8,
	signedIn: true,
	getUerDetails: function () {
		console.log("got user details from database");
	},
};
// console.log(user.username);
// console.log(user.getUerDetails());
// console.log(this);

//new --------> constructor function --> give new copy

function User(username, loginCount, isLoggedIn) {
	this.username = username; //variable = value that we pass
	this.loginCount = loginCount;
	this.isLoggedIn = isLoggedIn;
	this.greeting = function () {
		console.log(`Welcome ${this.username} in this world.`);
	};

	return this; ///no need to used -- implicitly return
	// 'this' is the current context
}

//without the use of 'new' keyword
// const userOne = User("Akash", 3, true);
// const userTwo = User("Vikas", 4, true);
// console.log(userOne);

//with the use of 'new' keyword
const newUserOne = new User("Akash Gautam", 10, true);
const newUserTwo = new User("Vikas Gautam", 23, false);
// console.log(newUserOne);

// 1-  empty object create -- called instance --new object  { }
// 2 - constructor function call using new keyword
// 3 - this constructor function pack all argument and method in instance and give us
// 4 - using 'this' keyword all function are inject in instance
// 5 - given us

// console.log(newUserTwo.constructor);
// console.log(auto instanceof newUserOne);

//
function multipleBy5(num) {
	this.num = num;
	return num * 5;
}

multipleBy5.power = 2;
console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

// --------------------------    custom  function method
function createUser(username, score) {
	this.username = username;
	this.score = score;
}

createUser.prototype.increment = function () {
	this.score++; // 'this' means --- jisne bhi bulaya hai uski value badha do.
};

createUser.prototype.printMe = function () {
	console.log(`score is ${this.score}`);
};

/*
const chai = createUser("Chai", 25);
const tea = createUser("tea", 250);

chai.printMe();  // this give error because 'new' keyword is missing
So, */

const chai = new createUser("Chai", 25);
const tea = createUser("tea", 250);
chai.printMe();
