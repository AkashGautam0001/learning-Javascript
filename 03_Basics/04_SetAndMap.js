const setDemo = new Set();
setDemo.add(1);
setDemo.add(2, 4, 5, 6, 6); //Noted
setDemo.add(9);
// console.log(setDemo);

// console.log(setDemo.size);

setDemo.add([1, 2, 3, 4]);

setDemo.add({ user: "Akash Gautam" });

// console.log(setDemo);
// setDemo.clear();
console.log(setDemo, setDemo.delete(5)); //return false, if not present
console.log(setDemo, setDemo.delete(1));

//Returns an iterable of all the key/value pairs in the set that contains an array of [value, value]
console.log(setDemo.entries());

function multiply(value1, value2) {
	console.log(`${value1} : ${value2 * 2}`);
}
setDemo.forEach(multiply);

console.log(setDemo.has(2));
console.log(setDemo.values());
console.log(setDemo.keys());

// create set from an array
const arr = ["apple", "Mango", "Banana", "orange"];
const demo = new Set(arr);
console.log(demo);

//creating an array from set -
const setData = new Set();
setData.add(1);
setData.add(2);
setData.add(4);
console.log(setData);
const arrSet = Array.from(setData);
console.log(arrSet);

//***************** Map in Javascript ******************/
const mapDemo = new Map();
console.log(mapDemo);

mapDemo.set("key", "value");
console.log(mapDemo);

const days = new Map();
days.set("mon", "monday");
days.set("tue", "Tuesday");
days.set("wed", "Wednesday");
console.log(days);
console.log(days.size);
// days.clear();
// console.log(days.clear());
console.log(days.delete("wed"));
console.log(days.entries());

//forEach function
days.forEach(function (value, key) {
	console.log(`${key} = ${value}`);
});

console.log(days.get("mon"));
console.log(days.has("tue"));
console.log(days.keys());
console.log(days.values());

//Create a map from the object and an object from
// map constructor --
const user = {
	name: "mangesh",
	email: "mangesh@gmail.com",
};
const userFinal = new Map(Object.entries(user));
console.log(userFinal);

//second method using loop
const newData = new Map();
console.log(newData);
for (let key in user) {
	if (user.hasOwnProperty(key)) {
		newData.set(key, user[key]);
	}
}
console.log(newData);

// convert map to object using Object.fromEntries //
// method
const map = new Map([
	["fruit", "apple"],
	["vegetables", "cabbage"],
]);
console.log(map);

const obj = Object.fromEntries(map);
console.log(obj);

//using loop
const map2 = new Map([
	["fruit", "apple"],
	["vegetables", "cabbage"],
]);
const objLoop = {};
map2.forEach((value, key) => {
	objLoop[key] = value;
});

console.log(objLoop);

// Q2.Write a function that takes an array of objects and a property name, and returns a Map where the specified
// property of each object is the key.
function arrayToMap(arr, key) {
	const resultMap = new Map();
	arr.forEach((obj) => resultMap.set(obj[key], obj));
	return resultMap;
}

const objects = [
	{ id: 1, name: "Alice" },
	{ id: 2, name: "Bob" },
	{ id: 3, nane: "charlie" },
];

console.log(arrayToMap(objects, "id"));
