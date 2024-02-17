//Destrcuturing array
const numb = [12, 2, 3, 4, 5, 6, 7];
const [one, two, three] = numb;
console.log(one);
console.log(two);
console.log(three);

//Destructuring string into variable by converting them to array
let [a, b] = "Akash Gautam";
// let [f, s] = "Akash Gautam".split();
let [f, s] = "Akash Gautam".split(" ");
let [i, j, k] = new Set([1, 2, 4]);
console.log(a);
console.log(b);
console.log(f);
console.log(s);
console.log(i);
console.log(j);
console.log(k);

// let user = {};
// [user.name, user.mid, user.last] = ("akash", "kumar", "gautam");
[user.name, user.mid, user.last] = ["akash", "kumar", "gautam"];
console.log(user);

//swapping of two number
let firstName2 = "Alpha";
let surname1 = "Beta";
[firstName2, surname1] = [surname1, firstName2];
console.log(firstName2, surname1);

//--------------------- Destructuring in Object -----------------
const person = {
	email: "John@gmail.com",
	userName: "john",
};
// const { email, userName } = user;
// console.log(email);
// console.log(userName);

const employee = {
	empId: 1,
	userName1: "johndoe",
};

const { empId, username, depart = "None" } = employee;
console.log(empId);
console.log(username);
console.log(depart);

//destructuring with default values and renaming
const car = {
	name: "Toyoto",
	color: "Red",
};
const { name: CarName, color: CarColor, owner = "John wick" } = car;
console.log(CarName);

//extracting specific properties using destructuring
const user1 = {
	name: "John",
	age: 33,
	city: "Bangalore",
	occupation: "Engineer",
	hobbies: ["coding", "traveling", "reading"],
};

// const { name, age, occupation } = user1;
// console.log(name);

//smart function parameter
// There are times when a function has many parameter, most of which are optional.
function specialFun({ name, age, city, isAdmin = false, ...otherProps }) {
	console.log("Other properties : ", otherProps);
}

const user2 = {
	name: "John",
	age: 33,
	city: "Bangalore",
	occupation: "Engineer",
	hobbies: ["coding", "traveling", "reading"],
};

specialFun(user2);

// Aliasing
// for object
// const { OriPropName: aliasName } = Object;

//Array
// const { OriEleName: aliasName } = Array;

// const data = {
// 	name: "Jonny",
// 	id: "1234424",
// 	email: "johny@gmail.com",
// };
// const { name: username } = data;
// console.log(username);

// const user1 = ["johny", "john@gmail.com", "112211"];
// const [userName, userEmail, userId] = user1;
console.log({
	userName,
	userEmail,
	userId,
});

//nested
const user = {
	name: "Rama",
	email: "rama@gmail.com",
	id: "12323232",
	comments: {
		id: "2442413",
		data: "21 January 2023",
		post: "This is a demo example of post",
	},
};

const {
	name,
	email,
	comments: { post, data },
} = user;

console.log(name);
console.log(email);
console.log(post);
console.log(data);

//Aliasing can also be done with nested object destructuring
