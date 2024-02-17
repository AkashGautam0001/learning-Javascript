// event and objects (must learn for mastering JS)

//singleton

// Object.create() - singleton
// object literals - not singleton

const mysys = Symbol();
const JsUser = {
	name: "Akash",
	"full name": "Akash Gautam",
	age: 21,
	[mysys]: "hashkey", // -> symbol are add
	location: "Jaipur",
	email: "akash@gmail.com",
	isLoggedIn: false,
	lastLoginDays: ["Monday", "Saturday"],
};

console.log(JsUser.email);
console.log(JsUser["email"]);

// console.log(JsUser.full name); not access using . opertor
console.log(JsUser["full name"]);

// Important : How to add Symbol as a key in Object ?
console.log(typeof JsUser[mysys]);

//creation of OBject
// Method 1 : object literal
let object = {
	name: "Akash",
	"full name": "Akash Gautam",
	age: 21,
	[mysys]: "hashkey", // -> symbol are add
	location: "Jaipur",
	email: "akash@gmail.com",
	isLoggedIn: false,
};

//Method 2:creating an instance of an object directly
let objectname = new Object();
objectname.id = 101;
objectname.name = "Alex";
objectname.salary = 10000;
console.log(objectname);

//Method 3: using Object constructor
function Emp(id, name, salary) {
	this.id = id;
	(this.name = name), (this.salary = salary);
}
const emp = new Emp(101, "Alex", 10000);
console.log(emp.id + " " + emp.name + " " + emp.salary);

delete emp.name;
console.log(emp);

//iteration on loop
for (const key in object) {
	console.log(object[key]);
}

//Methods in Object
let object2 = {
	name: "Akash",
	"full name": "Akash Gautam",
	age: 21,
	[mysys]: "HashingCode", // -> symbol are add
	location: "Benglore",
	email: "akashgautam@gmail.com",
	isLoggedIn: false,
};

console.log(Object.keys(object2));
console.log(Object.values(object2));
console.log(Object.entries(object2));
console.log(Object.assign({}, emp, { role: "developer" }));
console.log(Object.freeze(emp));
console.log(Object.isFrozen(emp));
console.log(Object.seal(emp));
console.log(Object.isSealed(emp));

//Object.fromEntires() creates an object from an iterable over entries. Each entry is a two-element Array with a
// property key and a property value.
const data = [
	["id", "12345"],
	["username", "dummy"],
	["email", "dummy@gamil.com"],
];
const dataObj = Object.fromEntries(data);
console.log(dataObj);

//It is the method in JavaScript that is used to create a new object with an existing specified object and
// properties.
const userOne = {
	userName: "dummy",
	id: "123454",
};
const userTwo = Object.create(userOne);
userTwo.dept = "webdev";
userTwo.userName = "alex";
userTwo.id = "23333334";
console.log(userTwo);

//indicating whether the object has the specified property
// as its own property.
console.log(Object.hasOwn(userOne, "userName"));

//It is the method in JavaScript that return an array of all properties found directly in a given object.
console.log(Object.getOwnPropertyNames(userOne));

//It returns an object that contains the
// attributes of the specified property.

const user = {
	userName: "dummy",
	id: "123454",
};
const des = Object.getOwnPropertyDescriptor(user, "userName");
console.log(des);
console.log(des.configurable);

console.log(Object.getOwnPropertyDescriptors(user));

//Object.defineProperty()
// The Object.defineProperty() method is used to define or modify a single property on an object. It allows you to
// specify the attributes of the property individually.
Object.defineProperty(user, "name", {
	value: "Akash Gautam",
	writable: false,
});
console.log(user.name);

//The Object.defineProperties() method is used to define or modify multiple properties on an object at once.
const dummyData = {};
Object.defineProperties(data, {
	username: {
		value: "Alex",
		writable: true,
	},
	email: {
		value: "akashgautam@google.com",
		writable: "true",
	},
});

const dummy = {
	userName: "dummy",
	id: "123454",
};
console.log(Object.isExtensible(dummy)); //check , it can extend or not

Object.preventExtensions(dummy); // it prevent for extendiblity
console.log(Object.isExtensible(dummy));
