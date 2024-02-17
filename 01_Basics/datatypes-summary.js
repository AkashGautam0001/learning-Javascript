// Primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// Not Primitive or reference type
//Array, Objects, Functions

// dynamically typed language

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId); //false

const bigNumber = 34533333333333234535n;

const heros = ["shaktiman"];
let obj = {
	name: "akash",
	age: 21,
};
const myfunction = function () {};

console.log(typeof heros);
console.log(typeof myfunction);
console.log(typeof obj);

// Stack - (Primitive) we get copy
// Heap (Non-Primitive) we get reference

let n = 89;
let m = n;
m = 998;
console.log(n);
console.log(m);

let userOne = {
	email: "use@google.com",
	upi: "user@ybl",
};

let userTwo = userOne;
userTwo.email = "akash@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);

// String interpolation

const gameName = new String("akash");
console.log(gameName[0]);
console.log(gameName.__proto__);
