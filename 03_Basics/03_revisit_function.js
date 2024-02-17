const arr = new Array();
const object = new Object();

//---------------------------------
//We also create function using constructor
const newFunction = new Function();
console.log(newFunction);
console.log(newFunction());

// If function are also object, then it can have method too.
function newFunction() {}
// some important methods of functions
//call(), apply(), bind()

//call() -------
//we can say it is used to invoke a function / method belonging to one object by another object.
/*const person1 = {
	firstName: "John",
	lastName: "Doe",
};
const person2 = {
	fullName: function () {
		console.log(`${this.firstName} ${this.lastName}`);
	},
};
person2.fullName.call(person1);
*/
const akash = {
	firstName: "John",
	lastName: "Doe",
};
const vikas = {
	fullName: function (city, country) {
		// console.log(`${this.firstName} ${this.lastName} and  city is ${this.city} country is ${this.country}`);
		console.log(`${this.firstName} ${this.lastName} and living in ${city} and ${country}`);
	},
};
// vikas.fullName.call(akash, "Ghaziabad", "India");

//parameter is passed as array
vikas.fullName.apply(akash, ["ghaizabad", "India"]);

//bound() -----make a function and pass variables

const bound = vikas.fullName.bind(akash);
bound("New Delhi", "India");
bound("Washington", "USA");

// Example
function fullName(city, country) {
	//console.log(`My name is ${this.firstName} ${this.lastName} and i live in ${city}, ${country}`);
	return `My name is ${this.firstName} ${this.lastName} and i live in ${city}, ${country}`;
}
const person1 = {
	firstName: "Akash",
	lastName: "Gautam",
};

console.log(fullName.bind(person1, "Goa", "India"));
console.log(fullName.call(person1, "Goa", "India"));
